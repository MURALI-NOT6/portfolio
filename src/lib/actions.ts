'use server';

import * as yup from 'yup';
import * as nodemailer from 'nodemailer';

export type FormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters."),
  email: yup.string().required("Email is required").email("Please enter a valid email address."),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: yup.InferType<typeof contactSchema>): Promise<FormState> {
  try {
    await contactSchema.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors: Record<string, string[]> = {};
      error.inner.forEach(err => {
        if (err.path) {
          errors[err.path] = err.errors;
        }
      });
      return {
        errors,
        message: 'Please correct the errors below.',
        success: false,
      };
    }
    return {
      message: 'An unexpected validation error occurred.',
      success: false,
    };
  }

  const { name, email, message } = data;

  // Validate environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_TO_EMAIL) {
    console.error('Missing SMTP environment variables');
    return {
      message: 'Email service is not configured properly.',
      success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_TO_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <div style="border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
              <h1 style="font-size: 24px; color: #333; margin: 0;">New Portfolio Contact Message</h1>
            </div>
            <div>
              <p style="margin-bottom: 20px;">You have received a new message from your portfolio contact form.</p>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
                <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                <div>
                  <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
                  <p style="margin: 0; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
                </div>
              </div>
            </div>
            <div style="text-align: center; padding-top: 20px; margin-top: 30px; border-top: 2px solid #eee;">
              <p style="font-size: 12px; color: #aaa; margin: 0;">This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
      text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return {
      message: "Thank you for your message! I'''ll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error('Error sending email:', error);

    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
      });
    }

    return {
      message: 'Sorry, something went wrong and I couldn\'t send your message. Please try again later.',
      success: false,
    };
  }
}
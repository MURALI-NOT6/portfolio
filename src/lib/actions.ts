"use server";

import { z } from "zod";

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success: boolean;
};

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(
  data: z.infer<typeof contactSchema>
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false
    };
  }
  
  // In a real app, you would send an email or save to a database.
  console.log("Form submitted successfully:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}

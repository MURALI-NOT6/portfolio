# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Environment Variables

To send emails using the contact form, you need to create a `.env.local` file in the root of the project and add the following environment variables:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=your-password
SMTP_FROM_EMAIL=from@example.com
SMTP_TO_EMAIL=to@example.com
```

**Note:** Replace the placeholder values with your actual SMTP credentials.

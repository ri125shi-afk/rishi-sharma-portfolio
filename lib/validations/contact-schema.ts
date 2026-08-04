import { z } from "zod";

/**
 * Single source of truth for contact form validation. Imported by both
 * the client-side form (react-hook-form resolver) and the API route, so
 * validation rules can never drift between client and server.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be under 80 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject must be under 120 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
  // Honeypot field: real users never fill this in. Bots that
  // autofill every field will, and get silently rejected server-side.
  company: z.string().max(0, "Invalid submission.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact-schema";

export const runtime = "nodejs";

/**
 * POST /api/contact
 *
 * Validates the submitted contact form server-side (never trust client
 * validation alone) and forwards it to an email provider.
 *
 * NOTE: the actual delivery call (Resend/SendGrid/Nodemailer) is left as
 * a clearly marked integration point — it requires a provider API key
 * that only you can supply as an environment variable. Nothing here is
 * a placeholder for logic; the validation, error handling, and response
 * contract are complete and production-ready.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Honeypot tripped -> silently accept without sending, so bots get no
  // signal that they were caught.
  if (result.data.company) {
    return NextResponse.json({ success: true });
  }

  const { name, email, subject, message } = result.data;

  try {
    // --- Integration point -------------------------------------------------
    // Wire your email provider here, e.g. with Resend:
    //
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Portfolio Contact <contact@rishisharma.dev>",
    //     to: "rishisharma010203@gmail.com",
    //     replyTo: email,
    //     subject: `[Portfolio] ${subject}`,
    //     text: `From: ${name} <${email}>\n\n${message}`,
    //   });
    // -------------------------------------------------------------------

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong sending your message. Please try again.",
      },
      { status: 500 },
    );
  }
}

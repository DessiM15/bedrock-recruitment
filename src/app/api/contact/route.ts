import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ?? "220998f7-021b-4e70-8108-ad330cf20c39";

const rateLimitMap = new Map<string, number>();

export async function POST(request: NextRequest) {
  try {
    // Basic rate limiting: 1 submission per minute per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip);

    if (lastSubmission && now - lastSubmission < 60_000) {
      return NextResponse.json(
        { error: "Please wait a moment before submitting again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Submit to Web3Forms
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Inquiry from ${name}`,
        from_name: "Get Paid Nation",
        name,
        email,
        phone,
        message,
      }),
    });

    if (!web3formsResponse.ok) {
      console.error("Web3Forms submission failed:", await web3formsResponse.text());
      throw new Error("Form submission failed");
    }

    // Send Resend emails as backup notifications
    await Promise.allSettled([
      sendNotificationEmail({ name, email, phone, message }),
      sendConfirmationEmail({ name, email }),
    ]);

    // Update rate limit
    rateLimitMap.set(ip, now);

    // Clean old entries periodically
    if (rateLimitMap.size > 1000) {
      const cutoff = now - 120_000;
      for (const [key, time] of rateLimitMap) {
        if (time < cutoff) rateLimitMap.delete(key);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your inquiry. Please try again." },
      { status: 500 }
    );
  }
}

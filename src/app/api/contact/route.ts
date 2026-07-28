import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";

// Web3Forms is submitted to directly from the browser (see ContactSection) —
// their free plan rejects server-side calls. This route is the optional Resend
// backup: it sends a second notification and the applicant confirmation email,
// and is a no-op unless RESEND_API_KEY is set.
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

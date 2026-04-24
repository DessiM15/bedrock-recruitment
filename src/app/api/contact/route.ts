import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";

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

    // Send notification to Bedrock team
    await sendNotificationEmail({ name, email, phone, message });

    // Send confirmation to applicant
    await sendConfirmationEmail({ name, email });

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

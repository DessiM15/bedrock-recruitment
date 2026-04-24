import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

const BEDROCK_EMAIL = process.env.NOTIFICATION_EMAIL || "team@bedrockfinancialplanning.com";

export async function sendNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping notification email");
    return { data: null, error: null };
  }
  return resend.emails.send({
    from: "Bedrock Recruitment <onboarding@resend.dev>",
    to: BEDROCK_EMAIL,
    subject: `New Recruitment Inquiry from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B2412;">New Recruitment Inquiry</h2>
        <hr style="border-color: #A38D6D;" />
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #F5F0E8; padding: 16px; border-radius: 8px;">
          ${escapeHtml(data.message)}
        </p>
        <hr style="border-color: #A38D6D;" />
        <p style="color: #666; font-size: 12px;">
          This inquiry was submitted through the Bedrock Financial Planning recruitment page.
        </p>
      </div>
    `,
  });
}

export async function sendConfirmationEmail(data: {
  name: string;
  email: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping confirmation email");
    return { data: null, error: null };
  }
  return resend.emails.send({
    from: "Bedrock Financial Planning <onboarding@resend.dev>",
    to: data.email,
    subject: "Thank You for Your Interest in Bedrock Financial Planning",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B2412;">Thank You, ${escapeHtml(data.name)}!</h2>
        <p>We've received your inquiry and are excited about the possibility of having you join the Bedrock family.</p>
        <p>A member of our team will review your submission and reach out within 1-2 business days to discuss next steps.</p>
        <p>In the meantime, feel free to call us directly at <a href="tel:9362433181" style="color: #A38D6D;">(936) 243-3181</a>.</p>
        <br />
        <p>Warm regards,</p>
        <p><strong>The Bedrock Financial Planning Team</strong></p>
        <hr style="border-color: #A38D6D;" />
        <p style="color: #666; font-size: 12px;">
          Bedrock Financial Planning &mdash; Building Careers on Solid Ground
        </p>
      </div>
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

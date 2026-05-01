import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "team@bedrockfinancialplanning.com";

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
    from: "Get Paid Nation <onboarding@resend.dev>",
    to: NOTIFICATION_EMAIL,
    subject: `New Inquiry from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A0A0A;">New Inquiry</h2>
        <hr style="border-color: #C9A84C;" />
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #F5F5F5; padding: 16px; border-radius: 8px;">
          ${escapeHtml(data.message)}
        </p>
        <hr style="border-color: #C9A84C;" />
        <p style="color: #666; font-size: 12px;">
          This inquiry was submitted through the Get Paid Nation website.
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
    from: "Get Paid Nation <onboarding@resend.dev>",
    to: data.email,
    subject: "Welcome to Get Paid Nation — Let\u2019s Get Started",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A0A0A;">Welcome, ${escapeHtml(data.name)}!</h2>
        <p>We\u2019ve received your inquiry and we\u2019re excited to connect with you about this opportunity.</p>
        <p>A member of our team will reach out within 1-2 business days to discuss how you can start building your dream lifestyle.</p>
        <p>In the meantime, feel free to call us directly at <a href="tel:9362433181" style="color: #FF2D2D; font-weight: bold;">(936) 243-3181</a>.</p>
        <br />
        <p>Talk soon,</p>
        <p><strong>The Get Paid Nation Team</strong></p>
        <hr style="border-color: #C9A84C;" />
        <p style="color: #666; font-size: 12px;">
          Get Paid Nation &mdash; Your Dream Life Starts Here
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

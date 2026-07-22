import { Resend } from "resend";

export type FormSubmission = {
  formType: "contact" | "consultation";
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  hearAboutUs?: string;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY must be set");
  }
  return new Resend(apiKey);
}

function getFromAddress() {
  // Sandbox: must be exactly onboarding@resend.dev until a custom domain is verified
  return process.env.EMAIL_FROM || "onboarding@resend.dev";
}

function getNotifyTo() {
  const to = process.env.EMAIL_TO;
  if (!to) {
    throw new Error(
      "EMAIL_TO must be set to your Resend account signup email for sandbox testing"
    );
  }
  return to;
}

async function sendEmail(options: {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) {
  const resend = getResend();
  const { data, error } = await resend.emails.send({
    from: getFromAddress(),
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function sendFormNotification(data: FormSubmission) {
  const isConsultation = data.formType === "consultation";
  const label = isConsultation
    ? "Free consultation booking"
    : "Contact form enquiry";

  const lines = [
    `New ${label.toLowerCase()} from the website`,
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Enquiry type: ${data.enquiryType}`,
    data.hearAboutUs ? `How they heard about us: ${data.hearAboutUs}` : null,
    "",
    "Message:",
    data.message,
  ].filter((line) => line !== null);

  await sendEmail({
    to: getNotifyTo(),
    replyTo: data.email,
    subject: `[Pinnacle] ${label} — ${data.fullName}`,
    text: lines.join("\n"),
    html: `
      <h2>${label}</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Enquiry type:</strong> ${escapeHtml(data.enquiryType)}</p>
      ${
        data.hearAboutUs
          ? `<p><strong>How they heard about us:</strong> ${escapeHtml(data.hearAboutUs)}</p>`
          : ""
      }
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendConfirmationEmail(
  to: string,
  name: string,
  formType: FormSubmission["formType"]
) {
  const isConsultation = formType === "consultation";

  const intro = isConsultation
    ? "Thank you for booking a free 30-minute consultation with Pinnacle Accountancy. We aim to respond within one business day to arrange a time that works for you."
    : "Thank you for getting in touch with Pinnacle Accountancy. We aim to respond to all enquiries within one business day.";

  await sendEmail({
    to,
    subject: isConsultation
      ? "Your free consultation request — Pinnacle Accountancy"
      : "Thank you for contacting Pinnacle Accountancy",
    text: `Dear ${name},\n\n${intro}\n\nKind regards,\nPinnacle Accountancy Team\n22 Cannon Street, London EC4M 5XD\n020 7123 4567`,
    html: `<p>Dear ${escapeHtml(name)},</p><p>${intro}</p><p>Kind regards,<br/>Pinnacle Accountancy Team<br/>22 Cannon Street, London EC4M 5XD<br/>020 7123 4567</p>`,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

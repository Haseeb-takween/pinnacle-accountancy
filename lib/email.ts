import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendConfirmationEmail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Pinnacle Accountancy" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Thank you for contacting Pinnacle Accountancy",
    text: `Dear ${name},\n\nThank you for getting in touch with Pinnacle Accountancy. We aim to respond to all enquiries within one business day.\n\nKind regards,\nPinnacle Accountancy Team\n22 Cannon Street, London EC4M 5XD\n020 7123 4567`,
    html: `<p>Dear ${name},</p><p>Thank you for getting in touch with Pinnacle Accountancy. We aim to respond to all enquiries within one business day.</p><p>Kind regards,<br/>Pinnacle Accountancy Team<br/>22 Cannon Street, London EC4M 5XD<br/>020 7123 4567</p>`,
  });
}

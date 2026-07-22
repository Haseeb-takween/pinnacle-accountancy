import { NextRequest } from "next/server";
import { sendConfirmationEmail, sendFormNotification } from "@/lib/email";
import { z } from "zod";

const schema = z.object({
  formType: z.enum(["contact", "consultation"]).default("contact"),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  enquiryType: z.string().min(1),
  message: z.string().min(10),
  hearAboutUs: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const data = parsed.data;

    // Best-effort emails — never block the success response
    if (process.env.RESEND_API_KEY && process.env.EMAIL_TO) {
      try {
        await sendFormNotification(data);
      } catch (err) {
        console.error("Failed to send notification email:", err);
      }

      try {
        await sendConfirmationEmail(data.email, data.fullName, data.formType);
      } catch (err) {
        console.error("Failed to send confirmation email:", err);
      }
    } else {
      console.error(
        "RESEND_API_KEY or EMAIL_TO not set — skipping email send"
      );
    }

    // Always succeed after valid submission so the UI can show thank-you
    return Response.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Submit API error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

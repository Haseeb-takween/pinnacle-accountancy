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

    // Required: notify the firm with the submission details
    await sendFormNotification(data);

    // Best-effort confirmation to the visitor — failure must not fail the request
    try {
      await sendConfirmationEmail(data.email, data.fullName, data.formType);
    } catch {
      // silent
    }

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

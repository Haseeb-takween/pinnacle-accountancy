import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import Submission from "@/models/submission";
import { sendConfirmationEmail } from "@/lib/email";
import { z } from "zod";

const schema = z.object({
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

    await connectDB();
    await Submission.create(parsed.data);

    // Best-effort email — failure must not fail the submission
    try {
      await sendConfirmationEmail(parsed.data.email, parsed.data.fullName);
    } catch {
      // silent
    }

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

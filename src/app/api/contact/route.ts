import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod/v4";
import { serverEnv } from "@/infrastructure/config/env";

const resend = new Resend(serverEnv.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1).min(2),
  email: z.string().min(1).email(),
  message: z.string().min(1).min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid fields", details: result.error.issues }, { status: 400 });
  }

  const { name, email, message } = result.data;

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "jadiazinf@gmail.com",
    subject: `Portfolio: Message from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

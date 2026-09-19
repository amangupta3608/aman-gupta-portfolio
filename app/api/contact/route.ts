import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form submission." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM_EMAIL;
    const toAddress = process.env.CONTACT_TO_EMAIL ?? "amangupta0213@gmail.com";

    if (!apiKey || !fromAddress) {
      return NextResponse.json(
        { error: "Email service is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL in your environment." },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: parsed.data.email,
        subject: `Portfolio contact from ${parsed.data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
            <h2>New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${parsed.data.name}</p>
            <p><strong>Email:</strong> ${parsed.data.email}</p>
            <p><strong>Message:</strong></p>
            <p>${parsed.data.message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Failed to send email: ${errorText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send the message." },
      { status: 500 },
    );
  }
}

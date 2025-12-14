import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: {
    name: string;
    message: string;
    email: string;
  } = await request.json();

  const publicKey = process.env.MAILJET_PUBLIC_KEY;
  const privateKey = process.env.MAILJET_PRIVATE_KEY;

  const auth = Buffer.from(`${publicKey}:${privateKey}`).toString("base64");

  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: body.email, Name: body.name },
          To: [{ Email: "faridmurshed9@gmail.com", Name: "Farid Murshed" }],
          Subject: "I visited your portfolio",
          TextPart: `${body.message}`,
        },
      ],
    }),
  });

  if (response.ok)
    return NextResponse.json({
      success: true,
      message: "Your message has been sent",
    });
  else
    return NextResponse.json({
      success: false,
      message: "Failed to send your message. Please try again after some time.",
    });
}

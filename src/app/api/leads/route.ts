import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
};

const resendApiUrl = "https://api.resend.com/emails";

function isValidLead(payload: Partial<LeadPayload>): payload is LeadPayload {
  return Boolean(
    payload.name?.trim() &&
      payload.email?.trim() &&
      payload.projectType?.trim() &&
      payload.budget?.trim() &&
      payload.details?.trim()
  );
}

export async function POST(request: Request) {
  let payload: Partial<LeadPayload> = {};

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!isValidLead(payload)) {
    return NextResponse.json(
      { error: "Please fill all required fields correctly." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail = process.env.LEADS_FROM_EMAIL ?? "Pixern Website <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Lead service is not configured. Set RESEND_API_KEY and LEADS_TO_EMAIL in environment variables."
      },
      { status: 500 }
    );
  }

  const html = `
    <h2>New Inquiry - Pixern Technology</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Project Type:</strong> ${payload.projectType}</p>
    <p><strong>Budget:</strong> ${payload.budget}</p>
    <p><strong>Project Details:</strong></p>
    <p>${payload.details.replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New Lead from ${payload.name}`,
      reply_to: payload.email,
      html
    })
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    return NextResponse.json(
      { error: "Failed to send lead email.", providerError: resendError },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

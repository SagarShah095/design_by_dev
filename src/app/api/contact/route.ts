import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  process.env.CONTACT_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwyU5YrVdJhptu1XbcFqip_Z-N059bJYdOTyK_K08UeUz318-OusOzc0nuHzk8i_emK/exec";

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() ?? "";
  const service = body.service ?? "";
  const budget = body.budget ?? "";

  if (!name || !email || !EMAIL.test(email) || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 422 }
    );
  }

  try {
    const params = new URLSearchParams({
      name,
      email,
      company,
      service,
      budget,
      message,
      date: new Date().toLocaleString(),
      timestamp: new Date().toISOString(),
    });

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: params,
      redirect: "follow",
    });

    const responseText = await res.text();
    console.info("[contact] Google Sheet response:", responseText);

    if (responseText.toLowerCase().includes("error: missing required fields")) {
      return NextResponse.json(
        { error: "Missing required fields for Google Sheet submission." },
        { status: 422 }
      );
    }
  } catch (err) {
    console.error("[contact] Failed to forward to Google Sheet:", err);
    return NextResponse.json(
      { error: "Could not send right now — please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

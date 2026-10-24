import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter sign-up.
 * Forwards { email, source, subscribedAt } as JSON to NEWSLETTER_WEBHOOK_URL
 * (Zapier / Make / your ESP). Until that variable is set the endpoint answers 503,
 * so the site never claims someone is subscribed when nothing was stored.
 */
export async function POST(request: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in => bot. Pretend success, store nothing.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhook) {
    console.error("[subscribe] NEWSLETTER_WEBHOOK_URL is not configured");
    return NextResponse.json({ error: "Sign-up isn't available right now. Please try again soon." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, source: "website", subscribedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (error) {
    console.error("[subscribe] webhook failed", error);
    return NextResponse.json({ error: "We couldn't sign you up just now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

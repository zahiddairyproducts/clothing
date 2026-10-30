import { NextResponse } from "next/server";
import { getProduct, getVariant } from "@/data/products";
import { site } from "@/data/site";
import { parseLineKey } from "@/components/shop/cart-store";
import { deliveryCost } from "@/lib/pricing";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UK_POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const MAX_QTY = 10;

const clean = (v: unknown, max = 120) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pence = (pounds: number) => Math.round(pounds * 100);

/**
 * Creates a Stripe Checkout Session and returns its hosted-page URL.
 * Prices are always taken from the catalogue on the server, never from the browser.
 * Until STRIPE_SECRET_KEY is set the endpoint answers 503, so the site never pretends to take orders.
 */
export async function POST(request: Request) {
  let body: { items?: unknown; customer?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const c = body.customer ?? {};
  if (clean(c.company)) return NextResponse.json({ error: "Invalid request." }, { status: 400 }); // honeypot

  const email = clean(c.email, 254).toLowerCase();
  const phone = clean(c.phone, 30);
  const name = clean(c.name);
  const line1 = clean(c.line1);
  const line2 = clean(c.line2);
  const city = clean(c.city);
  const postcode = clean(c.postcode, 10).toUpperCase();

  if (!EMAIL.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  if (phone.replace(/\D/g, "").length < 10) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 422 });
  if (!name || !line1 || !city) return NextResponse.json({ error: "Please complete your delivery address." }, { status: 422 });
  if (!UK_POSTCODE.test(postcode)) return NextResponse.json({ error: "Please enter a valid UK postcode." }, { status: 422 });

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 50) {
    return NextResponse.json({ error: "Your bag is empty." }, { status: 422 });
  }

  const params = new URLSearchParams();
  let subtotal = 0;
  const summary: string[] = [];
  let i = 0;
  for (const raw of body.items as Array<{ key?: unknown; qty?: unknown }>) {
    const key = clean(raw?.key, 200);
    const qty = Number(raw?.qty);
    const { productId, variantId, size } = parseLineKey(key);
    const product = getProduct(productId);
    const variant = product && getVariant(product, variantId);
    const sizeOk = product && (product.sizes?.length ? !!size && product.sizes.includes(size) : !size);
    if (!product || !variant || !sizeOk || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) {
      return NextResponse.json({ error: "Something in your bag is no longer available. Please review your bag." }, { status: 422 });
    }
    const options = [product.variants.length > 1 ? variant.label : null, size ? `Size ${size}` : null].filter(Boolean).join(", ");
    params.set(`line_items[${i}][quantity]`, String(qty));
    params.set(`line_items[${i}][price_data][currency]`, site.currency.toLowerCase());
    params.set(`line_items[${i}][price_data][unit_amount]`, String(pence(product.price)));
    params.set(`line_items[${i}][price_data][product_data][name]`, product.name);
    if (options) params.set(`line_items[${i}][price_data][product_data][description]`, options);
    subtotal += product.price * qty;
    summary.push(`${qty}x ${product.id} (${options || "-"})`);
    i++;
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error("[checkout] STRIPE_SECRET_KEY is not configured");
    return NextResponse.json({ error: "Checkout isn't available right now. Please try again soon." }, { status: 503 });
  }

  const delivery = deliveryCost(subtotal);
  const origin = new URL(request.url).origin;
  params.set("mode", "payment");
  params.set("success_url", `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${origin}/checkout`);
  params.set("customer_email", email);
  params.set("phone_number_collection[enabled]", "false");
  params.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
  params.set("shipping_options[0][shipping_rate_data][display_name]", delivery === 0 ? "Complimentary UK delivery" : "UK delivery");
  params.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(pence(delivery)));
  params.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", site.currency.toLowerCase());
  // Delivery address travels with the payment so it shows in the Stripe dashboard.
  params.set("payment_intent_data[shipping][name]", name);
  params.set("payment_intent_data[shipping][phone]", phone);
  params.set("payment_intent_data[shipping][address][line1]", line1);
  if (line2) params.set("payment_intent_data[shipping][address][line2]", line2);
  params.set("payment_intent_data[shipping][address][city]", city);
  params.set("payment_intent_data[shipping][address][postal_code]", postcode);
  params.set("payment_intent_data[shipping][address][country]", "GB");
  params.set("metadata[items]", summary.join("; ").slice(0, 500));
  params.set("metadata[phone]", phone);

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { authorization: `Bearer ${secret}`, "content-type": "application/x-www-form-urlencoded" },
      body: params,
    });
    const session = (await res.json()) as { url?: string; error?: { message?: string } };
    if (!res.ok || !session.url) throw new Error(session.error?.message ?? `Stripe responded ${res.status}`);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe session failed", error);
    return NextResponse.json({ error: "We couldn't start payment just now. Please try again." }, { status: 502 });
  }
}

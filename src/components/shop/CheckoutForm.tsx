"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Photo } from "@/components/ui/Photo";
import { Button, ButtonLink } from "@/components/ui/Button";
import { formatPrice } from "@/lib/format";
import { orderTotal } from "@/lib/pricing";
import { BagSummary } from "./BagSummary";
import { useCart } from "./CartProvider";
import { useHydrated } from "./useHydrated";

const field =
  "w-full border-b border-field bg-transparent px-1 py-3 text-[13px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-maroon";
const label = "mt-5 block text-[10px] font-semibold tracking-[.14em] text-maroon uppercase";

export function CheckoutForm() {
  const { lines, subtotal } = useCart();
  const hydrated = useHydrated();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  if (!hydrated) return <div aria-busy="true" className="min-h-[320px]" />;

  if (lines.length === 0) {
    return (
      <div className="px-4 py-16 text-center text-muted">
        <div className="mb-2.5 font-serif text-[32px] text-maroon italic">Your bag is empty.</div>
        <p className="mb-7">Add something lovely before checking out.</p>
        <ButtonLink href="/shop">Discover the collection</ButtonLink>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          items: lines.map((l) => ({ key: l.key, qty: l.qty })),
          customer: Object.fromEntries(data.entries()),
        }),
      });
      const body = (await res.json().catch(() => null)) as { url?: string; error?: string } | null;
      if (!res.ok || !body?.url) throw new Error(body?.error ?? "Something went wrong. Please try again.");
      window.location.assign(body.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-10 desktop:grid-cols-[1fr_380px] desktop:gap-16">
      <form onSubmit={onSubmit} className="max-w-[620px]">
        <h2 className="font-serif text-[24px] font-medium">Contact</h2>
        <label className={label} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        <label className={label} htmlFor="phone">
          Phone (for the courier)
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />

        <h2 className="mt-10 font-serif text-[24px] font-medium">Delivery address</h2>
        <label className={label} htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
        <label className={label} htmlFor="line1">
          Address line 1
        </label>
        <input id="line1" name="line1" required autoComplete="address-line1" className={field} />
        <label className={label} htmlFor="line2">
          Address line 2 (optional)
        </label>
        <input id="line2" name="line2" autoComplete="address-line2" className={field} />
        <div className="grid gap-x-6 tablet:grid-cols-2">
          <div>
            <label className={label} htmlFor="city">
              Town / city
            </label>
            <input id="city" name="city" required autoComplete="address-level2" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="postcode">
              Postcode
            </label>
            <input id="postcode" name="postcode" required autoComplete="postal-code" className={`${field} uppercase`} />
          </div>
        </div>
        <p className="mt-5 text-[11px] text-muted">We currently deliver to the United Kingdom only.</p>
        {/* Honeypot */}
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <div role="alert" className="mt-6 min-h-5 text-[12px] text-error">
          {error}
        </div>
        <Button type="submit" disabled={busy} className="mt-2 w-full disabled:opacity-60">
          {busy ? "Taking you to secure payment…" : `Pay ${formatPrice(orderTotal(subtotal))}`}
        </Button>
        <p className="mt-4 text-[11px] leading-[1.7] text-muted">
          You will enter your card details on a secure payment page. By continuing you agree to our{" "}
          <Link href="/terms" className="underline">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </form>

      <aside aria-label="Order summary" className="h-fit border border-maroon/30 bg-paper-2/60 p-6">
        <h2 className="mb-4 font-serif text-[24px] font-medium">Your order</h2>
        <ul className="mb-5">
          {lines.map(({ key, product, variant, size, qty }) => (
            <li key={key} className="grid grid-cols-[56px_1fr_auto] gap-3 border-b border-line py-3">
              <div className="relative h-[70px] overflow-hidden bg-paper-2">
                <Photo src={variant.photos[0].src} alt="" fill sizes="56px" className="object-cover object-top" />
              </div>
              <div className="text-[12px] leading-snug">
                {product.name}
                <small className="mt-1 block text-[10px] text-muted">
                  {[product.variants.length > 1 ? variant.label : null, size ? `Size ${size}` : null, `Qty ${qty}`]
                    .filter(Boolean)
                    .join(" · ")}
                </small>
              </div>
              <span className="text-[12px] font-semibold">{formatPrice(product.price * qty)}</span>
            </li>
          ))}
        </ul>
        <BagSummary subtotal={subtotal} />
        <Link href="/cart" className="mt-5 block text-[10px] tracking-[.13em] text-muted uppercase underline">
          Edit bag
        </Link>
      </aside>
    </div>
  );
}

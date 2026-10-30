"use client";

import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import { categoryLabel } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import { BagSummary } from "./BagSummary";
import { useCart } from "./CartProvider";
import { useHydrated } from "./useHydrated";

export function CartView() {
  const { lines, subtotal, setQty, remove } = useCart();
  const hydrated = useHydrated();

  if (!hydrated) return <div aria-busy="true" className="min-h-[320px]" />;

  if (lines.length === 0) {
    return (
      <div className="px-4 py-16 text-center text-muted">
        <div className="mb-2.5 font-serif text-[32px] text-maroon italic">A little room for colour.</div>
        <p className="mb-7">Your bag is waiting for something lovely.</p>
        <ButtonLink href="/shop">Discover the collection</ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-10 desktop:grid-cols-[1fr_360px] desktop:gap-16">
      <ul className="border-t border-line">
        {lines.map(({ key, product, variant, size, qty }) => (
          <li key={key} className="grid grid-cols-[88px_1fr_auto] gap-4 border-b border-line py-5 tablet:grid-cols-[110px_1fr_auto]">
            <Link href={`/products/${product.id}`} className="relative block h-[120px] overflow-hidden bg-paper-2 tablet:h-[150px]">
              <Photo src={variant.photos[0].src} alt="" fill sizes="110px" className="object-cover object-top" />
            </Link>
            <div>
              <Link href={`/products/${product.id}`} className="block text-[13px] leading-snug font-medium hover:text-maroon">
                {product.name}
              </Link>
              <small className="mt-1.5 block text-[11px] text-muted">
                {[product.variants.length > 1 ? variant.label : null, size ? `Size ${size}` : null]
                  .filter(Boolean)
                  .join(" · ") || categoryLabel(product.category)}
              </small>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  aria-label={`Decrease quantity of ${product.name}`}
                  onClick={() => setQty(key, qty - 1)}
                  className="size-[28px] border border-line"
                >
                  −
                </button>
                <span aria-live="polite" className="min-w-4 text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label={`Increase quantity of ${product.name}`}
                  onClick={() => setQty(key, qty + 1)}
                  className="size-[28px] border border-line"
                >
                  +
                </button>
              </div>
              <button type="button" onClick={() => remove(key)} className="mt-3 text-[11px] text-muted underline">
                Remove
              </button>
            </div>
            <strong className="text-[13px] font-semibold">{formatPrice(product.price * qty)}</strong>
          </li>
        ))}
      </ul>

      <aside aria-label="Order summary" className="h-fit border border-maroon/30 bg-paper-2/60 p-6">
        <h2 className="mb-5 font-serif text-[24px] font-medium">Order summary</h2>
        <BagSummary subtotal={subtotal} />
        <ButtonLink href="/checkout" className="mt-6 w-full">
          Checkout
        </ButtonLink>
        <Link href="/shop" className="mt-4 block text-center text-[10px] tracking-[.13em] text-muted uppercase underline">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}

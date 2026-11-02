"use client";

import { formatPrice } from "@/lib/format";
import { orderTotal } from "@/lib/pricing";

/** Subtotal / delivery / total block shared by the cart and checkout pages. */
export function BagSummary({ subtotal }: { subtotal: number }) {
  return (
    <div className="text-[13px]">
      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Delivery</dt>
          <dd>Free</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-3 text-[15px] font-semibold">
          <dt>Total</dt>
          <dd>{formatPrice(orderTotal(subtotal))}</dd>
        </div>
      </dl>
      <p className="mt-4 text-[11px] leading-[1.7] text-muted">
        Free delivery on every order. Sent by Royal Mail, arriving in 4 to 5 days.
      </p>
    </div>
  );
}

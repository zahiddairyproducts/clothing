"use client";

import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { deliveryCost, orderTotal } from "@/lib/pricing";

/** Subtotal / delivery / total block shared by the cart and checkout pages. */
export function BagSummary({ subtotal }: { subtotal: number }) {
  const delivery = deliveryCost(subtotal);
  const remaining = site.freeDeliveryThreshold - subtotal;
  return (
    <div className="text-[13px]">
      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>UK delivery</dt>
          <dd>{delivery === 0 ? "Free" : formatPrice(delivery)}</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-3 text-[15px] font-semibold">
          <dt>Total</dt>
          <dd>{formatPrice(orderTotal(subtotal))}</dd>
        </div>
      </dl>
      {remaining > 0 && (
        <p className="mt-4 text-[11px] leading-[1.7] text-muted">
          Add {formatPrice(remaining)} more for complimentary UK delivery.
        </p>
      )}
    </div>
  );
}

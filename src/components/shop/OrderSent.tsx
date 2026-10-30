"use client";

import { useSyncExternalStore } from "react";

/** Shows the order reference and a "send again" link if WhatsApp didn't open. */
const noop = () => () => {};
const KEY = "rangeen-dhaage:last-order";

export function OrderSent({ ref: orderRef }: { ref?: string }) {
  // Read sessionStorage after hydration without a setState-in-effect; the server snapshot is always null.
  const url = useSyncExternalStore(
    noop,
    () => {
      try {
        const saved = JSON.parse(sessionStorage.getItem(KEY) ?? "null") as { ref?: string; url?: string } | null;
        return saved?.url && saved.ref === orderRef ? saved.url : null;
      } catch {
        return null;
      }
    },
    () => null,
  );

  return (
    <>
      {orderRef && <p className="mb-2 text-[12px] font-semibold tracking-[.12em] text-maroon">Order {orderRef}</p>}
      {url && (
        <p className="mx-auto mb-7 max-w-[420px] text-[12px] leading-[1.8] text-muted">
          WhatsApp didn&rsquo;t open?{" "}
          <a href={url} target="_blank" rel="noopener" className="text-maroon underline">
            Send your order on WhatsApp
          </a>
          .
        </p>
      )}
    </>
  );
}

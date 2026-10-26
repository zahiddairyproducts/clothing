"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { categoryLabel } from "@/data/categories";
import { site } from "@/data/site";
import { cx } from "@/lib/cx";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/icons";
import { useCart } from "./CartProvider";
import { useToast } from "./ToastProvider";

export function CartDrawer() {
  const { lines, count, subtotal, setQty, remove, isOpen, close } = useCart();
  const { toast } = useToast();
  const closeButton = useRef<HTMLButtonElement>(null);

  // While open: lock page scroll, hide the page from keyboard/AT, close on Esc, restore focus after.
  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    const page = document.getElementById("site");
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      page?.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={close}
        className={cx(
          "fixed inset-0 z-10 bg-ink/24 transition-[opacity,visibility] duration-[250ms]",
          isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        inert={!isOpen}
        className={cx(
          "fixed inset-y-0 right-0 z-[11] flex w-[min(430px,100%)] flex-col bg-paper p-6 transition-[transform,visibility] duration-300",
          // `visibility` + classic `transform` work in older mobile browsers that lack `translate` / `dvh`
          isOpen ? "visible [transform:none]" : "invisible [transform:translateX(102%)]",
        )}
      >
        <div className="flex items-center justify-between border-b border-line pb-5">
          <h2 className="font-serif text-[29px] leading-normal font-medium">
            Your bag{" "}
            <span className="font-sans text-[12px] font-normal text-muted">
              ({count} {count === 1 ? "item" : "items"})
            </span>
          </h2>
          <button ref={closeButton} type="button" onClick={close} aria-label="Close shopping bag" className="p-1 text-[25px]">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-auto py-[15px]">
          {lines.length === 0 ? (
            <div className="px-[15px] py-[55px] text-center text-muted">
              <div className="mb-2.5 font-serif text-[32px] text-maroon italic">A little room for colour.</div>
              Your bag is waiting for something lovely.
              <br />
              <br />
              <Link
                href="/shop"
                onClick={close}
                className="border-b border-maroon pb-[7px] text-[10px] tracking-[.13em] text-ink uppercase"
              >
                Discover the collection
              </Link>
            </div>
          ) : (
            <ul>
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="grid grid-cols-[75px_1fr_auto] gap-[13px] border-b border-line py-[13px]">
                  <div className="relative h-[95px] overflow-hidden bg-paper-2">
                    <Image src={product.image} alt="" fill sizes="75px" className="object-cover" />
                  </div>
                  <div>
                    <strong className="block text-[12px] font-medium">{product.name}</strong>
                    <small className="mt-[5px] block text-[10px] text-muted">{categoryLabel(product.category)}</small>
                    <div className="mt-2.5 flex items-center gap-3">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => setQty(product.id, qty - 1)}
                        className="size-[23px] border border-line"
                      >
                        −
                      </button>
                      <span aria-live="polite">{qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => setQty(product.id, qty + 1)}
                        className="size-[23px] border border-line"
                      >
                        +
                      </button>
                    </div>
                    <button type="button" onClick={() => remove(product.id)} className="mt-2 text-[10px] text-muted underline">
                      Remove
                    </button>
                  </div>
                  <strong className="text-[12px] font-semibold">{formatPrice(product.price * qty)}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-line pt-[18px]">
            <div className="mb-[15px] flex justify-between text-[13px]">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="mb-3 text-[10px] leading-[1.6] text-muted">
              Delivery and any applicable taxes are calculated at checkout. Complimentary UK delivery on orders over £
              {site.freeDeliveryThreshold}.
            </p>
            {/*
              TODO(checkout): replace with a real payment flow (e.g. Stripe Checkout session created by a
              route handler). Until then the button is honest about not taking orders.
            */}
            <Button className="w-full" onClick={() => toast("Checkout isn't switched on yet.")}>
              Continue to checkout
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}

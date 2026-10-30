"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryLabel } from "@/data/categories";
import { getVariant, type Product } from "@/data/products";
import { site } from "@/data/site";
import { cx } from "@/lib/cx";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { useCart } from "./CartProvider";
import { ProductGallery } from "./ProductGallery";
import { useToast } from "./ToastProvider";

export function ProductView({ product }: { product: Product }) {
  const { add, open } = useCart();
  const { toast } = useToast();
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [size, setSize] = useState<string | undefined>();
  const [error, setError] = useState("");
  const variant = getVariant(product, variantId) ?? product.variants[0];
  const hasColours = product.variants.length > 1;
  const hasSizes = (product.sizes?.length ?? 0) > 0;

  function addToBag() {
    if (hasSizes && !size) {
      setError("Please choose a size first.");
      return;
    }
    setError("");
    add(product.id, variant.id, size);
    toast(`${product.name} added to your bag`);
    open();
  }

  return (
    <div className="grid gap-8 desktop:grid-cols-[1.05fr_1fr] desktop:gap-14">
      <div className="desktop:sticky desktop:top-6 desktop:self-start">
        <ProductGallery key={variant.id} photos={variant.photos} name={product.name} />
      </div>

      <div>
        <Link
          href={`/shop?category=${product.category}`}
          className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase hover:underline"
        >
          {categoryLabel(product.category)}
        </Link>
        <h1 className="mt-2.5 font-serif text-[34px] leading-[1.1] font-medium tracking-[-.03em] tablet:text-[clamp(34px,3.6vw,48px)]">
          {product.name}
        </h1>
        <p className="mt-3 text-[20px] font-semibold text-maroon">{formatPrice(product.price)}</p>
        <p className="mt-5 max-w-[520px] text-[13px] leading-[1.9] text-ink-soft">{product.description}</p>

        {hasColours && (
          <fieldset className="mt-7">
            <legend className="text-[10px] tracking-[.16em] text-muted uppercase">
              Colour: <span className="text-ink">{variant.label}</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  aria-pressed={v.id === variant.id}
                  aria-label={v.label}
                  title={v.label}
                  onClick={() => setVariantId(v.id)}
                  className={cx(
                    "grid size-9 place-items-center rounded-full border transition-colors",
                    v.id === variant.id ? "border-maroon" : "border-transparent hover:border-maroon/40",
                  )}
                >
                  <span className="size-6 rounded-full border border-black/10" style={{ background: v.swatch }} />
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {hasSizes && (
          <fieldset className="mt-6">
            <legend className="text-[10px] tracking-[.16em] text-muted uppercase">
              Size{size ? <>: <span className="text-ink">{size}</span></> : ""}
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes!.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={s === size}
                  onClick={() => {
                    setSize(s);
                    setError("");
                  }}
                  className={cx(
                    "min-w-12 border px-4 py-2.5 text-[11px] tracking-[.1em] transition-colors",
                    s === size
                      ? "border-maroon bg-maroon text-paper"
                      : "border-maroon/30 hover:border-maroon hover:text-maroon",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <div className="mt-8 max-w-[520px]">
          <Button className="w-full" onClick={addToBag} arrow={false}>
            Add to bag — {formatPrice(product.price)}
          </Button>
          <p role="alert" className="mt-2 min-h-[18px] text-[11px] text-error">
            {error}
          </p>
        </div>

        <div className="mt-6 max-w-[520px] border-t border-dashed border-maroon/40">
          {product.details.length > 0 && (
            <details open className="group border-b border-dashed border-maroon/40 py-4">
              <summary className="cursor-pointer text-[10px] tracking-[.16em] uppercase">Details</summary>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[12px] leading-[1.7] text-ink-soft">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </details>
          )}
          <details className="border-b border-dashed border-maroon/40 py-4">
            <summary className="cursor-pointer text-[10px] tracking-[.16em] uppercase">Delivery</summary>
            <p className="mt-3 text-[12px] leading-[1.7] text-ink-soft">
              Complimentary UK delivery on orders over £{site.freeDeliveryThreshold}.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

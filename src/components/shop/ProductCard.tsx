"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice, formatPriceShort } from "@/lib/format";
import { HeartIcon } from "@/components/ui/icons";
import { useCart } from "./CartProvider";
import { useToast } from "./ToastProvider";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toast } = useToast();
  const [saved, setSaved] = useState(false);

  return (
    <article id={`product-${product.id}`} className="group min-w-0 scroll-mt-24">
      <div className="relative aspect-[.73] overflow-hidden border border-line bg-paper-2">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          quality={85}
          sizes="(min-width: 851px) 22vw, 48vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute top-[7px] left-[7px] bg-paper px-1.5 py-[5px] text-[7px] tracking-[.12em] text-ink uppercase tablet:top-3 tablet:left-3 tablet:px-[9px] tablet:py-1.5 tablet:text-[8px]">
          {product.tag}
        </span>
        <button
          type="button"
          aria-pressed={saved}
          aria-label={`Save ${product.name}`}
          onClick={() => {
            setSaved((v) => !v);
            toast(saved ? "Removed from saved pieces" : "Added to your saved pieces");
          }}
          className={`absolute top-1.5 right-1.5 grid size-7 place-items-center rounded-full bg-paper/96 text-[18px] tablet:top-2.5 tablet:right-2.5 tablet:size-8 ${saved ? "text-accent-deep" : "text-accent"}`}
        >
          <HeartIcon filled={saved} />
        </button>
        <button
          type="button"
          onClick={() => {
            add(product.id);
            toast(`${product.name} added to your bag`);
          }}
          className="absolute inset-x-1.5 bottom-2.5 h-9 border border-accent-soft bg-paper/97 text-[8px] tracking-[.15em] text-ink uppercase transition-transform duration-[250ms] tablet:inset-x-2.5 tablet:text-[9px] desktop:h-[41px] desktop:translate-y-[60px] desktop:group-focus-within:translate-y-0 desktop:group-hover:translate-y-0"
        >
          Add to bag — {formatPriceShort(product.price)}
        </button>
      </div>

      <div className="px-px pt-2.5 tablet:pt-[13px]">
        <h3 className="text-[11px] leading-[1.4] font-normal tablet:text-[12px]">{product.name}</h3>
        <div className="mt-[7px] flex justify-between gap-2 text-[10px] tablet:text-[11px]">
          <span className="font-semibold text-accent">{formatPrice(product.price)}</span>
          <span>Ready to wear</span>
        </div>
        <ul className="mt-2.5 flex gap-[5px]" aria-label="Available colours">
          {product.colors.map((hex) => (
            <li key={hex} className="size-2.5 rounded-full border border-black/10" style={{ background: hex }} />
          ))}
        </ul>
      </div>
    </article>
  );
}

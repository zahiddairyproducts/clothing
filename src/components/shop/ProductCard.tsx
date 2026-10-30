"use client";

import Link from "next/link";
import { categoryLabel } from "@/data/categories";
import { needsOptions, primaryPhoto, type Product } from "@/data/products";
import { formatPrice, formatPriceShort } from "@/lib/format";
import { Photo } from "@/components/ui/Photo";
import { HeartIcon } from "@/components/ui/icons";
import { useCart } from "./CartProvider";
import { useToast } from "./ToastProvider";
import { useWishlist } from "./useWishlist";

const quickClass =
  "absolute inset-x-1.5 bottom-2.5 z-10 grid h-9 place-items-center border border-maroon/40 bg-paper/97 text-[8px] tracking-[.15em] text-maroon uppercase transition-[transform,background-color,color] duration-[250ms] hover:bg-maroon hover:text-paper tablet:inset-x-2.5 tablet:text-[9px] desktop:h-[41px] desktop:translate-y-[60px] desktop:group-focus-within:translate-y-0 desktop:group-hover:translate-y-0";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toast } = useToast();
  const wishlist = useWishlist();
  const saved = wishlist.has(product.id);
  const photo = primaryPhoto(product);
  const href = `/products/${product.id}`;
  const options = needsOptions(product);
  const extraColours = product.variants.length - 5;

  return (
    <article id={`product-${product.id}`} className="group min-w-0 scroll-mt-24">
      <div className="relative aspect-[.73] overflow-hidden border border-line bg-paper-2">
        <Link href={href} className="absolute inset-0 block">
          <Photo
            src={photo.src}
            alt={photo.alt}
            fill
            quality={85}
            sizes="(min-width: 851px) 22vw, 48vw"
            style={photo.focus ? { objectPosition: photo.focus } : undefined}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        </Link>
        {product.tag && (
          <span className="pointer-events-none absolute top-[7px] left-[7px] z-10 bg-paper px-1.5 py-[5px] text-[7px] tracking-[.12em] text-maroon uppercase tablet:top-3 tablet:left-3 tablet:px-[9px] tablet:py-1.5 tablet:text-[8px]">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wish list` : `Save ${product.name} to wish list`}
          onClick={() => wishlist.toggle(product.id, product.name)}
          className={`absolute top-1.5 right-1.5 z-10 grid size-7 place-items-center rounded-full bg-paper/96 text-[18px] tablet:top-2.5 tablet:right-2.5 tablet:size-8 ${saved ? "text-maroon-deep" : "text-maroon"}`}
        >
          <HeartIcon filled={saved} />
        </button>
        {options ? (
          <Link href={href} className={quickClass}>
            Choose options
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              add(product.id, product.variants[0].id);
              toast(`${product.name} added to your bag`);
            }}
            className={quickClass}
          >
            Add to bag — {formatPriceShort(product.price)}
          </button>
        )}
      </div>

      <div className="px-px pt-2.5 tablet:pt-[13px]">
        <h3 className="text-[11px] leading-[1.4] font-normal tablet:text-[12px]">
          <Link href={href} className="transition-colors hover:text-maroon">
            {product.name}
          </Link>
        </h3>
        <div className="mt-[7px] flex justify-between gap-2 text-[10px] tablet:text-[11px]">
          <span className="font-semibold text-maroon">{formatPrice(product.price)}</span>
          <span>{categoryLabel(product.category)}</span>
        </div>
        {product.variants.length > 1 && (
          <ul className="mt-2.5 flex items-center gap-[5px]" aria-label="Available colours">
            {product.variants.slice(0, 5).map((v) => (
              <li
                key={v.id}
                title={v.label}
                className="size-2.5 rounded-full border border-black/10"
                style={{ background: v.swatch }}
              />
            ))}
            {extraColours > 0 && <li className="text-[9px] text-muted">+{extraColours}</li>}
          </ul>
        )}
      </div>
    </article>
  );
}

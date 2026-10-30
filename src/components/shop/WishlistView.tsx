"use client";

import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Button, ButtonLink } from "@/components/ui/Button";
import { categoryLabel } from "@/data/categories";
import { getProduct, needsOptions, primaryPhoto, type Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";
import { useToast } from "./ToastProvider";
import { useHydrated } from "./useHydrated";
import { useWishlist } from "./useWishlist";

export function WishlistView() {
  const { ids, remove } = useWishlist();
  const { add, open } = useCart();
  const { toast } = useToast();
  const hydrated = useHydrated();

  if (!hydrated) return <div aria-busy="true" className="min-h-[320px]" />;

  const products = ids.map(getProduct).filter((p): p is Product => !!p);

  if (products.length === 0) {
    return (
      <div className="px-4 py-16 text-center text-muted">
        <div className="mb-2.5 font-serif text-[32px] text-maroon italic">Nothing saved yet.</div>
        <p className="mb-7">Tap the heart on any piece you love and it will wait for you here.</p>
        <ButtonLink href="/shop">Discover the collection</ButtonLink>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-9 tablet:grid-cols-3 tablet:gap-x-5 desktop:grid-cols-4">
      {products.map((product) => {
        const photo = primaryPhoto(product);
        const href = `/products/${product.id}`;
        return (
          <li key={product.id} className="min-w-0">
            <div className="relative aspect-[.73] overflow-hidden border border-line bg-paper-2">
              <Link href={href} className="absolute inset-0 block">
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 851px) 22vw, 48vw"
                  style={photo.focus ? { objectPosition: photo.focus } : undefined}
                  className="object-cover object-top"
                />
              </Link>
            </div>
            <div className="px-px pt-2.5">
              <h3 className="text-[11px] leading-[1.4] tablet:text-[12px]">
                <Link href={href} className="transition-colors hover:text-maroon">
                  {product.name}
                </Link>
              </h3>
              <div className="mt-[7px] flex justify-between gap-2 text-[10px] tablet:text-[11px]">
                <span className="font-semibold text-maroon">{formatPrice(product.price)}</span>
                <span>{categoryLabel(product.category)}</span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {needsOptions(product) ? (
                  <ButtonLink href={href} arrow={false} className="min-h-[38px] px-3 text-[9px]">
                    Choose options
                  </ButtonLink>
                ) : (
                  <Button
                    arrow={false}
                    className="min-h-[38px] px-3 text-[9px]"
                    onClick={() => {
                      add(product.id, product.variants[0].id);
                      toast(`${product.name} added to your bag`);
                      open();
                    }}
                  >
                    Add to bag
                  </Button>
                )}
                <button type="button" onClick={() => remove(product.id)} className="text-[10px] text-muted underline">
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Shop all",
  description: "Lawn, embroidered suits, jewellery and menswear from Rangeen Dhaage.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <main id="main">
      <Section className="pt-8 tablet:pt-10">
        <nav aria-label="Breadcrumb" className="text-[10px] tracking-[.14em] text-muted uppercase">
          <Link href="/" className="transition-colors hover:text-maroon">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page" className="text-ink">
            Shop
          </span>
        </nav>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <div className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">The full collection</div>
            <h1 className="mt-2.5 font-serif text-[40px] leading-[1.05] font-medium tracking-[-.04em] tablet:text-[clamp(40px,5vw,64px)]">
              Shop <em className="font-medium text-maroon">everything.</em>
            </h1>
          </div>
          <p className="max-w-[360px] text-[12px] leading-[1.9] text-muted">
            Lawn, embroidered suits, jewellery and menswear, all in one place. Choose a category or sort by price.
          </p>
        </div>

        <div aria-hidden="true" className="mt-8 border-t border-dashed border-maroon/40" />

        {/* Filters live in the URL; until they hydrate, visitors (and search engines) see the full catalogue. */}
        <Suspense
          fallback={
            <div className="mt-10">
              <ProductGrid products={products.slice(0, 24)} />
            </div>
          }
        >
          <ShopBrowser />
        </Suspense>
      </Section>
    </main>
  );
}

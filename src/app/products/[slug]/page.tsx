import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabel } from "@/data/categories";
import { getProduct, primaryPhoto, products, relatedProducts } from "@/data/products";
import { site } from "@/data/site";
import { imageUrl } from "@/lib/images";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ProductView } from "@/components/shop/ProductView";
import { Section } from "@/components/ui/Section";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const photo = primaryPhoto(product);
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: imageUrl(photo.src, 960), alt: photo.alt }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: categoryLabel(product.category),
    image: product.variants.flatMap((v) => v.photos.map((p) => `${site.url}${imageUrl(p.src, 960)}`)),
    offers: {
      "@type": "Offer",
      url: `${site.url}/products/${product.id}`,
      price: product.price,
      priceCurrency: site.currency,
    },
  };

  return (
    <main id="main">
      <Section className="pt-8 tablet:pt-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-[10px] tracking-[.14em] text-muted uppercase tablet:mb-8">
          <Link href="/" className="transition-colors hover:text-maroon">Home</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <Link href="/shop" className="transition-colors hover:text-maroon">Shop</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <Link href={`/shop?category=${product.category}`} className="transition-colors hover:text-maroon">
            {categoryLabel(product.category)}
          </Link>
        </nav>

        <ProductView product={product} />

        {related.length > 0 && (
          <div className="mt-20 border-t border-dashed border-maroon/40 pt-12 tablet:mt-24">
            <h2 className="mb-8 font-serif text-[30px] leading-[1.1] font-medium tracking-[-.03em] tablet:text-[40px]">
              You may also <em className="font-medium text-maroon">like.</em>
            </h2>
            <ProductGrid products={related} />
          </div>
        )}
      </Section>
      <script
        type="application/ld+json"
        // Escape "<" so product copy can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}

import { featuredProducts, primaryPhoto } from "@/data/products";
import { site } from "@/data/site";
import { imageUrl } from "@/lib/images";
import { Campaign } from "@/components/home/Campaign";
import { Collections } from "@/components/home/Collections";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Newsletter } from "@/components/home/Newsletter";
import { Story } from "@/components/home/Story";
import { TrustStrip } from "@/components/home/TrustStrip";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      slogan: "Made to be remembered",
    },
    {
      "@type": "ItemList",
      itemListElement: featuredProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          image: `${site.url}${imageUrl(primaryPhoto(p).src, 960)}`,
          offers: { "@type": "Offer", price: p.price, priceCurrency: site.currency },
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <TrustStrip />
        <Collections />
        <NewArrivals />
        <Story />
        <Campaign />
        <Newsletter />
      </main>
      <script
        type="application/ld+json"
        // Escape "<" so product copy can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

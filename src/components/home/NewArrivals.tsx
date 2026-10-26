import { featuredProducts } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Section, SectionHead } from "@/components/ui/Section";

export function NewArrivals() {
  return (
    <Section id="new" className="tablet:pt-5">
      <SectionHead
        kicker="The pieces we're loving"
        title="New &"
        emphasis="noteworthy."
        linkHref="/shop"
        linkLabel="View all pieces"
      />
      <ProductGrid products={featuredProducts} />
    </Section>
  );
}

import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Section, SectionHead } from "@/components/ui/Section";

export function NewArrivals() {
  return (
    <Section id="new" className="tablet:pt-5">
      <SectionHead
        kicker="The pieces we're loving"
        title="New &"
        emphasis="noteworthy."
        linkHref="#collections"
        linkLabel="View all pieces"
      />
      <div className="grid grid-cols-2 gap-x-3 gap-y-[27px] desktop:grid-cols-4 desktop:gap-[17px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}

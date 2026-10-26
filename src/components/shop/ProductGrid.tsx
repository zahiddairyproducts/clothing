import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: readonly Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-[27px] desktop:grid-cols-4 desktop:gap-[17px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/shop`, changeFrequency: "weekly", priority: 0.9 },
    ...["about", "contact", "delivery-returns", "size-guide", "faqs", "privacy", "terms"].map((path) => ({
      url: `${site.url}/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

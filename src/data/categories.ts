export const categories = [
  { slug: "lawn", label: "Lawn" },
  { slug: "embroidered", label: "Embroidered" },
  { slug: "jewellery", label: "Jewellery" },
  { slug: "menswear", label: "Menswear" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function isCategory(value: string | null | undefined): value is CategorySlug {
  return categories.some((c) => c.slug === value);
}

export function categoryLabel(slug: CategorySlug): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

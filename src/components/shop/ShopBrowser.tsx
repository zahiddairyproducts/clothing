"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { categories, categoryLabel, isCategory, type CategorySlug } from "@/data/categories";
import { products } from "@/data/products";
import { cx } from "@/lib/cx";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "./ProductGrid";

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

type Sort = (typeof sorts)[number]["value"];
const isSort = (v: string | null): v is Sort => sorts.some((s) => s.value === v);

function Pill({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cx(
        "shrink-0 border px-4 py-2.5 text-[10px] tracking-[.14em] whitespace-nowrap uppercase transition-colors duration-200",
        active
          ? "border-maroon bg-maroon text-paper"
          : "border-maroon/30 text-ink hover:border-maroon hover:text-maroon",
      )}
    >
      {children} <span className={active ? "opacity-80" : "text-muted"}>({count})</span>
    </button>
  );
}

/**
 * Filter / sort / search state lives in the URL (?category=…&sort=…&q=…) so every view
 * of the shop can be shared, bookmarked and reached from the home page and footer.
 */
export function ShopBrowser() {
  const router = useRouter();
  const params = useSearchParams();

  const rawCategory = params.get("category");
  const category: CategorySlug | "all" = isCategory(rawCategory) ? rawCategory : "all";
  const rawSort = params.get("sort");
  const sort: Sort = isSort(rawSort) ? rawSort : "featured";
  const query = (params.get("q") ?? "").trim();
  const term = query.toLowerCase();

  // Products matching the search text (before the category filter) so pill counts stay meaningful.
  const searched = useMemo(
    () =>
      term
        ? products.filter((p) => `${p.name} ${categoryLabel(p.category)}`.toLowerCase().includes(term))
        : products,
    [term],
  );

  const items = useMemo(() => {
    const filtered = category === "all" ? searched : searched.filter((p) => p.category === category);
    if (sort === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [searched, category, sort]);

  function update(next: { category?: string; sort?: string; q?: string }) {
    const sp = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(next)) {
      const isDefault = !value || value === "all" || (key === "sort" && value === "featured");
      if (isDefault) sp.delete(key);
      else sp.set(key, value);
    }
    const qs = sp.toString();
    router.replace(qs ? `/shop?${qs}` : "/shop", { scroll: false });
  }

  return (
    <>
      <div className="mt-8 flex flex-col gap-5 tablet:flex-row tablet:items-center tablet:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 tablet:mx-0 tablet:flex-wrap tablet:overflow-visible tablet:px-0 tablet:pb-0"
        >
          <Pill active={category === "all"} count={searched.length} onClick={() => update({ category: "all" })}>
            All
          </Pill>
          {categories.map((c) => (
            <Pill
              key={c.slug}
              active={category === c.slug}
              count={searched.filter((p) => p.category === c.slug).length}
              onClick={() => update({ category: c.slug })}
            >
              {c.label}
            </Pill>
          ))}
        </div>

        <label className="flex shrink-0 items-center gap-3 text-[10px] tracking-[.14em] text-muted uppercase">
          Sort
          <select
            value={sort}
            onChange={(e) => update({ sort: e.target.value })}
            className="border-b border-maroon bg-transparent py-1.5 pr-2 text-[12px] tracking-normal text-ink normal-case outline-none"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p aria-live="polite" className="mt-6 mb-6 text-[11px] text-muted tablet:mb-8">
        {items.length} {items.length === 1 ? "piece" : "pieces"}
        {query && (
          <>
            {" "}
            for “{query}”{" "}
            <button
              type="button"
              onClick={() => update({ q: "" })}
              className="ml-1 text-maroon underline underline-offset-4"
            >
              Clear search
            </button>
          </>
        )}
      </p>

      {items.length > 0 ? (
        <ProductGrid products={items} />
      ) : (
        <div className="border border-dashed border-maroon/40 px-6 py-16 text-center">
          <p className="font-serif text-[28px] text-maroon italic">Nothing here just yet.</p>
          <p className="mx-auto mt-3 mb-7 max-w-[340px] text-[12px] leading-[1.9] text-muted">
            No pieces match those filters. Try another category or clear the search.
          </p>
          <Button onClick={() => update({ category: "all", q: "" })}>Show everything</Button>
        </div>
      )}
    </>
  );
}

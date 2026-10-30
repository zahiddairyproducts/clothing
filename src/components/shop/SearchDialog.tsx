"use client";

import { Photo } from "@/components/ui/Photo";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { categoryLabel } from "@/data/categories";
import { primaryPhoto, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";
import { useEffect } from "react";

type Props = { open: boolean; onClose: () => void };

export function SearchDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");

  // Keep the native <dialog> in sync with the `open` prop (gives us focus trapping + Esc for free).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const term = query.trim().toLowerCase();
  const results = useMemo(
    () => (term ? products.filter((p) =>
            `${p.name} ${categoryLabel(p.category)} ${p.variants.map((v) => v.label).join(" ")}`.toLowerCase().includes(term),
          ) : []),
    [term],
  );

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-label="Search the collection"
      onClose={() => {
        setQuery("");
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto mt-[8vh] w-[min(560px,calc(100%-24px))] border border-line bg-paper p-0 text-ink backdrop:bg-ink/24"
    >
      <div className="p-5">
        <div className="flex items-center gap-3 border-b border-field focus-within:border-maroon">
          <SearchIcon className="shrink-0 text-[19px] text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lawn, earrings, kurta…"
            aria-label="Search the collection"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-[13px] text-ink outline-none placeholder:text-muted/70 [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="button" onClick={close} aria-label="Close search" className="p-1.5 text-[19px]">
            <CloseIcon />
          </button>
        </div>

        <div aria-live="polite" className="mt-3 min-h-[60px]">
          {!term && <p className="py-3 text-[12px] text-muted">Try lawn, embroidered, jewellery or menswear.</p>}
          {term && results.length === 0 && (
            <p className="py-3 text-[12px] text-muted">
              No pieces match “{query.trim()}”. Try lawn, embroidered, jewellery or menswear.
            </p>
          )}
          {results.length > 0 && (
            <>
              <ul>
                {results.slice(0, 6).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.id}`}
                      onClick={close}
                      className="flex items-center gap-3.5 border-b border-line py-3 transition-colors hover:bg-paper-2"
                    >
                      <span className="relative h-[60px] w-12 shrink-0 overflow-hidden bg-paper-2">
                        <Photo src={primaryPhoto(p).src} alt="" fill sizes="48px" className="object-cover object-top" />
                      </span>
                      <span className="min-w-0 flex-1 text-[12px]">{p.name}</span>
                      <span className="text-[11px] font-semibold text-maroon">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/shop?q=${encodeURIComponent(query.trim())}`}
                onClick={close}
                className="mt-4 inline-block border-b border-maroon pb-[5px] text-[10px] tracking-[.13em] uppercase"
              >
                See all {results.length} {results.length === 1 ? "result" : "results"}
              </Link>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

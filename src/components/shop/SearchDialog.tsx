"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { products } from "@/data/products";
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
    () => (term ? products.filter((p) => `${p.name} ${p.tag}`.toLowerCase().includes(term)) : []),
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
        <div className="flex items-center gap-3 border-b border-field focus-within:border-accent-deep">
          <SearchIcon className="shrink-0 text-[19px] text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lawn, embroidered, kaftan"
            aria-label="Search the collection"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-[13px] text-ink outline-none placeholder:text-muted/70 [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="button" onClick={close} aria-label="Close search" className="p-1.5 text-[19px]">
            <CloseIcon />
          </button>
        </div>

        <div aria-live="polite" className="mt-3 min-h-[60px]">
          {!term && <p className="py-3 text-[12px] text-muted">Try lawn, embroidered or kaftan.</p>}
          {term && results.length === 0 && (
            <p className="py-3 text-[12px] text-muted">
              No pieces match “{query.trim()}”. Try lawn, embroidered or kaftan.
            </p>
          )}
          {results.length > 0 && (
            <ul>
              {results.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#product-${p.id}`}
                    onClick={close}
                    className="flex items-center gap-3.5 border-b border-line py-3 transition-colors hover:bg-paper-2"
                  >
                    <span className="relative h-[60px] w-12 shrink-0 overflow-hidden bg-paper-2">
                      <Image src={p.image} alt="" fill sizes="48px" className="object-cover" />
                    </span>
                    <span className="min-w-0 flex-1 text-[12px]">{p.name}</span>
                    <span className="text-[11px] font-semibold text-accent">{formatPrice(p.price)}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </dialog>
  );
}

"use client";

import { useRef, useState } from "react";
import type { Photo as PhotoData } from "@/data/products";
import { Photo } from "@/components/ui/Photo";
import { cx } from "@/lib/cx";

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "prev" ? "m14.5 6-6 6 6 6" : "m9.5 6 6 6-6 6"} />
    </svg>
  );
}

/** Main photo with arrows, swipe, counter and a row of thumbnails. Remount (key) to reset when the colour changes. */
export function ProductGallery({ photos, name }: { photos: readonly PhotoData[]; name: string }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const count = photos.length;
  const current = photos[Math.min(index, count - 1)];
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${name} photos`}
        className="relative aspect-[3/4] touch-pan-y overflow-hidden border border-maroon/25 bg-paper-2 select-none"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null || count < 2) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => (startX.current = null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <Photo
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          preload={index === 0}
          quality={85}
          sizes="(min-width: 851px) 50vw, 100vw"
          style={{ objectPosition: current.focus ?? "center top" }}
          className="object-cover"
          draggable={false}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-2.5 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-[20px] text-maroon transition-colors hover:bg-paper"
            >
              <Arrow dir="prev" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-2.5 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-[20px] text-maroon transition-colors hover:bg-paper"
            >
              <Arrow dir="next" />
            </button>
            <span className="pointer-events-none absolute right-3 bottom-3 bg-paper/90 px-2 py-1 text-[10px] tracking-[.12em] text-ink">
              {Math.min(index, count - 1) + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Choose photo">
          {photos.map((p, i) => (
            <li key={p.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                className={cx(
                  "relative block h-[84px] w-[63px] overflow-hidden border transition-colors tablet:h-[100px] tablet:w-[75px]",
                  i === index ? "border-maroon" : "border-line hover:border-maroon/50",
                )}
              >
                <Photo
                  src={p.src}
                  alt=""
                  fill
                  sizes="80px"
                  style={{ objectPosition: p.focus ?? "center top" }}
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

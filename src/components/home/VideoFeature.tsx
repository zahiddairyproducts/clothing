"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Stitch } from "@/components/ui/Stitch";
import { ArrowUpRightIcon } from "@/components/ui/icons";

const VIDEO_ID = "sFESzViU1KQ";

/**
 * Homepage video: a poster with a play button that swaps for the YouTube player on tap,
 * so no YouTube scripts load until the visitor actually wants the video.
 */
export function VideoFeature() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section id="watch" className="tablet:pt-3">
      <div className="relative grid items-center gap-10 border border-maroon/30 bg-[linear-gradient(135deg,var(--color-paper-2),var(--color-paper))] px-7 py-[50px] desktop:grid-cols-2 desktop:gap-[clamp(32px,6vw,90px)] desktop:px-[clamp(32px,6vw,90px)]">
        <Stitch className="inset-2.5 tablet:inset-3.5" />

        <div className="order-2 flex flex-col items-start desktop:order-1">
          <div className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">Party wear collection</div>
          <h2 className="mt-[15px] mb-[23px] font-serif text-[41px] leading-[1.08] font-medium tracking-[-.04em] tablet:text-[clamp(37px,4.6vw,60px)]">
            See it
            <br />
            <em className="font-medium text-maroon">in motion.</em>
          </h2>
          <p className="mb-7 max-w-[380px] text-[13px] leading-[1.95] text-muted">
            Heavy embroidery, sheer dupattas and the way a suit actually moves. Watch the party wear collection
            before you choose.
          </p>
          <Link
            href="/shop?category=embroidered"
            className="inline-flex min-h-[47px] items-center justify-center gap-[18px] border border-maroon bg-maroon px-[23px] text-[10px] tracking-[.15em] text-white uppercase transition-colors duration-200 hover:border-maroon-deep hover:bg-maroon-deep"
          >
            Shop embroidered
            <ArrowUpRightIcon className="text-[1.3em]" />
          </Link>
        </div>

        <div className="order-1 mx-auto w-full max-w-[340px] desktop:order-2 desktop:ml-auto">
          <div className="relative aspect-[9/16] overflow-hidden bg-ink">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
                title="Party wear collection video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the party wear collection video"
                className="group absolute inset-0 block h-full w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/video/party-wear-poster.webp"
                  alt=""
                  width={540}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/90 bg-paper/20 backdrop-blur-sm transition-colors duration-200 group-hover:bg-maroon group-focus-visible:bg-maroon"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-paper">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
            <Stitch tone="ivory" className="inset-2" />
          </div>
        </div>
      </div>
    </Section>
  );
}

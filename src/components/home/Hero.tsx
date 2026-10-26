import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Stitch } from "@/components/ui/Stitch";

export function Hero() {
  return (
    <section
      aria-label="Seasonal campaign"
      className="mx-auto max-w-[1440px] px-2 pt-2 tablet:px-3 tablet:pt-3 desktop:px-[clamp(14px,3vw,42px)] desktop:pt-[22px]"
    >
      <div className="relative h-[640px] overflow-hidden border border-maroon/30 bg-paper-2 tablet:h-[660px] desktop:h-[clamp(480px,56vw,680px)] desktop:min-h-[min(660px,67vw)]">
        {/* Desktop: photo fills the right 72% and fades into the champagne frame, so the headline sits on open space */}
        <div className="absolute inset-0 desktop:left-auto desktop:w-[72%] desktop:[mask-image:linear-gradient(to_right,transparent,#000_32%)]">
          <Image
            src="/images/hero"
            alt="Model in a blue floral co-ord set in a warm, plant-filled room"
            fill
            preload
            quality={85}
            sizes="(min-width: 851px) 72vw, 100vw"
            className="object-cover object-[52%_top] desktop:object-[center_top]"
          />
        </div>
        <Stitch className="inset-2.5 tablet:inset-3.5" />
        {/* Left-to-right scrim keeps the headline legible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,254,250,.96),rgba(255,254,250,.80)_46%,rgba(255,254,250,0)_78%)] desktop:bg-[linear-gradient(90deg,rgba(255,254,250,.78),rgba(255,254,250,.45)_54%,rgba(255,254,250,.08)_100%)]"
        />
        {/* Soft sage tint */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(120deg,rgba(255,254,250,.25),rgba(217,223,208,.18))]"
        />

        <div className="absolute right-5 bottom-8 left-[22px] z-[2] text-ink tablet:right-auto tablet:bottom-10 tablet:left-7 tablet:max-w-[400px] desktop:top-1/2 desktop:bottom-auto desktop:left-[clamp(26px,7.5vw,110px)] desktop:max-w-[520px] desktop:-translate-y-[46%]">
          <div className="text-[10px] font-semibold tracking-[.22em] text-maroon uppercase">The new season · 01 / 03</div>
          <h1 className="my-[17px] font-serif text-[54px] leading-[.99] font-medium tracking-[-.055em] tablet:mt-[23px] tablet:mb-[22px] tablet:text-[clamp(48px,9vw,75px)] desktop:text-[clamp(49px,7vw,94px)]">
            Made to
            <br />
            be <em className="font-medium text-maroon">remembered.</em>
          </h1>
          <p className="mb-[30px] max-w-[270px] text-[12px] leading-[1.9] text-ink-soft tablet:max-w-[315px] tablet:text-[13px]">
            Colour with a point of view. Thoughtful prints, beautiful details, and pieces that feel like you.
          </p>
          <ButtonLink href="#new" variant="light">
            Discover the collection
          </ButtonLink>
        </div>

        <div className="absolute top-[15px] right-[15px] z-[2] text-[10px] tracking-[.16em] text-ink [text-shadow:0_0_10px_rgba(255,254,250,.95)] tablet:top-5 tablet:right-[34px] desktop:top-auto desktop:bottom-7">
          LAHORE · LONDON · EVERYWHERE
        </div>
      </div>
    </section>
  );
}

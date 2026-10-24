import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      aria-label="Seasonal campaign"
      className="mx-auto max-w-[1440px] px-2 pt-2 tablet:px-3 tablet:pt-3 desktop:px-[clamp(14px,3vw,42px)] desktop:pt-[22px]"
    >
      <div className="relative h-[560px] overflow-hidden border border-[rgba(186,82,106,.25)] bg-[#13070a] tablet:h-[610px] desktop:h-[clamp(480px,56vw,680px)] desktop:min-h-[min(660px,67vw)]">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
          alt="Fashion campaign in warm, earthy tones"
          fill
          preload
          quality={85}
          sizes="100vw"
          className="object-cover object-[59%_center] tablet:object-[56%_center] desktop:object-[center_38%]"
        />
        {/* Left-to-right scrim keeps the headline legible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,3,6,.82),rgba(25,5,11,.35))] desktop:bg-[linear-gradient(90deg,rgba(12,3,6,.82),rgba(25,5,11,.55)_47%,rgba(12,3,6,.18)_80%)]"
        />
        {/* Wine glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_4%_15%,rgba(144,48,70,.25),transparent_36%),linear-gradient(145deg,transparent_55%,rgba(135,40,63,.15))] mix-blend-screen"
        />

        <div className="absolute top-[54%] right-5 left-[22px] z-[2] -translate-y-1/2 text-[#fffaf4] tablet:top-1/2 tablet:right-auto tablet:left-7 tablet:max-w-[400px] tablet:-translate-y-[46%] desktop:left-[clamp(26px,7.5vw,110px)] desktop:max-w-[520px]">
          <div className="text-[10px] font-semibold tracking-[.22em] uppercase">The new season · 01 / 03</div>
          <h1 className="my-[17px] font-serif text-[54px] leading-[.99] font-medium tracking-[-.055em] tablet:mt-[23px] tablet:mb-[22px] tablet:text-[clamp(48px,9vw,75px)] desktop:text-[clamp(49px,7vw,94px)]">
            Made to
            <br />
            be <em className="font-medium">remembered.</em>
          </h1>
          <p className="mb-[30px] max-w-[270px] text-[12px] leading-[1.9] text-[#f8eee5] tablet:max-w-[315px] tablet:text-[13px]">
            Colour with a point of view. Thoughtful prints, beautiful details, and pieces that feel like you.
          </p>
          <ButtonLink href="#new" variant="light">
            Discover the collection
          </ButtonLink>
        </div>

        <div className="absolute right-[15px] bottom-[15px] z-[2] text-[10px] tracking-[.16em] text-white tablet:right-[34px] tablet:bottom-7">
          LAHORE · LONDON · EVERYWHERE
        </div>
      </div>
    </section>
  );
}

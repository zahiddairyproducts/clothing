import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import { cx } from "@/lib/cx";
import { Section, SectionHead } from "@/components/ui/Section";

export function Collections() {
  return (
    <Section id="collections">
      <SectionHead
        kicker="Find your feeling"
        title="Shop by"
        emphasis="collection."
        linkHref="#new"
        linkLabel="Explore everything"
      />
      <div className="grid grid-cols-2 gap-[9px] tablet:gap-4 desktop:grid-cols-[1.1fr_1fr_1fr]">
        {collections.map((c, i) => (
          <Link
            key={c.slug}
            href={c.href}
            className={cx(
              "group relative block overflow-hidden border border-[rgba(186,82,106,.18)] bg-paper-2",
              "h-[280px] tablet:h-[370px] desktop:h-[clamp(300px,39vw,510px)] desktop:min-h-[410px]",
              i === 0 && "col-span-2 h-[390px] tablet:h-[470px] desktop:col-span-1 desktop:h-[clamp(300px,39vw,510px)]",
            )}
          >
            <Image
              src={c.image}
              alt={c.alt}
              fill
              quality={85}
              sizes={i === 0 ? "(min-width: 851px) 36vw, 100vw" : "(min-width: 851px) 32vw, 50vw"}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.65,.3,1)] group-hover:scale-[1.045]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 top-[35%] bottom-0 bg-gradient-to-b from-transparent to-[rgba(24,17,15,.62)]" />
            <div className="absolute bottom-4 left-3.5 z-[1] text-white tablet:bottom-6 tablet:left-[25px]">
              <small className="text-[8px] tracking-[.18em] uppercase tablet:text-[9px]">{c.tagline}</small>
              <h3 className="mt-[7px] mb-3 font-serif text-[24px] leading-normal font-medium tablet:text-[clamp(24px,3vw,35px)]">
                {c.title}
              </h3>
              <span className="border-b border-white/70 pb-[5px] text-[8px] tracking-[.12em] uppercase tablet:text-[10px]">
                {c.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

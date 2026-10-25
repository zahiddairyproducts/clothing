import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Campaign() {
  return (
    <Section className="tablet:pt-2">
      <div className="relative h-[470px] overflow-hidden bg-paper-2 tablet:h-[clamp(350px,43vw,560px)]">
        <Image
          src="/images/campaign"
          alt="Sapphire and gold jewellery set styled on champagne silk"
          fill
          quality={85}
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-cover object-[72%_center] desktop:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,254,250,.78),rgba(255,254,250,.30)_80%)]"
        />
        <div className="absolute top-1/2 right-[25px] left-7 z-[1] max-w-[470px] -translate-y-1/2 text-ink desktop:right-auto desktop:left-[clamp(26px,8vw,110px)]">
          <div className="text-[10px] font-semibold tracking-[.22em] uppercase">Your wardrobe, reimagined</div>
          <h2 className="my-[17px] font-serif text-[47px] leading-[1.03] font-medium tracking-[-.04em] tablet:text-[clamp(39px,5.4vw,70px)]">
            Everyday,
            <br />
            with a little <em className="font-medium text-accent">extra.</em>
          </h2>
          <p className="mb-[25px] max-w-[320px] text-[12px] leading-[1.9] text-ink-soft">
            For slow mornings, long lunches, celebrations, and all the beautiful in-between.
          </p>
          <ButtonLink href="#new" variant="light">
            Find your next favourite
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

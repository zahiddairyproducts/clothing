import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Stitch } from "@/components/ui/Stitch";

export function Story() {
  return (
    <Section id="story" className="tablet:pt-3">
      <div className="relative grid border border-maroon/30 bg-[linear-gradient(135deg,var(--color-paper-2),var(--color-paper))] desktop:min-h-[540px] desktop:grid-cols-2">
        <Stitch className="inset-2.5 tablet:inset-3.5" />
        <div className="relative h-[360px] overflow-hidden tablet:h-[450px] desktop:h-auto desktop:min-h-[450px]">
          <Photo
            src="/images/story"
            alt="Model in a floral sleeveless kameez in a garden with colourful parrots"
            fill
            quality={85}
            sizes="(min-width: 851px) 50vw, 100vw"
            className="object-cover object-[center_8%]"
          />
        </div>
        <div className="flex flex-col items-start justify-center px-7 pt-[45px] pb-[55px] desktop:p-[clamp(32px,6vw,90px)]">
          <div aria-hidden="true" className="font-serif text-[42px] text-maroon italic">“</div>
          <div className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">A little more meaning</div>
          <h2 className="mt-[15px] mb-[23px] font-serif text-[41px] leading-[1.08] font-medium tracking-[-.04em] tablet:text-[clamp(37px,4.6vw,60px)]">
            Wear a little
            <br />
            <em className="font-medium text-maroon">more you.</em>
          </h2>
          <p className="mb-7 max-w-[380px] text-[13px] leading-[1.95] text-muted">
            We believe getting dressed should feel like coming home to yourself. A favourite colour. A print that makes
            you smile. The small details that turn an outfit into your outfit.
          </p>
          <ButtonLink href="#collections">Find your colour</ButtonLink>
        </div>
      </div>
    </Section>
  );
}

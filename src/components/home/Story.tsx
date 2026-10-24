import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Story() {
  return (
    <Section id="story" className="tablet:pt-3">
      <div className="grid border border-[rgba(186,82,106,.22)] bg-[linear-gradient(135deg,#1d0b10,#100709)] desktop:min-h-[540px] desktop:grid-cols-2">
        <div className="relative h-[360px] overflow-hidden tablet:h-[450px] desktop:h-auto desktop:min-h-[450px]">
          <Image
            src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0"
            alt="Artful fashion portrait with natural textures"
            fill
            quality={85}
            sizes="(min-width: 851px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center px-7 pt-[45px] pb-[55px] desktop:p-[clamp(32px,6vw,90px)]">
          <div aria-hidden="true" className="font-serif text-[42px] text-wine italic">“</div>
          <div className="text-[10px] font-semibold tracking-[.2em] text-wine uppercase">A little more meaning</div>
          <h2 className="mt-[15px] mb-[23px] font-serif text-[41px] leading-[1.08] font-medium tracking-[-.04em] tablet:text-[clamp(37px,4.6vw,60px)]">
            Wear a little
            <br />
            <em className="font-medium text-wine">more you.</em>
          </h2>
          <p className="mb-7 max-w-[380px] text-[13px] leading-[1.95] text-[#c8b4b8]">
            We believe getting dressed should feel like coming home to yourself. A favourite colour. A print that makes
            you smile. The small details that turn an outfit into your outfit.
          </p>
          <ButtonLink href="#collections">Find your colour</ButtonLink>
        </div>
      </div>
    </Section>
  );
}

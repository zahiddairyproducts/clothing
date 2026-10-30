import type { Metadata } from "next";
import { Photo } from "@/components/ui/Photo";
import { Block, PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Our story",
  description: "Rangeen Dhaage is about colour, character and clothes that feel like you.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      crumb="Our story"
      kicker="A little more meaning"
      title="Wear a little"
      emphasis="more you."
      intro="Rangeen Dhaage means “coloured thread”. It is how we think about getting dressed."
    >
      <div className="relative mb-10 aspect-[4/3] overflow-hidden border border-maroon/30">
        <Photo
          src="/images/story"
          alt="Model in a floral sleeveless kameez in a garden with colourful parrots"
          fill
          sizes="(min-width: 851px) 760px, 100vw"
          className="object-cover object-[center_15%]"
        />
      </div>
      <Block title="Where the name comes from">
        <p>
          Every piece we make or choose starts with a thread: a favourite colour, a print that makes you smile, a small
          detail that turns an outfit into your outfit.
        </p>
        <p>We believe getting dressed should feel like coming home to yourself, not like following a rulebook.</p>
      </Block>
      <Block title="What we sell">
        <p>
          Lawn for easy everyday wear, embroidered suits for the moments that matter, jewellery to finish a look, and
          menswear for the people who share your table at Eid.
        </p>
        <p>Every item you see in the shop is photographed as it is, so what you see is what you get.</p>
      </Block>
      <Block title="Our promise">
        <ul>
          <li>Clear photographs and honest descriptions.</li>
          <li>Simple delivery and straightforward returns.</li>
          <li>A real person on the other end when you write to us.</li>
        </ul>
      </Block>
      <PageCta>Find your colour</PageCta>
    </PageShell>
  );
}

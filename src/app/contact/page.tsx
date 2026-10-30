import type { Metadata } from "next";
import { site } from "@/data/site";
import { Block, PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Questions about an order, sizing or a piece you love? Get in touch with Rangeen Dhaage.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      crumb="Contact"
      kicker="Need a hand?"
      title="Get in"
      emphasis="touch."
      intro="We read every message and reply as soon as we can."
    >
      <Block title="Email us">
        <p>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>
        <p>Open {site.contactHours}. We aim to reply within one working day.</p>
      </Block>
      <Block title="Writing about an order?">
        <p>To help us find it quickly, please include:</p>
        <ul>
          <li>Your order number and the name on the order</li>
          <li>The item you are asking about</li>
          <li>A photo, if something arrived damaged or not as expected</li>
        </ul>
      </Block>
      <Block title="Quick answers">
        <p>
          Most questions are covered in our <a href="/faqs">FAQs</a>, <a href="/delivery-returns">delivery and returns</a>{" "}
          page and <a href="/size-guide">size guide</a>.
        </p>
      </Block>
      <PageCta>Back to the shop</PageCta>
    </PageShell>
  );
}

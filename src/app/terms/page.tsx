import type { Metadata } from "next";
import { site } from "@/data/site";
import { Block, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: "The terms that apply when you shop with Rangeen Dhaage.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      crumb="Terms"
      kicker="The small print"
      title="Terms &"
      emphasis="conditions."
      intro="Draft template. Have it reviewed before launch."
    >
      <Block title="Using this site">
        <p>
          By placing an order you agree to these terms. {site.name} may update them from time to time; the version on
          this page when you order applies to that order.
        </p>
      </Block>
      <Block title="Products and prices">
        <p>
          Prices are in pounds sterling (GBP) and include VAT where applicable. We take care to show colours and details
          accurately, but screens vary. We may correct pricing errors and will tell you before dispatching if that
          affects your order.
        </p>
      </Block>
      <Block title="Orders and payment">
        <p>
          Orders are placed by sending your order details to us on WhatsApp. An order is accepted when we confirm it to
          you there. We will agree how to pay with you before dispatch. We may cancel an order if an item is
          unavailable and will refund you in full for anything already paid.
        </p>
      </Block>
      <Block title="Delivery and returns">
        <p>
          Delivery and returns are covered on our <a href="/delivery-returns">delivery and returns</a> page, which forms
          part of these terms.
        </p>
      </Block>
      <Block title="Your statutory rights">
        <p>Nothing in these terms affects your legal rights as a consumer in the United Kingdom.</p>
      </Block>
      <Block title="Governing law">
        <p>These terms are governed by the laws of England and Wales.</p>
      </Block>
      <Block title="Contact">
        <p>
          Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </Block>
    </PageShell>
  );
}

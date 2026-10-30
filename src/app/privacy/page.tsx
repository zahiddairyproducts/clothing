import type { Metadata } from "next";
import { site } from "@/data/site";
import { Block, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Rangeen Dhaage collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      crumb="Privacy"
      kicker="The small print"
      title="Privacy"
      emphasis="policy."
      intro="Draft template. Have it reviewed against how your store actually works before launch."
    >
      <Block title="Who we are">
        <p>
          {site.name} is the data controller for personal information collected through this website. Contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </Block>
      <Block title="What we collect">
        <ul>
          <li>Your email address, if you join our mailing list.</li>
          <li>Your name, delivery address, email and phone number when you place an order.</li>
          <li>Messages you send us on WhatsApp, including your order details. WhatsApp processes these under its own privacy policy.</li>
          <li>Basic technical data such as browser type, used to keep the site working.</li>
        </ul>
      </Block>
      <Block title="How we use it">
        <ul>
          <li>To process and deliver your orders and handle returns.</li>
          <li>To send marketing emails, only if you have signed up. You can unsubscribe at any time.</li>
          <li>To meet legal and accounting obligations.</li>
        </ul>
      </Block>
      <Block title="Sharing">
        <p>
          We share data only with services needed to run the store, such as delivery, messaging and email providers. We do
          not sell your data.
        </p>
      </Block>
      <Block title="How long we keep it">
        <p>
          Order records are kept for as long as the law requires. Mailing list details are kept until you unsubscribe.
        </p>
      </Block>
      <Block title="Your rights">
        <p>
          Under UK data protection law you can ask to see, correct or delete your data, object to marketing, and
          complain to the Information Commissioner’s Office (ico.org.uk). Email us to make a request.
        </p>
      </Block>
    </PageShell>
  );
}

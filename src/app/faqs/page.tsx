import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers about orders, delivery, returns, sizing and care at Rangeen Dhaage.",
  alternates: { canonical: "/faqs" },
};

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Your order is sent by Royal Mail and usually arrives within 4 to 5 days.",
  },
  {
    q: "Is delivery free?",
    a: "Yes. Delivery is included in the price of every item, so there is nothing extra to pay for it.",
  },
  {
    q: "Can I return something?",
    a: `Yes. Unworn items with tags can be returned within ${site.returnWindowDays} days of delivery. See our delivery and returns page for the steps.`,
  },
  {
    q: "How do I place an order?",
    a: "Add pieces to your bag, go to checkout and enter your delivery details. Your order opens in WhatsApp ready to send; we then confirm availability and arrange payment with you there.",
  },
  {
    q: "How do I find my size?",
    a: "Every product page lists the bust, hips and shirt length in inches for the sizes available. Compare them with a suit you already own, or see our size guide. If you are unsure, message us and we will help.",
  },
  {
    q: "Are the colours true to the photographs?",
    a: "We photograph every piece as it is. Screens vary slightly, so a shade can look a touch different on your device.",
  },
  {
    q: "How should I care for my clothes?",
    a: "Follow the care label in each piece. As a general rule, wash embroidered and printed suits gently or dry clean, and store jewellery in its box away from moisture.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Email us as soon as possible with your order number. If it has not been dispatched, we can usually change or cancel it.",
  },
  {
    q: "How can I contact you?",
    a: `Email ${site.contactEmail}. We are available ${site.contactHours}.`,
  },
];

export default function FaqsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <PageShell
      crumb="FAQs"
      kicker="Need a hand?"
      title="Questions,"
      emphasis="answered."
      intro="Can’t find what you need? Email us and we’ll help."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-t border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-[18px] font-medium tracking-[-.02em] tablet:text-[20px] [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-maroon transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[620px] text-[13px] leading-[1.95] text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <PageCta href="/contact">Contact us</PageCta>
    </PageShell>
  );
}

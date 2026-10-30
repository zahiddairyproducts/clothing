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
    a: "Orders are dispatched within 2 to 3 working days. You will get an email as soon as yours is on its way.",
  },
  {
    q: "Is delivery free?",
    a: `Yes, on UK orders over £${site.freeDeliveryThreshold}. Below that, the delivery fee is shown at checkout before you pay.`,
  },
  {
    q: "Can I return something?",
    a: `Yes. Unworn items with tags can be returned within ${site.returnWindowDays} days of delivery. See our delivery and returns page for the steps.`,
  },
  {
    q: "How do I find my size?",
    a: "Use the size guide for body measurements. If you are between sizes, we suggest sizing up, or message us and we will help.",
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

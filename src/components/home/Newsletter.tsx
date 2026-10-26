import { NewsletterForm } from "@/components/shop/NewsletterForm";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="scroll-mt-4 border-y border-dashed border-maroon/40 bg-[linear-gradient(135deg,var(--color-paper-2),var(--color-paper))] px-5 py-[72px] text-center"
    >
      <div className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">Letters in colour</div>
      <h2 className="my-2.5 font-serif text-[clamp(32px,4vw,45px)] leading-normal font-medium">
        A little something for your inbox.
      </h2>
      <p className="mx-auto mt-3 mb-[25px] max-w-[370px] text-[12px] text-muted">
        Be first to discover new collections, thoughtful edits, and the occasional treat.
      </p>
      <NewsletterForm />
    </section>
  );
}

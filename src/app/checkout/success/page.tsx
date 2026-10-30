import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { ClearBagOnMount } from "@/components/shop/ClearBagOnMount";
import { OrderSent } from "@/components/shop/OrderSent";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false },
};

export default async function CheckoutSuccessPage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <main id="main" className="mx-auto grid min-h-[60vh] max-w-[1440px] place-items-center px-5 py-24 text-center">
      <ClearBagOnMount />
      <div>
        <p className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">Thank you</p>
        <h1 className="my-3 font-serif text-[clamp(36px,6vw,64px)] leading-[1.08] font-medium tracking-[-.04em]">
          Almost done, <em className="text-maroon">send it on WhatsApp.</em>
        </h1>
        <p className="mx-auto mb-4 max-w-[440px] text-[13px] leading-[1.9] text-muted">
          Your order is ready in WhatsApp. Press send there and we will confirm availability and arrange payment and
          delivery with you.
        </p>
        <OrderSent ref={typeof ref === "string" ? ref.slice(0, 12) : undefined} />
        <ButtonLink href="/shop">Keep browsing</ButtonLink>
      </div>
    </main>
  );
}

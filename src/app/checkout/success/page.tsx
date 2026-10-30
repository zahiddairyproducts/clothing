import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { ClearBagOnMount } from "@/components/shop/ClearBagOnMount";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false },
};

export default function CheckoutSuccessPage() {
  return (
    <main id="main" className="mx-auto grid min-h-[60vh] max-w-[1440px] place-items-center px-5 py-24 text-center">
      <ClearBagOnMount />
      <div>
        <p className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">Thank you</p>
        <h1 className="my-3 font-serif text-[clamp(36px,6vw,64px)] leading-[1.08] font-medium tracking-[-.04em]">
          Your order is <em className="text-maroon">on its way to us.</em>
        </h1>
        <p className="mx-auto mb-7 max-w-[420px] text-[13px] leading-[1.9] text-muted">
          A receipt is on its way to your inbox. We will email you again when your parcel is dispatched. Questions?
          Write to {site.contactEmail}.
        </p>
        <ButtonLink href="/shop">Keep browsing</ButtonLink>
      </div>
    </main>
  );
}

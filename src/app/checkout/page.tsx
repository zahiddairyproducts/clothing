import type { Metadata } from "next";
import { CheckoutForm } from "@/components/shop/CheckoutForm";
import { PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false },
  alternates: { canonical: "/checkout" },
};

export default function CheckoutPage() {
  return (
    <PageShell crumb="Checkout" kicker="Nearly there" title="Secure" emphasis="checkout." wide>
      <CheckoutForm />
    </PageShell>
  );
}

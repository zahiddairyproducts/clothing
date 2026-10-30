import type { Metadata } from "next";
import { CartView } from "@/components/shop/CartView";
import { PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Your bag",
  robots: { index: false },
  alternates: { canonical: "/cart" },
};

export default function CartPage() {
  return (
    <PageShell crumb="Bag" kicker="Almost yours" title="Your" emphasis="bag." wide>
      <CartView />
    </PageShell>
  );
}

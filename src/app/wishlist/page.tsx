import type { Metadata } from "next";
import { PageShell } from "@/components/pages/PageShell";
import { WishlistView } from "@/components/shop/WishlistView";

export const metadata: Metadata = {
  title: "Wish list",
  description: "The pieces you have saved at Rangeen Dhaage.",
  robots: { index: false },
  alternates: { canonical: "/wishlist" },
};

export default function WishlistPage() {
  return (
    <PageShell
      crumb="Wish list"
      kicker="Saved for later"
      title="Your"
      emphasis="wish list."
      intro="Saved on this device. Come back any time."
      wide
    >
      <WishlistView />
    </PageShell>
  );
}

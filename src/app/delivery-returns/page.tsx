import type { Metadata } from "next";
import { site } from "@/data/site";
import { Block, PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Delivery & returns",
  description: "UK delivery times, free delivery over £100, and how to return an item.",
  alternates: { canonical: "/delivery-returns" },
};

export default function DeliveryReturnsPage() {
  return (
    <PageShell
      crumb="Delivery & returns"
      kicker="Need a hand?"
      title="Delivery &"
      emphasis="returns."
      intro="Straightforward, so you can order with confidence."
    >
      <Block title="Delivery">
        <p>
          We deliver across the United Kingdom. Delivery is complimentary on orders over £{site.freeDeliveryThreshold}.
          Orders below that amount are charged a delivery fee, shown at checkout before you send your order.
        </p>
        <p>
          Orders are usually dispatched within 2 to 3 working days, and you will receive an email when yours is on its
          way.
        </p>
        <p>
          We currently deliver to UK addresses only. If you would like us to ship elsewhere,{" "}
          <a href="/contact">get in touch</a>.
        </p>
      </Block>
      <Block title="Returns">
        <p>
          Changed your mind? You can return unworn items in their original condition and packaging within{" "}
          {site.returnWindowDays} days of receiving them, for a refund to your original payment method.
        </p>
        <ul>
          <li>Items must be unworn, unwashed and have their tags attached.</li>
          <li>Jewellery must be returned in its original packaging.</li>
          <li>Return postage is paid by the customer unless the item is faulty.</li>
        </ul>
      </Block>
      <Block title="How to return an item">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> with your order number and the items
            you are returning.
          </li>
          <li>We will reply with the returns address.</li>
          <li>Post the parcel using a tracked service and keep your proof of postage.</li>
          <li>Once it arrives and is checked, we refund you within 5 to 7 working days.</li>
        </ol>
      </Block>
      <Block title="Faulty or incorrect items">
        <p>
          If something arrives damaged, faulty or not as described, tell us with a photo and we will put it right with a
          replacement or full refund, including postage. This does not affect your statutory rights.
        </p>
      </Block>
      <PageCta />
    </PageShell>
  );
}

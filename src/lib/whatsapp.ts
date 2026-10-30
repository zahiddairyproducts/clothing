import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { deliveryCost, orderTotal } from "@/lib/pricing";
import type { CartLine } from "@/components/shop/CartProvider";

export type OrderCustomer = {
  name: string;
  phone: string;
  email: string;
  line1: string;
  line2: string;
  city: string;
  postcode: string;
  notes: string;
};

export const whatsappEnabled = /^\d{8,15}$/.test(site.whatsappNumber);

/** Short reference the customer and the shop can both quote, e.g. RD-4K7Q2M. */
export function newOrderRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return "RD-" + Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

export function buildOrderMessage(ref: string, lines: CartLine[], subtotal: number, c: OrderCustomer): string {
  const delivery = deliveryCost(subtotal);
  const items = lines.map(({ product, variant, size, qty }, i) => {
    const options = [product.variants.length > 1 ? variant.label : null, size ? `Size ${size}` : null]
      .filter(Boolean)
      .join(", ");
    return `${i + 1}. ${product.name}${options ? ` (${options})` : ""} x${qty} - ${formatPrice(product.price * qty)}\n   ${site.url}/products/${product.id}`;
  });
  return [
    `Hello ${site.name}! I would like to place an order.`,
    `Order ref: ${ref}`,
    "",
    ...items,
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    `Delivery: ${delivery === 0 ? "Free" : formatPrice(delivery)}`,
    `Total: ${formatPrice(orderTotal(subtotal))}`,
    "",
    `Name: ${c.name}`,
    `Phone: ${c.phone}`,
    c.email ? `Email: ${c.email}` : "",
    `Address: ${[c.line1, c.line2, c.city, c.postcode.toUpperCase()].filter(Boolean).join(", ")}`,
    c.notes ? `Notes: ${c.notes}` : "",
    "",
    "Please confirm availability and how to pay. Thank you!",
  ]
    .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
    .join("\n");
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

import { site } from "@/data/site";

/** Delivery charge in pounds: free once the subtotal reaches the threshold. */
export function deliveryCost(subtotal: number): number {
  return subtotal === 0 || subtotal >= site.freeDeliveryThreshold ? 0 : site.deliveryFee;
}

export function orderTotal(subtotal: number): number {
  return subtotal + deliveryCost(subtotal);
}

/** Delivery is included in the price of every item, so there is never an extra charge. */
export function deliveryCost(): number {
  return 0;
}

export function orderTotal(subtotal: number): number {
  return subtotal + deliveryCost();
}

"use client";

import { useEffect } from "react";
import { useCart } from "./CartProvider";

/** Empties the bag once the customer lands on the order-confirmed page. */
export function ClearBagOnMount() {
  const { clear } = useCart();
  useEffect(() => {
    clear();
  }, [clear]);
  return null;
}

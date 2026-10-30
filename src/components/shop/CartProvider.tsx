"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { getProduct, getVariant, type Product, type Variant } from "@/data/products";
import { cartStore, parseLineKey } from "./cart-store";

export type CartLine = { key: string; product: Product; variant: Variant; size?: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (productId: string, variantId: string, size?: string) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const bag = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const lines = useMemo<CartLine[]>(
    () =>
      Object.entries(bag).flatMap(([key, qty]) => {
        const { productId, variantId, size } = parseLineKey(key);
        const product = getProduct(productId);
        const variant = product && getVariant(product, variantId);
        return product && variant ? [{ key, product, variant, size, qty }] : [];
      }),
    [bag],
  );

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const subtotal = useMemo(() => lines.reduce((n, l) => n + l.product.price * l.qty, 0), [lines]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      subtotal,
      add: cartStore.add,
      setQty: cartStore.setQty,
      remove: cartStore.remove,
      clear: cartStore.clear,
      isOpen,
      open,
      close,
    }),
    [lines, count, subtotal, isOpen, open, close],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

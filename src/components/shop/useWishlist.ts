"use client";

import { useCallback, useSyncExternalStore } from "react";
import { wishlistStore } from "./wishlist-store";
import { useToast } from "./ToastProvider";

export function useWishlist() {
  const ids = useSyncExternalStore(wishlistStore.subscribe, wishlistStore.getSnapshot, wishlistStore.getServerSnapshot);
  const { toast } = useToast();

  const toggle = useCallback(
    (productId: string, name?: string) => {
      const nowSaved = wishlistStore.toggle(productId);
      toast(nowSaved ? `${name ?? "Item"} saved to your wish list` : "Removed from your wish list");
    },
    [toast],
  );

  return { ids, count: ids.length, has: (id: string) => ids.includes(id), toggle, remove: wishlistStore.remove };
}

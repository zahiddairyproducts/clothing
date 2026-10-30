import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** false during server render and the first client render, true afterwards. The bag lives in localStorage, so pages that show it wait for this. */
export function useHydrated(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

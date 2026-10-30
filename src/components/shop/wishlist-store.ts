/**
 * Saved pieces ("wish list"): a set of product ids kept in localStorage, synced across tabs.
 * Same pattern as cart-store: hydration-safe (server snapshot is always empty) and validated against the catalogue.
 */
import { getProduct } from "@/data/products";

const STORAGE_KEY = "rangeen-dhaage:wishlist:v1";
const MAX_ITEMS = 100;
const EMPTY: readonly string[] = Object.freeze([]);

let state: readonly string[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function sanitise(input: unknown): readonly string[] {
  if (!Array.isArray(input)) return EMPTY;
  const ids = [...new Set(input.filter((id): id is string => typeof id === "string" && !!getProduct(id)))].slice(0, MAX_ITEMS);
  return ids.length ? ids : EMPTY;
}

function read(): readonly string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? sanitise(JSON.parse(raw)) : EMPTY;
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (!loaded && typeof window !== "undefined") {
    state = read();
    loaded = true;
  }
}

function commit(next: readonly string[]) {
  state = next.length ? next : EMPTY;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: the list still works in memory */
  }
  listeners.forEach((l) => l());
}

function onStorage(event: StorageEvent) {
  if (event.key === STORAGE_KEY || event.key === null) {
    state = read();
    listeners.forEach((l) => l());
  }
}

export const wishlistStore = {
  subscribe(listener: () => void) {
    ensureLoaded();
    if (listeners.size === 0) window.addEventListener("storage", onStorage);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): readonly string[] {
    ensureLoaded();
    return state;
  },
  getServerSnapshot(): readonly string[] {
    return EMPTY;
  },
  /** Adds or removes the product; returns true if it is now saved. */
  toggle(productId: string): boolean {
    if (!getProduct(productId)) return false;
    if (state.includes(productId)) {
      commit(state.filter((id) => id !== productId));
      return false;
    }
    commit([productId, ...state].slice(0, MAX_ITEMS));
    return true;
  },
  remove(productId: string) {
    if (state.includes(productId)) commit(state.filter((id) => id !== productId));
  },
};

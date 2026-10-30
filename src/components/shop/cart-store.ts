/**
 * Tiny external store for the shopping bag, consumed with useSyncExternalStore.
 * - A bag line is one product + one colour + (for clothing) one size, stored as a key
 *   "productId~variantId~size" with a quantity. Prices always come from the catalogue.
 * - Persists to localStorage and syncs across tabs.
 * - Hydration-safe: the server snapshot is always an empty bag.
 */
import { getProduct, getVariant } from "@/data/products";

export type BagState = Readonly<Record<string, number>>;

const STORAGE_KEY = "rangeen-dhaage:bag:v2";
const MAX_QTY = 10;
const EMPTY: BagState = Object.freeze({});

let state: BagState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

export function lineKey(productId: string, variantId: string, size?: string): string {
  return [productId, variantId, size ?? ""].join("~");
}

export function parseLineKey(key: string) {
  const [productId = "", variantId = "", size = ""] = key.split("~");
  return { productId, variantId, size: size || undefined };
}

function isValidKey(key: string): boolean {
  const { productId, variantId, size } = parseLineKey(key);
  const product = getProduct(productId);
  if (!product || !getVariant(product, variantId)) return false;
  return product.sizes?.length ? !!size && product.sizes.includes(size) : !size;
}

function sanitise(input: unknown): BagState {
  if (!input || typeof input !== "object") return EMPTY;
  const next: Record<string, number> = {};
  for (const [key, qty] of Object.entries(input as Record<string, unknown>)) {
    if (isValidKey(key) && typeof qty === "number" && Number.isInteger(qty) && qty > 0) {
      next[key] = Math.min(qty, MAX_QTY);
    }
  }
  return Object.keys(next).length ? next : EMPTY;
}

function read(): BagState {
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

function commit(next: BagState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable (private mode / quota) – bag still works in memory */
  }
  listeners.forEach((l) => l());
}

function onStorage(event: StorageEvent) {
  if (event.key === STORAGE_KEY || event.key === null) {
    state = read();
    listeners.forEach((l) => l());
  }
}

export const cartStore = {
  subscribe(listener: () => void) {
    ensureLoaded();
    if (listeners.size === 0) window.addEventListener("storage", onStorage);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): BagState {
    ensureLoaded();
    return state;
  },
  getServerSnapshot(): BagState {
    return EMPTY;
  },
  add(productId: string, variantId: string, size?: string) {
    const key = lineKey(productId, variantId, size);
    if (!isValidKey(key)) return;
    commit({ ...state, [key]: Math.min((state[key] ?? 0) + 1, MAX_QTY) });
  },
  setQty(key: string, qty: number) {
    if (!isValidKey(key)) return;
    if (qty < 1) return cartStore.remove(key);
    commit({ ...state, [key]: Math.min(Math.floor(qty), MAX_QTY) });
  },
  remove(key: string) {
    if (!(key in state)) return;
    const { [key]: _removed, ...rest } = state;
    void _removed;
    commit(Object.keys(rest).length ? rest : EMPTY);
  },
};

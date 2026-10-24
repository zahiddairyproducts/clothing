/**
 * Tiny external store for the shopping bag, consumed with useSyncExternalStore.
 * - Stores only { productId: quantity } so prices always come from the catalogue.
 * - Persists to localStorage and syncs across tabs.
 * - Hydration-safe: the server snapshot is always an empty bag.
 */
import { getProduct } from "@/data/products";

export type BagState = Readonly<Record<string, number>>;

const STORAGE_KEY = "rangeen-dhaage:bag:v1";
const MAX_QTY = 10;
const EMPTY: BagState = Object.freeze({});

let state: BagState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function sanitise(input: unknown): BagState {
  if (!input || typeof input !== "object") return EMPTY;
  const next: Record<string, number> = {};
  for (const [id, qty] of Object.entries(input as Record<string, unknown>)) {
    if (getProduct(id) && typeof qty === "number" && Number.isInteger(qty) && qty > 0) {
      next[id] = Math.min(qty, MAX_QTY);
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
  add(id: string) {
    if (!getProduct(id)) return;
    commit({ ...state, [id]: Math.min((state[id] ?? 0) + 1, MAX_QTY) });
  },
  setQty(id: string, qty: number) {
    if (!getProduct(id)) return;
    if (qty < 1) return cartStore.remove(id);
    commit({ ...state, [id]: Math.min(Math.floor(qty), MAX_QTY) });
  },
  remove(id: string) {
    if (!(id in state)) return;
    const { [id]: _removed, ...rest } = state;
    void _removed;
    commit(Object.keys(rest).length ? rest : EMPTY);
  },
};

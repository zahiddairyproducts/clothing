"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/cx";

type ToastContextValue = { toast: (message: string) => void };

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const toast = useCallback((next: string) => {
    setMessage(next);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2300);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cx(
          "pointer-events-none fixed bottom-[22px] left-1/2 z-30 -translate-x-1/2 bg-accent-deep px-5 py-3 text-[11px] tracking-[.04em] text-white shadow-[0_8px_24px_rgba(0,0,0,.2)] transition duration-[250ms]",
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        )}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

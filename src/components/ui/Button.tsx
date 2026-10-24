import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { ArrowUpRightIcon } from "./icons";

const base =
  "inline-flex min-h-[47px] items-center justify-center gap-[18px] border px-[23px] text-[10px] uppercase tracking-[.15em] transition-colors duration-200";

const variants = {
  primary:
    "border-wine bg-wine text-white hover:border-wine-deep hover:bg-wine-deep",
  // The original design set wine text on near-black here (~2:1 contrast, barely readable).
  // This is the original's own hover look, promoted to the default state.
  light:
    "border-[#f7edf0] bg-[#f7edf0] text-wine-deep hover:border-white hover:bg-white",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  variant = "primary",
  className,
  children,
  arrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <Link className={cx(base, variants[variant], className)} {...props}>
      {children}
      {arrow && <ArrowUpRightIcon className="text-[1.3em]" />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  arrow = true,
  type = "button",
  ...props
}: ComponentProps<"button"> & { variant?: Variant; arrow?: boolean }) {
  return (
    <button type={type} className={cx(base, variants[variant], className)} {...props}>
      {children}
      {arrow && <ArrowUpRightIcon className="text-[1.3em]" />}
    </button>
  );
}

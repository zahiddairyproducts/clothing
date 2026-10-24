import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { ArrowUpRightIcon } from "./icons";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Standard page section: max-width wrapper with the storefront's vertical rhythm. */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[60px] tablet:py-[clamp(64px,8vw,112px)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHead({
  kicker,
  title,
  emphasis,
  linkHref,
  linkLabel,
}: {
  kicker: string;
  title: string;
  emphasis: string;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5 tablet:mb-[35px]">
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[.2em] text-wine">{kicker}</div>
        <h2 className="mt-2.5 font-serif text-[35px] leading-[1.08] font-medium tracking-[-.04em] tablet:text-[clamp(34px,4vw,52px)]">
          {title} <em className="font-medium text-wine">{emphasis}</em>
        </h2>
      </div>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-1.5 border-b border-wine pb-[7px] text-[8px] uppercase tracking-[.08em] whitespace-nowrap tablet:text-[10px] tablet:tracking-[.13em]"
      >
        {linkLabel}
        <ArrowUpRightIcon className="text-[1.3em]" />
      </Link>
    </div>
  );
}

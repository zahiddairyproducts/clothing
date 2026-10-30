import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type PageShellProps = {
  kicker: string;
  title: string;
  emphasis: string;
  intro?: string;
  crumb: string;
  /** Use the full page width instead of the readable text column. */
  wide?: boolean;
  children: ReactNode;
};

/** Shared frame for the information pages: breadcrumb, serif heading, readable column. */
export function PageShell({ kicker, title, emphasis, intro, crumb, wide, children }: PageShellProps) {
  return (
    <main id="main">
      <Section className="pt-8 pb-[60px] tablet:pt-10 tablet:pb-[clamp(64px,8vw,112px)]">
        <nav aria-label="Breadcrumb" className="text-[10px] tracking-[.14em] text-muted uppercase">
          <Link href="/" className="transition-colors hover:text-maroon">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page" className="text-ink">
            {crumb}
          </span>
        </nav>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <div className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">{kicker}</div>
            <h1 className="mt-2.5 font-serif text-[40px] leading-[1.05] font-medium tracking-[-.04em] tablet:text-[clamp(40px,5vw,64px)]">
              {title} <em className="font-medium text-maroon">{emphasis}</em>
            </h1>
          </div>
          {intro && <p className="max-w-[360px] text-[12px] leading-[1.9] text-muted">{intro}</p>}
        </div>

        <div aria-hidden="true" className="mt-8 border-t border-dashed border-maroon/40" />

        <div className={wide ? "mt-10" : "mt-10 max-w-[760px]"}>{children}</div>
      </Section>
    </main>
  );
}

export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-serif text-[24px] leading-[1.2] font-medium tracking-[-.03em] text-ink tablet:text-[28px]">
        {title}
      </h2>
      <div className="space-y-3 text-[13px] leading-[1.95] text-ink-soft [&_a]:text-maroon [&_a]:underline [&_li]:ml-4 [&_li]:list-disc [&_li]:pl-1">
        {children}
      </div>
    </section>
  );
}

export function PageCta({ children = "Browse the shop", href = "/shop" }: { children?: ReactNode; href?: string }) {
  return (
    <div className="mt-12 border-t border-dashed border-maroon/40 pt-8">
      <ButtonLink href={href}>{children}</ButtonLink>
    </div>
  );
}

import Link from "next/link";
import { footerColumns, site } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="bg-paper-2 px-[clamp(20px,5vw,72px)] pt-14 pb-6 text-ink">
      <div className="grid grid-cols-2 gap-x-[18px] gap-y-[25px] pb-[50px] tablet:gap-[35px] desktop:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="col-span-2 desktop:col-span-1">
          <strong className="font-serif text-[28px] leading-normal font-medium tracking-[-.05em] tablet:text-[31px]">
            {site.name}
          </strong>
          <p className="mt-4 max-w-[260px] text-[11px] leading-[1.9] text-muted">
            Clothes with character. Colour with feeling. A little something lovely for wherever life takes you.
          </p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="mt-[5px] mb-[18px] text-[9px] font-semibold tracking-[.18em] uppercase">{col.title}</h2>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="my-3 flex items-center gap-1 text-[10px] text-muted transition-colors hover:text-accent-deep tablet:text-[11px]"
              >
                {link.label}
                {col.title === "Stay connected" && <ArrowUpRightIcon className="text-[1.2em]" />}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-2 border-t border-line-strong pt-[19px] text-[9px] tracking-[.05em] text-muted tablet:flex-row tablet:gap-[15px]">
        <span>
          © <CurrentYear /> {site.name}. Made with feeling.
        </span>
        <span>United Kingdom · GBP £</span>
        <span>Privacy · Terms · Returns</span>
      </div>
    </footer>
  );
}

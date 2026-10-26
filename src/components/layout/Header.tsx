"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { useCart } from "@/components/shop/CartProvider";
import { SearchDialog } from "@/components/shop/SearchDialog";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";

const navLinkClass =
  "relative text-[11px] uppercase tracking-[.11em] after:absolute after:-bottom-[5px] after:left-0 after:h-px after:w-0 after:bg-maroon after:transition-[width] after:duration-[250ms] hover:after:w-full";

export function Header() {
  const { count, open: openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="grid h-[68px] grid-cols-[40px_1fr_70px] items-center border-b border-dashed border-maroon/40 bg-paper/97 px-[13px] backdrop-blur-md tablet:h-[74px] tablet:grid-cols-[1fr_auto_1fr] tablet:px-5 desktop:h-[88px] desktop:px-[clamp(20px,5vw,76px)]">
        <button
          type="button"
          className="justify-self-start p-1.5 text-[19px] tablet:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className="hidden items-center gap-3.5 tablet:flex desktop:gap-[25px]" aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${navLinkClass} ${i === 2 ? "hidden desktop:inline" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="text-center leading-none" aria-label={`${site.name} home`}>
          <strong className="block font-serif text-[24px] font-semibold tracking-[-.055em] text-maroon italic tablet:text-[25px] desktop:text-[29px]">
            {site.name}
          </strong>
          <span className="mt-[9px] block text-[7px] tracking-[.38em] text-muted uppercase tablet:text-[8px]">
            {site.tagline}
          </span>
        </Link>

        <div className="flex items-center justify-end gap-[9px] tablet:gap-5">
          <Link href="/shop" className={`${navLinkClass} hidden desktop:inline`}>
            Shop all
          </Link>
          <button type="button" className="p-1.5 text-[19px]" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <SearchIcon />
          </button>
          <button
            type="button"
            className="relative p-1.5 text-[19px]"
            aria-label={`Open shopping bag, ${count} ${count === 1 ? "item" : "items"}`}
            onClick={openCart}
          >
            <BagIcon />
            <span
              aria-hidden="true"
              className="absolute top-0 -right-[3px] grid size-4 place-items-center rounded-full bg-maroon text-[9px] text-white"
            >
              {count}
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="flex flex-col border-b border-line bg-paper px-5 pt-2 pb-[15px] tablet:hidden"
        >
          {[
            { label: "Shop all", href: "/shop" },
            { label: "Collections", href: "/#collections" },
            { label: "Our story", href: "/#story" },
            { label: "Join our list", href: "/#newsletter" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-3 text-[11px] tracking-[.1em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

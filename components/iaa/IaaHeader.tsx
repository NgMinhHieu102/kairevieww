"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";

import { navItems } from "@/lib/iaa-data";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/iaa";

interface IaaHeaderProps {
  activeHref?: string;
}

export function IaaHeader({ activeHref }: IaaHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (item: NavItem) =>
    activeHref === item.href || item.children?.some((child) => child.href === activeHref);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-[1001] h-[70px] bg-white text-black md:h-[90px]">
      <div className="relative mx-auto flex h-full max-w-[1080px] items-center px-[15px]">
        <button
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
          className="flex h-[49px] w-6 flex-col items-start justify-center gap-[4px] text-[#777] transition-colors hover:text-black md:hidden"
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <span className="block h-[2px] w-[20px] bg-current" />
          <span className="block h-[2px] w-[20px] bg-current" />
          <span className="block h-[2px] w-[20px] bg-current" />
        </button>

        <a
          aria-label="Independent Academies Association"
          className="absolute left-1/2 top-0 flex h-[70px] w-[167px] -translate-x-1/2 items-center justify-center md:static md:h-[90px] md:translate-x-0 md:justify-start"
          href="https://iaa.uk.net/"
        >
          <Image
            alt="Independent Academies Association"
            className="h-[70px] w-[53px] object-contain md:h-[90px] md:w-[77px]"
            height={90}
            loading="eager"
            src="/images/iaa/iaa-logo-1-1-968x800.png"
            width={77}
          />
        </a>

        <nav className="ml-[22px] hidden h-9 flex-1 items-center md:flex">
          <ul className="flex items-center gap-x-[10px]">
            {navItems.map((item) => (
              <li className="group relative" key={item.href}>
                <a
                  className={cn(
                    "block px-[2px] py-2 text-[11px] font-bold uppercase leading-5 transition-colors hover:text-black",
                    isActive(item)
                      ? "text-black"
                      : "text-[rgba(102,102,102,0.85)]",
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
                {item.children?.length ? (
                  <ul className="pointer-events-none absolute left-0 top-full min-w-[190px] translate-y-2 border border-[#ececec] bg-white py-[8px] text-left opacity-0 shadow-[0_3px_18px_rgba(0,0,0,0.15)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          className="block px-[14px] py-[8px] text-[12.5px] font-bold uppercase leading-5 text-[#777] transition-colors hover:bg-[#f7f7f7] hover:text-black"
                          href={child.href}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <form
          action="https://iaa.uk.net/"
          className="relative hidden h-[34px] w-[169px] md:block"
        >
          <label className="sr-only" htmlFor="iaa-search">
            Search
          </label>
          <input
            className="h-[33px] w-[167px] border border-[rgba(0,0,0,0.09)] bg-[rgba(0,0,0,0.03)] px-[11px] pr-[38px] text-[13px] leading-[33px] text-black outline-none transition-colors placeholder:text-[#777]"
            id="iaa-search"
            name="s"
            placeholder="Search..."
            type="search"
          />
          <button
            aria-label="Search"
            className="absolute right-0 top-0 flex h-[34px] w-[34px] items-center justify-center text-black transition-colors hover:text-[#446084]"
            type="submit"
          >
            <Search className="size-[14px]" strokeWidth={2} />
          </button>
        </form>

        <button
          aria-label="Search"
          className="ml-auto flex h-[38px] w-[15px] items-center justify-center text-[rgba(102,102,102,0.85)] transition-colors hover:text-black md:hidden"
          type="button"
        >
          <Search className="size-[15px]" strokeWidth={2} />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[1100] bg-black/60 transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      <button
        aria-label="Close menu"
        className={cn(
          "fixed right-[18px] top-[24px] z-[1102] flex size-10 items-center justify-center rounded-full bg-black/15 text-white shadow-sm transition hover:bg-black/25 md:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        type="button"
      >
        <X className="size-[30px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]" strokeWidth={2.4} />
      </button>
      <aside
        className={cn(
          "fixed left-0 top-0 z-[1101] flex h-dvh w-[260px] flex-col bg-white/95 text-black shadow-2xl transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-hidden={!isMenuOpen}
      >
        <form
          action="https://iaa.uk.net/"
          className="border-b border-[#ececec] px-[20px] pb-[18px] pt-[76px]"
        >
          <label className="sr-only" htmlFor="iaa-mobile-search">
            Search
          </label>
          <div className="flex h-[44px] items-center rounded-full border border-[#d9d9d9] bg-white px-[18px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
            <input
              className="min-w-0 flex-1 bg-transparent text-[18px] leading-none text-[#777] outline-none placeholder:text-[#777]"
              id="iaa-mobile-search"
              name="s"
              placeholder="Search..."
              type="search"
            />
            <button
              aria-label="Search"
              className="ml-[10px] flex size-[30px] items-center justify-center text-black"
              type="submit"
            >
              <Search className="size-[26px]" strokeWidth={2.5} />
            </button>
          </div>
        </form>
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-[24px] [-webkit-overflow-scrolling:touch]">
          <ul>
            {navItems.map((item) => (
              <li className="border-b border-[#ececec]" key={item.href}>
                <a
                  className={cn(
                    "block px-[20px] py-[14px] text-[12.8px] font-bold uppercase leading-5 transition-colors hover:bg-[#f7f7f7]",
                    isActive(item) ? "text-black" : "text-[#777]",
                  )}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children?.length ? (
                  <ul className="bg-[#fbfbfb] pb-[8px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          className={cn(
                            "block px-[32px] py-[7px] text-[12.5px] font-semibold leading-5 transition-colors hover:bg-[#f1f1f1]",
                            activeHref === child.href ? "text-black" : "text-[#777]",
                          )}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}

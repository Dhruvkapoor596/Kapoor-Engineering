"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { telUrl } from "@/lib/site";

const links = [
  { label: "Index", href: "/", num: "01" },
  { label: "Catalog", href: "/products", num: "02" },
  { label: "Capabilities", href: "/services", num: "03" },
  { label: "Works", href: "/projects", num: "04" },
  { label: "Studio", href: "/about", num: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-shadow ${
        scrolled ? "shadow-[0_4px_0_0_#0a0a0a]" : ""
      }`}
    >
      <div className="grid grid-cols-12 items-stretch">
        {/* Logo cell */}
        <Link
          href="/"
          data-testid="navbar-logo"
          className="col-span-8 md:col-span-3 border-r-2 border-black px-4 md:px-6 py-4 md:py-5 flex items-center gap-3 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white flex items-center justify-center font-display text-xl leading-none group-hover:bg-[#FF3B00] transition-colors">
            K
          </div>
          <div className="leading-none">
            <div className="font-display text-base md:text-lg tracking-brutal uppercase">
              Kapoor / Eng. Works
            </div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#4A4A4A] mt-1">
              Est. 2007 · Alwar, IN
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex col-span-7 border-r-2 border-black">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={`flex-1 border-r border-black/15 last:border-r-0 px-3 lg:px-5 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "bg-black text-white"
                    : "text-black hover:bg-[#FF3B00] hover:text-white"
                }`}
              >
                <span className="opacity-50 text-[9px]">{l.num}</span>
                <span className="font-bold">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA cell */}
        <Link
          href="/contact"
          data-testid="navbar-contact-cta"
          className="hidden md:flex col-span-2 items-center justify-between px-4 lg:px-6 bg-[#FF3B00] text-white hover:bg-black transition-colors font-mono text-[11px] uppercase tracking-[0.18em] font-bold group"
        >
          <span>Get Quote</span>
          <span className="text-base">→</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
          className="md:hidden col-span-4 border-l-2 border-black bg-black text-white flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-bold"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t-2 border-black bg-white"
        >
          {[...links, { label: "Get Quote", href: "/contact", num: "06" }].map(
            (l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`flex items-baseline gap-4 px-5 py-5 border-b border-black/15 font-display text-2xl uppercase ${
                  pathname === l.href
                    ? "bg-black text-white"
                    : "hover:bg-[#FF3B00] hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] opacity-60 tracking-[0.2em]">
                  {l.num}
                </span>
                <span>{l.label}</span>
              </Link>
            )
          )}
          <a
            href={telUrl}
            data-testid="mobile-call-link"
            className="flex items-center justify-between px-5 py-5 bg-[#F4F4F0] font-mono text-xs uppercase tracking-[0.2em] font-bold"
          >
            <span>Call Direct</span>
            <span>+91 941 484 6109</span>
          </a>
        </div>
      )}
    </header>
  );
}

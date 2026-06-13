"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_SCROLL_THRESHOLD_PX = 20;
const DESKTOP_NAV_LINKS = ["Home", "Products", "Services", "Projects", "About"];
const MOBILE_NAV_LINKS = [
  "Home",
  "Products",
  "Services",
  "Projects",
  "About",
  "Contact",
];

const toHref = (item) =>
  item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > NAV_SCROLL_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto-close mobile menu on route change (render-phase pattern for React 19)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed w-full z-50 transition-all duration-500 top-0 pt-4 px-4 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              data-testid="navbar-logo"
              className="flex items-center space-x-4"
            >
              <Image
                src="/logos/Kew-Logo-6.png"
                alt="KEW Logo"
                width={48}
                height={48}
                priority
                className="object-contain"
              />
              <div className="hidden sm:block">
                <span className="block text-xl font-roboto-slab font-black text-white tracking-widest">
                  KAPOOR
                </span>
                <span className="block text-[9px] font-medium text-[#EAB308] tracking-[0.3em] uppercase">
                  Engineering Works
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {DESKTOP_NAV_LINKS.map((item) => {
              const href = toHref(item);
              const isActive = pathname === href;
              return (
                <Link
                  key={item}
                  href={href}
                  data-testid={`nav-link-${item.toLowerCase()}`}
                  className={`text-xs font-semibold transition-all uppercase tracking-[0.15em] pb-1 border-b-2 ${
                    isActive
                      ? "text-[#EAB308] border-[#EAB308]"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              data-testid="navbar-contact-cta"
              className="hidden md:flex items-center justify-center bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-[#EAB308] hover:text-black transition-colors uppercase tracking-widest"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden absolute top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-2xl"
        >
          <div className="space-y-6">
            {MOBILE_NAV_LINKS.map((item) => {
              const href = toHref(item);
              const isActive = pathname === href;
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${item.toLowerCase()}`}
                  className={`block text-sm font-bold uppercase tracking-widest ${
                    isActive
                      ? "text-[#EAB308]"
                      : "text-white hover:text-[#EAB308]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

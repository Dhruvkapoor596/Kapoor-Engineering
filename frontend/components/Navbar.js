"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, telUrl } from "@/lib/site";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 top-0 pt-4 px-4 ${
        scrolled ? "py-2" : "py-4"
      }`}
      data-testid="main-navbar"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 h-20">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-3 sm:space-x-4"
              data-testid="navbar-logo"
            >
              <Image
                src="/logos/Kew-Logo-6.png"
                alt={`${siteConfig.name} Logo`}
                width={48}
                height={48}
                priority
                className="object-contain"
              />
              <div className="hidden sm:block">
                <span className="block text-xl font-roboto-slab font-black text-white tracking-widest leading-none">
                  KAPOOR
                </span>
                <span className="block text-[9px] font-medium text-[#EAB308] tracking-[0.3em] uppercase mt-1">
                  Engineering Works
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                  className={`text-xs font-semibold transition-all uppercase tracking-[0.15em] pb-1 border-b-2 ${
                    isActive
                      ? "text-[#EAB308] border-[#EAB308]"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href={telUrl}
              data-testid="navbar-call-btn"
              aria-label="Call us"
              className="md:hidden text-white p-2 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/30"
            >
              <Phone className="w-4 h-4 text-[#EAB308]" />
            </a>
            <Link
              href="/contact"
              data-testid="navbar-contact-cta"
              className="hidden md:flex items-center justify-center bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-[#EAB308] hover:text-black transition-colors uppercase tracking-widest"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden absolute top-24 left-4 right-4 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-2xl"
        >
          <div className="space-y-5">
            {[...navLinks, { name: "Contact", href: "/contact" }].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  className={`block text-sm font-bold uppercase tracking-widest ${
                    isActive
                      ? "text-[#EAB308]"
                      : "text-white hover:text-[#EAB308]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

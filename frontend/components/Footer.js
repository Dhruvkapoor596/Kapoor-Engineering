import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, telUrl, mailUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className="bg-[#050505] border-t border-white/5 pt-24 pb-8 relative overflow-hidden"
      data-testid="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/Kew-Logo-6.png"
                alt={`${siteConfig.name} Logo`}
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Menu
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Products", href: "/products" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#EAB308] text-sm font-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Top Categories
            </h4>
            <ul className="space-y-4">
              {[
                "Roofing Sheets",
                "Structural Steel",
                "MS Pipes",
                "Industrial Hardware",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-slate-400 hover:text-[#EAB308] text-sm font-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Reach Us
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-[#EAB308] mt-1 flex-shrink-0" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </li>
              <li>
                <a
                  href={telUrl}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-phone-link"
                >
                  <Phone className="w-4 h-4 text-[#EAB308]" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={mailUrl}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors break-all"
                  data-testid="footer-email-link"
                >
                  <Mail className="w-4 h-4 text-[#EAB308] flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-slate-500 text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-xs font-light tracking-wider uppercase">
            Crafted with precision in Alwar, Rajasthan
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[-5%] left-0 w-full text-center pointer-events-none select-none opacity-[0.03]"
      >
        <h1 className="text-[15vw] font-black text-white tracking-tighter leading-none">
          KAPOOR
        </h1>
      </div>
    </footer>
  );
}

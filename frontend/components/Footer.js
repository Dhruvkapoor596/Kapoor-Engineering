import Link from "next/link";
import { siteConfig, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="main-footer"
      className="bg-black text-white border-t-2 border-black"
    >
      {/* Top: massive type + columns */}
      <div className="grid grid-cols-12 border-b border-white/15">
        <div className="col-span-12 lg:col-span-7 border-r border-white/15 p-6 md:p-10 lg:p-14">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF3B00] mb-6">
            [ Workshop / Alwar ]
          </p>
          <h2 className="font-display text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-brutal uppercase">
            Let&apos;s
            <br />
            Build.
          </h2>
          <Link
            href="/contact"
            data-testid="footer-cta-contact"
            className="mt-10 inline-flex items-center gap-3 bg-[#FF3B00] text-white border-2 border-white px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors"
          >
            Start a Project
            <span className="text-base">→</span>
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-5 grid grid-cols-2">
          <div className="border-r border-white/15 p-6 md:p-10">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
              Index
            </h4>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.18em]">
              {[
                ["Catalog", "/products"],
                ["Capabilities", "/services"],
                ["Works", "/projects"],
                ["Studio", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#FF3B00] transition-colors"
                  >
                    {label}
                    <span className="ml-2 opacity-30">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-10">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
              Hail
            </h4>
            <ul className="space-y-4 font-mono text-xs">
              <li>
                <a
                  href={telUrl}
                  data-testid="footer-phone"
                  className="block hover:text-[#FF3B00] transition-colors"
                >
                  <span className="uppercase tracking-[0.18em] opacity-50 block mb-1">
                    Telephone
                  </span>
                  <span className="font-display normal-case text-lg tracking-normal">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={mailUrl}
                  data-testid="footer-email"
                  className="block hover:text-[#FF3B00] transition-colors break-all"
                >
                  <span className="uppercase tracking-[0.18em] opacity-50 block mb-1">
                    Despatch
                  </span>
                  <span className="font-sans normal-case text-sm">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="block hover:text-[#FF3B00] transition-colors"
                >
                  <span className="uppercase tracking-[0.18em] opacity-50 block mb-1">
                    Signal
                  </span>
                  <span className="font-sans normal-case text-sm">
                    WhatsApp Direct
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <span className="uppercase tracking-[0.18em] opacity-50 block mb-1">
                    Site
                  </span>
                  <span className="font-sans normal-case text-sm">
                    {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                    {siteConfig.address.city}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant brand mark */}
      <div className="relative overflow-hidden border-b border-white/15">
        <div className="px-4 md:px-8 py-8 md:py-12">
          <h1 className="font-display text-[28vw] md:text-[24vw] leading-[0.78] tracking-brutal uppercase select-none -mb-[5vw]">
            <span>KEW</span>
            <sup className="font-mono text-[3vw] md:text-[1.6vw] text-[#FF3B00] align-top tracking-[0.2em] ml-2">
              ®
            </sup>
          </h1>
        </div>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
        <div className="border-r border-white/15 px-4 md:px-8 py-5">
          © {year} {siteConfig.name}
        </div>
        <div className="border-r border-white/15 px-4 md:px-8 py-5 md:text-center">
          Forged in Rajasthan
        </div>
        <div className="px-4 md:px-8 py-5 md:text-right">
          v.2026 · System Online
        </div>
      </div>
    </footer>
  );
}

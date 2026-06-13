"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { telUrl, whatsappUrl } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section
      data-testid="contact-cta"
      className="border-b-2 border-black bg-[#FF3B00] text-black relative overflow-hidden"
    >
      {/* Big background numeral */}
      <span
        aria-hidden="true"
        className="absolute -bottom-10 md:-bottom-20 -right-6 font-display text-[40vw] md:text-[24vw] leading-[0.8] tracking-brutal text-white/15 select-none pointer-events-none"
      >
        2007
      </span>

      <div className="relative grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 border-r-0 lg:border-r-2 border-black px-4 md:px-8 lg:px-12 py-14 md:py-24 lg:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
            [ 06 ] · Despatch
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display uppercase tracking-brutal leading-[0.85] text-6xl md:text-8xl lg:text-[10rem]"
          >
            Got
            <br />
            a job?
            <br />
            <span className="text-outline-white">Let&apos;s talk.</span>
          </motion.h2>

          <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
            <Link
              href="/contact"
              data-testid="contact-cta-form"
              className="inline-flex items-center justify-between gap-6 bg-black text-white border-2 border-black px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors min-w-[240px]"
            >
              <span>Open Enquiry Form</span>
              <span className="text-lg">↗</span>
            </Link>
            <a
              href={telUrl}
              data-testid="contact-cta-call"
              className="inline-flex items-center justify-between gap-6 bg-white text-black border-2 border-black px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] font-bold hover-brutal min-w-[240px]"
            >
              <span>Call · +91 941 484 6109</span>
              <span className="text-lg">☎</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-cta-whatsapp"
            className="flex-1 border-b-2 border-black bg-black text-white p-6 md:p-10 hover:bg-white hover:text-black transition-colors flex flex-col justify-between min-h-[180px]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              CH/01 · Instant
            </span>
            <div>
              <span className="font-display uppercase tracking-brutal text-3xl md:text-4xl block">
                WhatsApp
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] block mt-2 opacity-70">
                Response under 1 hr
              </span>
            </div>
          </a>
          <div className="flex-1 bg-[#F4F4F0] p-6 md:p-10 flex flex-col justify-between min-h-[180px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A]">
              CH/02 · Site Visit
            </span>
            <div>
              <span className="font-display uppercase tracking-brutal text-3xl md:text-4xl block">
                Walk-in
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] block mt-2 text-[#4A4A4A]">
                G-491, MIA · Alwar
                <br />
                Mon–Sat · 09:00 – 20:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

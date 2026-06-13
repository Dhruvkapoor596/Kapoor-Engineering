"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&w=1920&q=85";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative border-b-2 border-black bg-blueprint overflow-hidden"
    >
      {/* TOP STRIP: file header */}
      <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
        <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
          File · KEW-INDEX-001
        </div>
        <div className="hidden md:block col-span-3 border-r border-black/15 px-8 py-3">
          27°34′N · 76°36′E
        </div>
        <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3 text-right md:text-left">
          Rev. 2026.01
        </div>
        <div className="hidden md:block col-span-3 px-8 py-3 text-right text-[#FF3B00]">
          ● Workshop Active
        </div>
      </div>

      {/* MAIN BLOCK */}
      <div className="grid grid-cols-12">
        {/* Left text column */}
        <div className="col-span-12 lg:col-span-7 border-r-0 lg:border-r-2 border-black px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF3B00] mb-8 md:mb-10"
          >
            [ 01 ] — Heavy Industrial Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display uppercase leading-[0.82] tracking-brutal text-[14vw] md:text-[10vw] lg:text-[8.5vw]"
          >
            Forged
            <br />
            For
            <br />
            <span className="relative inline-block">
              <span className="text-outline">Industry.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-1 left-0 right-0 h-[0.18em] bg-[#FF3B00] origin-left"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
          >
            <p className="md:col-span-7 text-base md:text-lg leading-relaxed text-[#4A4A4A] max-w-prose">
              Since 2007, <span className="text-black font-semibold">Kapoor
              Engineering Works</span> has shaped raw iron into the bones of
              factories across Rajasthan. Precision machining. Heavy
              fabrication. Honest engineering.
            </p>

            <div className="md:col-span-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                data-testid="hero-catalog-cta"
                className="group inline-flex items-center justify-between gap-4 bg-black text-white border-2 border-black px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] transition-colors flex-1"
              >
                <span>View Catalog</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                data-testid="hero-quote-cta"
                className="group inline-flex items-center justify-between gap-4 bg-white text-black border-2 border-black px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover-brutal flex-1"
              >
                <span>Get Quote</span>
                <span>+</span>
              </Link>
            </div>
          </motion.div>

          {/* Bottom row inside left column */}
          <div className="mt-16 md:mt-24 pt-6 border-t border-black/15 flex flex-wrap items-end justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A]">
            <span>Scroll · Index 01 / 06</span>
            <span className="text-black">↓ Continue</span>
          </div>
        </div>

        {/* Right image column */}
        <div className="col-span-12 lg:col-span-5 relative min-h-[420px] md:min-h-[600px] lg:min-h-0 bg-black overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Industrial workshop interior"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
            className="object-cover grayscale contrast-110"
          />
          {/* Overlay corner labels */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em] text-white pointer-events-none">
            <span className="bg-[#FF3B00] px-2 py-1 text-white">REC ●</span>
            <span className="border border-white/40 px-2 py-1 backdrop-blur-sm">
              IMG.001 / KEW
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.25em] text-white pointer-events-none">
            <div>
              <div className="text-white/60 mb-1">Subject</div>
              <div>Workshop / Lathe Bay</div>
            </div>
            <div className="text-right">
              <div className="text-white/60 mb-1">Exposure</div>
              <div>f/2.8 — 1/60</div>
            </div>
          </div>
          {/* Crosshair detail */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/70 pointer-events-none"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="32" cy="32" r="20" />
            <line x1="32" y1="6" x2="32" y2="22" />
            <line x1="32" y1="42" x2="32" y2="58" />
            <line x1="6" y1="32" x2="22" y2="32" />
            <line x1="42" y1="32" x2="58" y2="32" />
          </svg>
        </div>
      </div>
    </section>
  );
}

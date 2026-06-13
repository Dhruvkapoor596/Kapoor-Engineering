"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PREVIEW_HIDDEN = { opacity: 0, scale: 0.9, x: 30 };
const PREVIEW_SHOW = { opacity: 1, scale: 1, x: 0 };
const PREVIEW_EXIT = { opacity: 0, scale: 0.95 };
const PREVIEW_TRANSITION = { duration: 0.25, ease: "easeOut" };

const SERVICES = [
  {
    num: "01",
    title: "Precision Machining",
    blurb:
      "Lathe, shaper and grinder operations to ±0.05mm tolerance for industrial rollers, shafts and bushes.",
    img: "https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    tags: ["Lathe", "Shaper", "Grinding"],
  },
  {
    num: "02",
    title: "Heavy Metal Fabrication",
    blurb:
      "Structural welding, industrial sheds and custom iron frames engineered for load and longevity.",
    img: "https://images.unsplash.com/photo-1698664683348-f9f35b809821?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    tags: ["MIG", "Arc", "Structural"],
  },
  {
    num: "03",
    title: "Machinery Overhaul",
    blurb:
      "Strip-down, diagnosis and rebuild of hydraulic presses, gearboxes and rolling mill equipment.",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    tags: ["Diagnose", "Rebuild", "Recommission"],
  },
];

export default function ServicesStrip() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      data-testid="services-strip"
      className="border-b-2 border-black bg-white"
    >
      <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
        <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
          [ 03 ] · Capabilities
        </div>
        <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
          Three disciplines, one workshop, zero shortcuts.
        </div>
        <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
          ✱ Active 06:00 – 21:00 IST
        </div>
      </div>

      <div className="relative">
        {SERVICES.map((s, idx) => (
          <Link
            key={s.num}
            href="/services"
            data-testid={`service-row-${s.num}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="group block border-b border-black/15 last:border-b-0 transition-colors hover:bg-black hover:text-white"
          >
            <div className="grid grid-cols-12 items-center px-4 md:px-8 lg:px-12 py-8 md:py-12 gap-4">
              <span className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100 group-hover:text-[#FF3B00]">
                {s.num}
              </span>
              <h3 className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-brutal leading-[0.9]">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-4 text-sm md:text-base leading-relaxed text-[#4A4A4A] group-hover:text-white/70 transition-colors">
                {s.blurb}
              </p>
              <span className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.25em] flex items-center justify-end gap-3 group-hover:gap-5 transition-all">
                Read
                <span className="text-2xl">→</span>
              </span>
            </div>
          </Link>
        ))}

        {/* Hover image preview (desktop only) */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key={hovered}
              initial={PREVIEW_HIDDEN}
              animate={PREVIEW_SHOW}
              exit={PREVIEW_EXIT}
              transition={PREVIEW_TRANSITION}
              className="hidden lg:block fixed top-1/2 right-12 -translate-y-1/2 z-20 w-[320px] h-[420px] border-2 border-black shadow-brutal pointer-events-none bg-white overflow-hidden"
            >
              <Image
                src={SERVICES[hovered].img}
                alt={SERVICES[hovered].title}
                fill
                sizes="320px"
                className="object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#FF3B00] text-white p-3 font-mono text-[10px] uppercase tracking-[0.25em] flex justify-between">
                <span>{SERVICES[hovered].num}</span>
                <span>{SERVICES[hovered].tags.join(" · ")}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

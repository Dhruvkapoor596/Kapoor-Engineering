"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Precision Machining",
    blurb:
      "Sub-millimeter tolerance work on lathes, shapers, grinders and milling machines. We turn raw stock into rollers, shafts, bushes and bespoke parts.",
    deliverables: [
      "Industrial rollers (re-grinding & new)",
      "Shafts, pins, bushes",
      "Custom one-off components",
      "Bulk batch machining",
    ],
    img: "https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  },
  {
    num: "02",
    title: "Heavy Metal Fabrication",
    blurb:
      "Structural welding, industrial sheds, cladding and custom iron frames — engineered for load, longevity and code compliance.",
    deliverables: [
      "Factory & warehouse sheds",
      "Gates, grills, railings",
      "Mezzanine floors & platforms",
      "Bespoke structural welding",
    ],
    img: "https://images.unsplash.com/photo-1698664683348-f9f35b809821?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  },
  {
    num: "03",
    title: "Machinery Overhaul",
    blurb:
      "We strip, diagnose, machine, replace and recommission heavy industrial machinery. Same operator from intake to handover.",
    deliverables: [
      "Hydraulic press rebuild",
      "Gearbox & bearing replacement",
      "Rolling mill recommissioning",
      "Preventive maintenance contracts",
    ],
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  },
];

export default function ServicesPage() {
  return (
    <div data-testid="services-page" className="bg-white">
      <header className="border-b-2 border-black bg-blueprint">
        <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
            Section / Capabilities
          </div>
          <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
            Three disciplines · one workshop
          </div>
          <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
            KEW/CAP
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
            [ What we do ]
          </p>
          <h1 className="font-display uppercase tracking-brutal leading-[0.82] text-6xl md:text-8xl lg:text-[10rem]">
            Our
            <br />
            <span className="text-outline">Trade.</span>
          </h1>
        </div>
      </header>

      {/* Sticky-spec deep dives */}
      {services.map((s, idx) => (
        <motion.section
          key={s.num}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          data-testid={`service-${s.num}`}
          className="grid grid-cols-12 border-b-2 border-black"
        >
          <div
            className={`col-span-12 lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-black overflow-hidden ${
              idx % 2 === 1 ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
            } border-black`}
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale contrast-110"
            />
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white">
              <span className="bg-[#FF3B00] px-2 py-1">SVC/{s.num}</span>
              <span className="border border-white/40 px-2 py-1 backdrop-blur-sm">
                IMG.{idx + 1}
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 px-4 md:px-8 lg:px-12 py-12 md:py-20 flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
              [ {s.num} ]
            </span>
            <h2 className="font-display uppercase tracking-brutal leading-[0.9] text-4xl md:text-6xl lg:text-7xl mb-8">
              {s.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-8 max-w-prose">
              {s.blurb}
            </p>
            <ul className="border-2 border-black mb-8">
              {s.deliverables.map((d, i) => (
                <li
                  key={d}
                  className="flex items-baseline gap-4 border-b border-black/15 last:border-b-0 px-4 md:px-5 py-3 md:py-4 font-mono text-xs uppercase tracking-[0.18em]"
                >
                  <span className="text-[#FF3B00] font-bold w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-black normal-case font-sans text-sm tracking-normal">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="self-start inline-flex items-center gap-3 bg-black text-white border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] transition-colors"
              data-testid={`service-cta-${s.num}`}
            >
              Brief Us On Your Project <span className="text-base">→</span>
            </Link>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  {
    code: "W/01",
    title: "Bhiwadi Warehouse · 18,000 sqft",
    sector: "Logistics Shed",
    year: "2024",
    note: "Color-coated profile roof + structural columns. Cyclone-rated to 180 km/h.",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "lg:col-span-8 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
  },
  {
    code: "W/02",
    title: "Roller Mill Overhaul",
    sector: "Machinery Rebuild",
    year: "2024",
    note: "Full strip-down, bearing replacement, recommissioning in 11 days.",
    img: "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    size: "lg:col-span-4 aspect-[4/3]",
  },
  {
    code: "W/03",
    title: "MIA Custom Gate",
    sector: "Bespoke Fabrication",
    year: "2023",
    note: "4.2m powder-coated MS gate with internal counterweight mechanism.",
    img: "https://images.unsplash.com/photo-1578922427288-a47338083a57?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    size: "lg:col-span-4 aspect-[4/3]",
  },
  {
    code: "W/04",
    title: "Mezzanine Floor · Auto Parts Co.",
    sector: "Structural",
    year: "2023",
    note: "2-tier mezzanine, 1.5 ton/sqm load rating, modular bolted assembly.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    size: "lg:col-span-6 aspect-[4/3]",
  },
  {
    code: "W/05",
    title: "Industrial Railing Run · 240m",
    sector: "Safety Fabrication",
    year: "2023",
    note: "OSHA-compliant safety railing along factory walkway and mezzanine edge.",
    img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    size: "lg:col-span-6 aspect-[4/3]",
  },
];

export default function ProjectsPage() {
  return (
    <div data-testid="projects-page" className="bg-[#F4F4F0] bg-grain min-h-screen">
      <header className="border-b-2 border-black bg-white">
        <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
            Section / Works
          </div>
          <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
            Selected projects · 2023 – 2024
          </div>
          <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
            05 entries
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
            [ Case files ]
          </p>
          <h1 className="font-display uppercase tracking-brutal leading-[0.82] text-6xl md:text-8xl lg:text-[10rem]">
            Field
            <br />
            <span className="text-outline">Notes.</span>
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-px bg-black border-b-2 border-black">
        {works.map((w, i) => (
          <motion.article
            key={w.code}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className={`col-span-12 ${w.size} bg-white group relative overflow-hidden cursor-pointer`}
          >
            <div className="relative h-full">
              <Image
                src={w.img}
                alt={w.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em] text-white">
                <span className="bg-black px-2 py-1">{w.code}</span>
                <span className="bg-white text-black px-2 py-1">{w.year}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-black p-4 md:p-6 translate-y-[calc(100%-72px)] group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF3B00] mb-2">
                  {w.sector}
                </p>
                <h3 className="font-display uppercase tracking-brutal text-xl md:text-2xl leading-[0.95] mb-3">
                  {w.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {w.note}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

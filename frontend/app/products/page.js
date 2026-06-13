"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const catalog = [
  {
    code: "M/01",
    title: "Roofing Sheets",
    sub: "Profile & Plain",
    desc: "Color-coated and galvanized sheets for industrial sheds, warehouses and factory roofing.",
    specs: [
      ["Material", "GI / GP / Color"],
      ["Thickness", "0.30 – 0.80 mm"],
      ["Length", "Cut-to-size"],
      ["Finish", "Polyester / PVDF"],
    ],
    img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    code: "M/02",
    title: "MS Pipes & Tubes",
    sub: "Square · Round · Rectangular",
    desc: "Hollow sections for structural support, fabrication and load-bearing applications.",
    specs: [
      ["Section", "Sq / Rd / Rect"],
      ["Thickness", "1.6 – 6.0 mm"],
      ["Grade", "IS 1239 / IS 3589"],
      ["Length", "6 – 12 m"],
    ],
    img: "/logos/ms-pipe-in-lucknow.jpg",
  },
  {
    code: "M/03",
    title: "Structural Steel",
    sub: "Beams · Channels · Angles",
    desc: "Heavy-duty I-beams, ISMC channels and angles for factory construction and frames.",
    specs: [
      ["Type", "ISMB / ISMC / Angle"],
      ["Size", "75 – 600 mm"],
      ["Grade", "E250 / Fe410"],
      ["Length", "Cut on order"],
    ],
    img: "/logos/STRUCTURE-STEELBEAMS-CHANNELS-ANGLE-IPE.jpg",
  },
  {
    code: "M/04",
    title: "Industrial Hardware",
    sub: "Consumables · Fasteners",
    desc: "Welding rods, cutting wheels, nuts, bolts and fasteners — workshop-tested brands only.",
    specs: [
      ["Welding", "E6013 / E7018"],
      ["Cutting", "4″ / 7″ wheels"],
      ["Fasteners", "Hex / Allen / Stud"],
      ["Brands", "Esab · Bosch · TVS"],
    ],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
];

export default function ProductsPage() {
  return (
    <div data-testid="products-page" className="bg-white">
      {/* Page header */}
      <header className="border-b-2 border-black bg-[#F4F4F0] bg-grain">
        <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
            Section / Catalog
          </div>
          <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
            04 material categories · stocked & cut on request
          </div>
          <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
            Rev. 2026
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
            [ Catalog ] · KEW/MAT
          </p>
          <h1 className="font-display uppercase tracking-brutal leading-[0.82] text-6xl md:text-8xl lg:text-[10rem]">
            Raw
            <br />
            <span className="text-outline">Material.</span>
          </h1>
        </div>
      </header>

      {/* Catalog rows */}
      <div className="border-b-2 border-black">
        {catalog.map((p, idx) => (
          <motion.div
            key={p.code}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            data-testid={`catalog-row-${p.code}`}
            className={`grid grid-cols-12 border-b border-black/15 last:border-b-0 ${
              idx % 2 === 1 ? "lg:[&>.img]:order-2" : ""
            }`}
          >
            {/* Image block */}
            <div className="img col-span-12 lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-black border-b lg:border-b-0 lg:border-r border-black overflow-hidden group">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white">
                <span className="bg-[#FF3B00] px-2 py-1">{p.code}</span>
                <span className="border border-white/40 px-2 py-1 backdrop-blur-sm">
                  In Stock
                </span>
              </div>
            </div>

            {/* Text + specs */}
            <div className="col-span-12 lg:col-span-7 px-4 md:px-8 lg:px-12 py-10 md:py-16 grid grid-cols-12 gap-6 md:gap-8">
              <div className="col-span-12 md:col-span-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-3">
                  {p.sub}
                </p>
                <h2 className="font-display uppercase tracking-brutal leading-[0.9] text-4xl md:text-5xl lg:text-6xl mb-6">
                  {p.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A] max-w-prose mb-8">
                  {p.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-black text-white border-2 border-black px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] transition-colors"
                  data-testid={`catalog-quote-${p.code}`}
                >
                  Request Quote <span className="text-base">→</span>
                </Link>
              </div>

              {/* Spec table */}
              <div className="col-span-12 md:col-span-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A] mb-3">
                  Spec Sheet
                </p>
                <table className="w-full border-2 border-black font-mono text-xs">
                  <tbody>
                    {p.specs.map(([k, v]) => (
                      <tr key={k} className="border-b border-black/15 last:border-b-0">
                        <td className="px-3 py-2.5 uppercase tracking-[0.15em] text-[#4A4A4A] border-r border-black/15 w-[45%]">
                          {k}
                        </td>
                        <td className="px-3 py-2.5 text-black font-bold normal-case text-sm tracking-normal font-sans">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

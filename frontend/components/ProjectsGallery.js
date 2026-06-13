"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "P/01",
    title: "Bhiwadi Warehouse Roof",
    sector: "Logistics",
    year: "2024",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    num: "P/02",
    title: "Roller Mill Overhaul",
    sector: "Machinery",
    year: "2024",
    img: "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    span: "lg:col-span-5",
  },
  {
    num: "P/03",
    title: "Custom Gate · MIA Plot 491",
    sector: "Fabrication",
    year: "2023",
    img: "https://images.unsplash.com/photo-1578922427288-a47338083a57?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    span: "lg:col-span-5",
  },
];

export default function ProjectsGallery() {
  return (
    <section
      data-testid="projects-gallery"
      className="border-b-2 border-black bg-[#F4F4F0] bg-grain"
    >
      <div className="grid grid-cols-12 border-b border-black/15">
        <div className="col-span-12 md:col-span-7 border-r-0 md:border-r border-black/15 px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
            [ 04 ] · Selected Works
          </p>
          <h2 className="font-display uppercase tracking-brutal leading-[0.85] text-5xl md:text-7xl lg:text-8xl">
            Steel That
            <br />
            Stays Built.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-5 px-4 md:px-8 lg:px-12 py-8 md:py-12 flex flex-col justify-end">
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-6 max-w-prose">
            A handful of recent jobs from the last twelve months — warehouse
            sheds, mill rebuilds, custom gates. Same hands, same workshop, no
            outsourcing.
          </p>
          <Link
            href="/projects"
            data-testid="projects-cta"
            className="self-start inline-flex items-center gap-3 bg-white border-2 border-black px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover-brutal"
          >
            All Case Files <span className="text-base">↗</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-px bg-black">
        {projects.map((p, i) => (
          <motion.article
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`col-span-12 ${p.span} bg-white relative group cursor-pointer overflow-hidden`}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[440px] overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors" />
              {/* Top label */}
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white drop-shadow-lg">
                <span className="bg-black px-2 py-1">{p.num}</span>
                <span className="bg-white text-black px-2 py-1">{p.year}</span>
              </div>
              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-black p-4 md:p-6 flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF3B00] mb-2">
                    {p.sector}
                  </p>
                  <h3 className="font-display uppercase tracking-brutal text-xl md:text-2xl leading-[0.95]">
                    {p.title}
                  </h3>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View <span className="text-base">↗</span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

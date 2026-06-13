"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const milestones = [
  ["2007", "Founded by Sh. Kapoor in MIA Alwar with a single lathe."],
  ["2012", "Expanded into structural welding and shed fabrication."],
  ["2017", "Tenth-year jubilee · first machinery overhaul contract."],
  ["2021", "Long-term supply contracts with rolling mills."],
  ["2024", "120+ projects delivered · still family-run, still in MIA."],
];

const principles = [
  {
    num: "P/01",
    title: "Tolerance over Speed",
    body: "If it has to be done over, it costs everyone more. We measure twice.",
  },
  {
    num: "P/02",
    title: "Honest Materials",
    body: "We buy from named mills only. No grey-market steel passes our floor.",
  },
  {
    num: "P/03",
    title: "Same Hands",
    body: "The person who quotes your job is the person who runs the lathe.",
  },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - siteConfig.yearFounded;
  return (
    <div data-testid="about-page" className="bg-white">
      {/* Header */}
      <header className="border-b-2 border-black bg-white">
        <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
            Section / Studio
          </div>
          <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
            Family-run since 2007 · MIA Alwar
          </div>
          <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
            KEW/STD
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 border-r-0 lg:border-r-2 border-black px-4 md:px-8 lg:px-12 py-14 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
              [ About ]
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display uppercase tracking-brutal leading-[0.82] text-6xl md:text-8xl lg:text-[9rem]"
            >
              A small
              <br />
              workshop.
              <br />
              <span className="text-outline">A long memory.</span>
            </motion.h1>
            <p className="mt-10 md:mt-14 text-lg md:text-xl leading-relaxed text-[#4A4A4A] max-w-prose">
              {siteConfig.name} is not a contractor or a factory. It is a
              workshop — the kind that runs on lathes that have been there
              longer than the people, and people who have been there longer
              than the buildings.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 relative aspect-square lg:aspect-auto lg:min-h-[640px] bg-black overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85"
              alt="Workshop floor"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale contrast-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white">
              <span className="bg-[#FF3B00] px-2 py-1">EST. 2007</span>
              <span className="border border-white/40 px-2 py-1 backdrop-blur-sm">
                G-491 · MIA Alwar
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Giant year stat */}
      <section className="border-b-2 border-black bg-[#FF3B00] text-black relative overflow-hidden">
        <div className="grid grid-cols-12 relative z-10">
          <div className="col-span-12 lg:col-span-7 border-r-0 lg:border-r-2 border-black px-4 md:px-8 lg:px-12 py-14 md:py-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              [ Continuity ]
            </p>
            <h2 className="font-display uppercase tracking-brutal leading-[0.78] text-[28vw] md:text-[20vw] lg:text-[18vw]">
              <span className="text-outline-white">{years}</span>
              <sup className="font-mono text-3xl md:text-5xl align-top tracking-[0.2em] ml-2">
                Yrs
              </sup>
            </h2>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] mt-6 max-w-xl">
              In the same workshop, in the same city, with the same family at
              the centre of it.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-black text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
              [ Mission ]
            </p>
            <h3 className="font-display uppercase tracking-brutal leading-[0.9] text-3xl md:text-5xl">
              To be the
              <br />
              backbone of
              <br />
              local industry.
            </h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mt-8">
              When a line goes down, when a shed has to be up by Diwali, when a
              roller breaks before a shift change — there should be someone
              within ninety kilometres who can fix it. That someone is us.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b-2 border-black grid grid-cols-12 gap-px bg-black">
        {principles.map((p) => (
          <div
            key={p.num}
            className="col-span-12 md:col-span-4 bg-white p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[300px] hover:bg-black hover:text-white transition-colors group"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00]">
              {p.num}
            </span>
            <h3 className="font-display uppercase tracking-brutal text-3xl md:text-4xl leading-[0.95] mt-6">
              {p.title}
            </h3>
            <p className="text-sm md:text-base text-[#4A4A4A] group-hover:text-white/70 leading-relaxed mt-6">
              {p.body}
            </p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="border-b-2 border-black bg-[#F4F4F0] bg-grain">
        <div className="px-4 md:px-8 lg:px-12 py-14 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
            [ Timeline ]
          </p>
          <h2 className="font-display uppercase tracking-brutal leading-[0.85] text-4xl md:text-6xl lg:text-7xl mb-12">
            From One Lathe.
          </h2>
          <div className="border-2 border-black bg-white">
            {milestones.map(([year, note], i) => (
              <div
                key={year}
                className="grid grid-cols-12 border-b border-black/15 last:border-b-0 items-center"
              >
                <div className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl tracking-brutal px-4 md:px-8 py-5 md:py-8 border-r border-black/15">
                  {year}
                </div>
                <div className="col-span-7 md:col-span-9 px-4 md:px-8 py-5 md:py-8 text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                  {note}
                </div>
                <div className="col-span-2 md:col-span-1 font-mono text-xs uppercase tracking-[0.25em] text-[#FF3B00] text-right pr-4 md:pr-8">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white px-4 md:px-8 lg:px-12 py-14 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b-2 border-black">
        <h2 className="font-display uppercase tracking-brutal leading-[0.9] text-4xl md:text-6xl lg:text-7xl">
          Come visit
          <br />
          the floor.
        </h2>
        <Link
          href="/contact"
          data-testid="about-cta-contact"
          className="self-start inline-flex items-center gap-3 bg-[#FF3B00] text-white border-2 border-white px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors"
        >
          Plan a Visit <span className="text-base">→</span>
        </Link>
      </section>
    </div>
  );
}

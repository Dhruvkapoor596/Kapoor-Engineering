"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  FADE_UP_HIDDEN,
  FADE_UP_SHOW,
  VIEWPORT_ONCE_30,
  TRANSITION_SMOOTH_07,
} from "@/lib/motion";

const STATS = [
  { num: "01", k: "Established", v: "2007" },
  { num: "02", k: "Workshop", v: "Alwar, IN" },
  { num: "03", k: "Projects", v: "120+" },
  { num: "04", k: "Capabilities", v: "Iron · Steel · Repair" },
];

export default function AboutSnippet() {
  const years = new Date().getFullYear() - siteConfig.yearFounded;
  return (
    <section
      data-testid="about-snippet"
      className="border-b-2 border-black bg-white"
    >
      <div className="grid grid-cols-12">
        {/* Left: giant 19+ */}
        <div className="col-span-12 lg:col-span-5 border-r-0 lg:border-r-2 border-black p-6 md:p-10 lg:p-14 flex flex-col justify-between bg-[#F4F4F0] relative overflow-hidden">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A] mb-4">
            [ 02 ] · Studio Notes
          </p>

          <motion.div
            initial={FADE_UP_HIDDEN}
            whileInView={FADE_UP_SHOW}
            viewport={VIEWPORT_ONCE_30}
            transition={TRANSITION_SMOOTH_07}
            className="relative"
          >
            <h2 className="font-display uppercase leading-[0.82] tracking-brutal text-[18vw] md:text-[12vw] lg:text-[14vw] -mb-6">
              <span className="text-outline">{years}</span>
              <sup className="font-mono text-2xl md:text-4xl text-[#FF3B00] align-top tracking-[0.2em] ml-2">
                +
              </sup>
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.25em] mt-6">
              Years &nbsp;/&nbsp; Continuous Operation
            </p>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-px bg-black border border-black">
            {STATS.map((s) => (
              <div
                key={s.num}
                className="bg-[#F4F4F0] p-4 md:p-5 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                <div className="text-[#FF3B00] mb-2">{s.num}</div>
                <div className="text-[#4A4A4A] mb-1">{s.k}</div>
                <div className="text-black font-bold normal-case text-sm tracking-normal font-sans">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: prose */}
        <div className="col-span-12 lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-between">
          <div>
            <h3 className="font-display uppercase tracking-brutal leading-[0.9] text-4xl md:text-6xl lg:text-7xl max-w-[14ch] mb-10 md:mb-14">
              Built on Iron.
              <br />
              Driven by{" "}
              <span className="bg-[#FF3B00] text-white px-2 md:px-4 inline-block leading-[0.95]">
                Precision.
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]">
                We are not a tech company. We are not a fancy contractor. We
                are a workshop — fire, lathe, anvil, and 19 years of stubborn
                attention to tolerance.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]">
                From the rolling mills of MIA Alwar to the warehouse sheds of
                Bhiwadi, our work supports a quiet network of factories that
                run because something here was built right.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              data-testid="about-snippet-cta"
              className="group inline-flex items-center gap-3 bg-black text-white border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] transition-colors"
            >
              Inside the Studio
              <span className="text-base">↗</span>
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A]">
              · Founded by Sh. Kapoor &nbsp;/&nbsp; Family-Run
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

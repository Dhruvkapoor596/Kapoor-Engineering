"use client";
import Marquee from "react-fast-marquee";

const items = [
  "Precision Machining",
  "Heavy Fabrication",
  "Structural Steel",
  "Machinery Overhaul",
  "MS Pipes & Tubes",
  "Roofing Sheets",
  "Custom Welding",
  "Industrial Hardware",
];

export default function MarqueeStrip() {
  return (
    <section
      data-testid="marquee-strip"
      className="border-y-2 border-black bg-[#FF3B00] text-black overflow-hidden"
    >
      <Marquee
        speed={70}
        gradient={false}
        autoFill
        pauseOnHover={false}
        className="py-4 md:py-5"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl uppercase tracking-brutal mx-6 md:mx-10 inline-flex items-center gap-6 md:gap-10"
          >
            {item}
            <span className="text-white text-2xl md:text-4xl">✱</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

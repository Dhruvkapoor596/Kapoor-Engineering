"use client";
import Marquee from "react-fast-marquee";

const MARQUEE_ITEMS = [
  { id: "precision-machining", label: "Precision Machining" },
  { id: "heavy-fabrication", label: "Heavy Fabrication" },
  { id: "structural-steel", label: "Structural Steel" },
  { id: "machinery-overhaul", label: "Machinery Overhaul" },
  { id: "ms-pipes-tubes", label: "MS Pipes & Tubes" },
  { id: "roofing-sheets", label: "Roofing Sheets" },
  { id: "custom-welding", label: "Custom Welding" },
  { id: "industrial-hardware", label: "Industrial Hardware" },
];

const MARQUEE_SPEED = 70;

export default function MarqueeStrip() {
  return (
    <section
      data-testid="marquee-strip"
      className="border-y-2 border-black bg-[#FF3B00] text-black overflow-hidden"
    >
      <Marquee
        speed={MARQUEE_SPEED}
        gradient={false}
        autoFill
        pauseOnHover={false}
        className="py-4 md:py-5"
      >
        {MARQUEE_ITEMS.map((item) => (
          <span
            key={item.id}
            className="font-display text-3xl md:text-5xl uppercase tracking-brutal mx-6 md:mx-10 inline-flex items-center gap-6 md:gap-10"
          >
            {item.label}
            <span className="text-white text-2xl md:text-4xl">✱</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

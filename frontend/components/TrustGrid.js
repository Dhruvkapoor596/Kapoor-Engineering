"use client";
import { motion } from "framer-motion";

const clients = [
  "RPG Steel",
  "DSC Industries",
  "MIA Fabricators",
  "Bhiwadi Mills",
  "Northbrook Ltd.",
  "Alwar Auto Parts",
  "Iron Forge Co.",
  "Rajputana Rolling",
];

export default function TrustGrid() {
  return (
    <section
      data-testid="trust-grid"
      className="border-b-2 border-black bg-white"
    >
      <div className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-12 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
              [ 05 ] · Trust Index
            </p>
            <h2 className="font-display uppercase tracking-brutal leading-[0.9] text-4xl md:text-6xl">
              Operators who
              <br />
              keep coming back.
            </h2>
          </div>
          <div className="hidden md:block col-span-4 text-right font-mono text-xs uppercase tracking-[0.25em] text-[#4A4A4A]">
            08 long-term accounts
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-y-2 border-black">
        {clients.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-white p-6 md:p-10 flex flex-col justify-between min-h-[140px] md:min-h-[180px] group hover:bg-black transition-colors cursor-default"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] group-hover:text-[#FF3B00] transition-colors">
              C/{String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display uppercase tracking-brutal text-xl md:text-2xl leading-[0.95] group-hover:text-white transition-colors">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

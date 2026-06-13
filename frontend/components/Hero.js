"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticLink from "@/components/motion/MagneticLink";

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax — image moves a touch as user scrolls
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1]);

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden pt-20"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg, scale: scaleBg }}
      >
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Precision Engineering"
          fill
          sizes="100vw"
          priority
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center space-x-2 mb-8 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse"></span>
          <span className="text-slate-300 text-xs font-medium tracking-[0.2em] uppercase">
            Est. 2007 • Rajasthan, India
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]"
        >
          Innovating Precision <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
            For Your Industry
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          From heavy metal fabrication to intelligent machinery repair, we
          deliver powerful engineering solutions designed for scale and
          durability.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticLink
            href="/products"
            data-testid="hero-explore-cta"
            className="group relative bg-[#EAB308] text-black text-sm font-bold px-8 py-4 rounded-full flex items-center justify-center transition-shadow hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] uppercase tracking-widest"
          >
            Explore Solutions
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </MagneticLink>
          <MagneticLink
            href="/contact"
            data-testid="hero-quote-cta"
            className="text-white text-sm font-bold px-8 py-4 rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-widest"
          >
            Get a Quote
          </MagneticLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

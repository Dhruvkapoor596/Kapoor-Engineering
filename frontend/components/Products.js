"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageX } from "lucide-react";
import { products } from "@/data/products";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function Products() {
  return (
    <section className="py-32 bg-[#050505] relative border-b border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#EAB308]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Core Materials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-6">
            Industrial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
              Supply
            </span>
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6" staggerChildren={0.1}>
          {products.map((product) => (
            <StaggerItem
              key={product.id}
              className="group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-[#EAB308]/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ${
                    product.inStock
                      ? "group-hover:scale-105 opacity-60 group-hover:opacity-100"
                      : "grayscale opacity-30"
                  }`}
                />
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between relative z-20 -mt-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    {product.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                    {product.description}
                  </p>
                </div>

                {product.inStock ? (
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest group-hover:text-[#EAB308] transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center text-slate-600 text-xs font-bold uppercase tracking-widest cursor-not-allowed">
                    <PackageX className="w-4 h-4 mr-2" /> Out of Stock
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

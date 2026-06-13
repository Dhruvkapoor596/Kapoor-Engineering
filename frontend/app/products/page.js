"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div data-testid="products-page" className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Catalog · KEW/MAT
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Raw <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
              Material.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Four core categories — stocked, cut on request, and delivered
            across the Alwar &ndash; Bhiwadi industrial belt.
          </p>
        </div>

        {/* Catalog rows */}
        <div className="space-y-8 md:space-y-12">
          {products.map((p, idx) => (
            <article
              key={p.id}
              data-testid={`catalog-row-${p.id}`}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-[#EAB308]/30 transition-colors"
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 relative h-72 md:h-96 lg:h-auto lg:min-h-[440px] overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#EAB308] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {p.sub}
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  In Stock
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                    {p.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-prose mb-8">
                    {p.description}
                  </p>

                  {/* Spec table */}
                  <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/10 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                        Spec Sheet
                      </span>
                      <span className="text-[10px] font-bold text-[#EAB308] tracking-[0.2em] uppercase">
                        Cut on order
                      </span>
                    </div>
                    <table className="w-full">
                      <tbody>
                        {p.specs.map(([k, v]) => (
                          <tr
                            key={k}
                            className="border-b border-white/5 last:border-b-0"
                          >
                            <td className="px-5 py-3 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase w-[45%]">
                              {k}
                            </td>
                            <td className="px-5 py-3 text-sm text-white font-light">
                              {v}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    data-testid={`catalog-quote-${p.id}`}
                    className="inline-flex items-center bg-[#EAB308] text-black text-xs font-bold px-6 py-3.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all uppercase tracking-widest"
                  >
                    Request Quote <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-20 bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              Need a custom spec?
            </h3>
            <p className="text-slate-400 font-light">
              We cut and supply to drawings — share your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black text-xs font-bold px-8 py-4 rounded-full hover:bg-[#EAB308] transition-colors uppercase tracking-widest"
          >
            Submit Drawings <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

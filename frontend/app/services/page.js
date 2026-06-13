"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Wrench, Shield, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

const ICONS = {
  settings: <Settings className="w-7 h-7 text-[#EAB308]" />,
  wrench: <Wrench className="w-7 h-7 text-[#EAB308]" />,
  shield: <Shield className="w-7 h-7 text-[#EAB308]" />,
};

export default function ServicesPage() {
  return (
    <div data-testid="services-page" className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Capabilities · KEW/CAP
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
              Trade.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Three disciplines, one workshop, zero outsourcing. The same hands
            quote, cut, weld and deliver.
          </p>
        </div>

        {/* Deep-dive sections */}
        <div className="space-y-8 md:space-y-12">
          {services.map((svc, idx) => (
            <section
              key={svc.id}
              data-testid={`service-section-${svc.id}`}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-[#EAB308]/30 transition-colors"
            >
              <div
                className={`lg:col-span-6 relative h-72 md:h-96 lg:h-auto lg:min-h-[480px] overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  SVC/{svc.num}
                </div>
              </div>

              <div className="lg:col-span-6 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10">
                  {ICONS[svc.icon]}
                </div>
                <p className="text-[10px] font-bold text-[#EAB308] tracking-[0.3em] uppercase mb-3">
                  [ {svc.num} ]
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                  {svc.title}
                </h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-prose">
                  {svc.blurb}
                </p>

                {/* Deliverables list */}
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-3">
                    {svc.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-slate-300 text-sm font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#EAB308] mt-0.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  data-testid={`service-cta-${svc.id}`}
                  className="self-start inline-flex items-center bg-[#EAB308] text-black text-xs font-bold px-6 py-3.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all uppercase tracking-widest"
                >
                  Brief Us On Your Project <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

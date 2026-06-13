"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { principles, milestones } from "@/data/services";

export default function AboutPage() {
  const years = new Date().getFullYear() - siteConfig.yearFounded;

  return (
    <div
      data-testid="about-page"
      className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-20 mt-10">
          <div className="md:col-span-1">
            <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
              Based In
              <br />
              <span className="text-white text-sm mt-2 block tracking-widest">
                Rajasthan, India
              </span>
            </p>
          </div>
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Precision is not just a skill—
              <br className="hidden md:block" />
              it is a tradition.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
              Since our founding in {siteConfig.yearFounded} in the heart of
              Alwar, {siteConfig.name} has been at the forefront of machining
              &amp; fabrication solutions. We engineer structures and repair
              machinery that push the boundaries of scale and durability.
            </p>
          </div>
        </div>

        {/* Bento stat row (existing V1 design) */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <div className="bg-[#EAB308] p-8 md:p-10 rounded-3xl flex flex-col justify-between h-[380px] transform hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-6xl md:text-7xl font-black text-black tracking-tighter leading-none">
              {years}+
              <br />
              <span className="text-4xl md:text-5xl text-black/90 tracking-tight">
                Years
              </span>
            </h3>
            <div>
              <h4 className="text-lg font-bold text-black mb-2 tracking-wide">
                Of Excellence
              </h4>
              <p className="text-black/80 font-medium text-sm">
                Precision-crafted by a dedicated team of seasoned machinists
                and fabricators.
              </p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden relative border border-white/10 h-[380px] group">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
              alt="Heavy Duty Welding"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 w-full">
              <h4 className="text-lg font-bold text-white mb-2 tracking-wide">
                Built For Heavy-Duty
              </h4>
              <p className="text-slate-400 font-light text-sm">
                Engineering structures built to withstand the toughest
                industrial environments.
              </p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center hover:border-white/30 transition-colors h-[380px]">
            <div className="w-20 h-20 mb-6 relative">
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 border border-[#EAB308]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <ShieldCheck className="w-8 h-8 text-[#EAB308] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 tracking-wide">
              Uncompromising Quality
            </h4>
            <p className="text-slate-400 font-light text-sm">
              Strict quality control and testing on every single iron supply
              and fabrication project.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              To Be The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
                Backbone
              </span>{" "}
              Of Local Industry.
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              When a factory line goes down, or a new shed needs to be built
              fast, businesses across the state rely on us. We combine raw
              material supply with expert machining capabilities under one
              roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl hover:border-white/20 transition-colors">
              <Target className="w-8 h-8 text-[#EAB308] mb-4" />
              <h4 className="text-white font-bold mb-2">Precision First</h4>
              <p className="text-slate-500 text-sm font-light">
                Sub-millimeter accuracy on all lathe and shaper operations.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl hover:border-white/20 transition-colors">
              <Settings className="w-8 h-8 text-[#EAB308] mb-4" />
              <h4 className="text-white font-bold mb-2">Turnkey Solutions</h4>
              <p className="text-slate-500 text-sm font-light">
                From raw iron procurement to final installation and welding.
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-32">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Principles
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-12">
            How we run the floor.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.num}
                data-testid={`principle-${p.num.replace("/", "-")}`}
                className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 hover:border-[#EAB308]/30 transition-colors flex flex-col min-h-[280px]"
              >
                <p className="text-[10px] font-bold text-[#EAB308] tracking-[0.3em] uppercase mb-6">
                  {p.num}
                </p>
                <h3 className="text-2xl font-bold text-white tracking-wide mb-4">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-32">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-12">
            From <span className="text-[#EAB308]">one lathe.</span>
          </h2>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
            {milestones.map(([year, note], i) => (
              <div
                key={year}
                className="grid grid-cols-12 items-center border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-3 md:col-span-2 px-6 md:px-10 py-6 md:py-8 border-r border-white/5">
                  <span className="text-3xl md:text-5xl font-black text-[#EAB308] tracking-tighter">
                    {year}
                  </span>
                </div>
                <div className="col-span-7 md:col-span-9 px-4 md:px-10 py-6 md:py-8 text-sm md:text-base text-slate-300 font-light leading-relaxed">
                  {note}
                </div>
                <div className="col-span-2 md:col-span-1 pr-4 md:pr-10 text-right">
                  <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              Want to visit the workshop?
            </h3>
            <p className="text-slate-400 font-light">
              Walk-ins welcome Mon–Sat. Drop us a line first.
            </p>
          </div>
          <Link
            href="/contact"
            data-testid="about-cta-contact"
            className="inline-flex items-center bg-[#EAB308] text-black text-xs font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all uppercase tracking-widest"
          >
            Plan a Visit <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

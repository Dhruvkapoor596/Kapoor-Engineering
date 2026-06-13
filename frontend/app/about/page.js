import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Settings, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Founded in 2007 in Alwar, Kapoor Engineering Works is a trusted partner for heavy industry — precision machining, fabrication, and iron supply.",
};

export default function About() {
  const yearsActive = new Date().getFullYear() - siteConfig.yearFounded;

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Precision is not just a skill—
              <br className="hidden md:block" />
              it is a tradition.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
              Since our founding in {siteConfig.yearFounded} in the heart of
              Alwar, {siteConfig.name} has been at the forefront of machining
              &amp; fabrication solutions. We engineer structures and repair
              machinery that push the boundaries of scale and durability.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <div className="bg-[#EAB308] p-8 md:p-10 rounded-3xl flex flex-col justify-between h-[380px] transform hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-6xl md:text-7xl font-black text-black tracking-tighter leading-none">
              {yearsActive}+
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

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                Our Mission
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              To Be The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
                Backbone
              </span>{" "}
              Of Local Industry.
            </h3>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
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

        {/* CTA strip */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              Have a project in mind?
            </h3>
            <p className="text-slate-400 font-light">
              Let&apos;s talk about timelines, materials and budget.
            </p>
          </div>
          <Link
            href="/contact"
            data-testid="about-cta-contact"
            className="inline-flex items-center bg-[#EAB308] text-black text-xs font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform uppercase tracking-widest"
          >
            Get In Touch <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

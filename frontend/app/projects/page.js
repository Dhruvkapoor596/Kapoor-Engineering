"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, clients } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div data-testid="projects-page" className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-1/2 h-1/2 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Case Files · KEW/WORKS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Field <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
              Notes.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Selected projects from the last twelve months. Same hands, same
            workshop, no outsourcing.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              data-testid={`case-study-${p.id}`}
              className="group cursor-pointer bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-[#EAB308]/30 hover:bg-white/[0.02] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {p.year}
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-[10px] font-bold text-[#EAB308] tracking-[0.2em] uppercase mb-3">
                  {p.sector}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-[#EAB308] transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Trust grid */}
        <div className="mt-24 bg-[#0a0a0a] rounded-3xl border border-white/10 p-10 md:p-14">
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-center">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8">
            {clients.map((name) => (
              <span
                key={name}
                className="text-lg md:text-2xl font-black text-white/30 hover:text-white transition-colors duration-300 cursor-default uppercase tracking-widest"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

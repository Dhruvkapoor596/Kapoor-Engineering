"use client";
import Image from "next/image";
import { projects, clients } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function Projects() {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 mb-32" staggerChildren={0.12}>
          {projects.map((project) => (
            <StaggerItem key={project.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6 bg-[#0a0a0a] border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#EAB308] transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-12 text-center">
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-10">
            Trusted By Industry Leaders
          </p>
          <Stagger className="flex flex-wrap justify-center gap-10 md:gap-16 items-center" staggerChildren={0.06}>
            {clients.map((clientName, index) => (
              <StaggerItem
                key={index}
                y={12}
                className="text-xl md:text-2xl font-black text-white/30 hover:text-white transition-colors duration-300 cursor-default uppercase tracking-widest"
              >
                {clientName}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}

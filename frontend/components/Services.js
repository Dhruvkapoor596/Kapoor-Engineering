import { Settings, Shield, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: <Settings className="w-8 h-8 text-[#EAB308]" />, title: "Precision Machining", desc: "Advanced lathe and shaper operations for heavy industrial rollers and shafts." },
  { icon: <Wrench className="w-8 h-8 text-white" />, title: "Heavy Fabrication", desc: "Structural welding, industrial sheds, and custom iron frameworks built to scale." },
  { icon: <Shield className="w-8 h-8 text-white" />, title: "Machinery Overhaul", desc: "Complete restoration of hydraulic presses and gear systems to factory standards." }
];

export default function Services() {
  return (
    <section className="py-32 bg-[#050505] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-1 sticky top-32">
            <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">Robust <br/> Construction</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-8">Our commitment goes beyond supply. We engineer and repair the heavy machinery that keeps your factory floor moving.</p>
            <Link href="/services" className="inline-flex items-center bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-[#EAB308] transition-colors uppercase tracking-widest">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className={`bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors group ${index === 2 ? 'sm:col-span-2' : ''}`}>
                <div className="mb-8 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
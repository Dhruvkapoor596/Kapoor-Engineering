import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT: Text & Mission */}
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
              <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Forging The Future Of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">Heavy Industry.</span>
            </h2>
            
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-10">
              Founded in 2007 in Alwar, Rajasthan, Kapoor Engineering Works has grown from a local workshop into a trusted partner for large-scale manufacturing plants. We combine premium iron supply with high-precision machining to keep your operations running flawlessly.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-4 mb-10">
              {[
                'Military-Grade Precision Machining', 
                'End-to-End Heavy Metal Fabrication', 
                'Rapid Turnaround on Machinery Repair'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-light text-sm tracking-wide">
                  <CheckCircle2 className="w-5 h-5 text-[#EAB308] mr-4 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-flex items-center bg-[#EAB308] text-black text-xs font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all uppercase tracking-widest">
              Discover Our History <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT CONTENT: Cinematic Image & Floating Bento Box */}
          <div className="relative mt-10 lg:mt-0 px-4 sm:px-0">
            
            {/* Main Image */}
            <div className="relative h-[450px] sm:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80" 
                alt="Factory Floor" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" 
              />
              {/* Dark vignette to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stat Bento Box */}
            <div className="absolute -bottom-6 -left-2 sm:-left-12 bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md transform hover:-translate-y-2 transition-transform duration-500">
               <h3 className="text-5xl sm:text-6xl font-black text-[#EAB308] tracking-tighter mb-2">15+</h3>
               <p className="text-white text-sm font-bold uppercase tracking-widest">Years Experience</p>
               <div className="w-8 h-1 bg-white/10 mt-4 mb-3"></div>
               <p className="text-slate-500 text-xs font-light uppercase tracking-widest">Trusted Since 2007</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
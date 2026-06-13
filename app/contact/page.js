import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">Let us Connect</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            We are Thrilled To Hear <br />
            <span className="text-slate-500">From You.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-colors flex-grow">
              <MapPin className="w-8 h-8 text-[#EAB308] mb-6" />
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">Headquarters</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-8">G- 491 , Near M.I.A. Police Station<br/>Matasya Industral Area, ALwar, Rajasthan </p>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-300 font-light">+91 9414846109</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-300 font-light">Kapooreng149@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#0a0a0a] p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Full Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Company Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Email Address</label>
                  <input type="email" className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Phone</label>
                  <input type="tel" className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light" placeholder="+91..." />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Your Message</label>
                <textarea rows="4" className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#050505] accent-[#EAB308]" />
                  <span className="text-slate-400 text-sm font-light">I agree to privacy policy</span>
                </label>
                <button type="submit" className="w-full sm:w-auto bg-white text-black hover:bg-[#EAB308] font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-full transition-all flex items-center justify-center group">
                  Submit <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
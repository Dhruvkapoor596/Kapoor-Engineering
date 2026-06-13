import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logos/Kew-Logo-6.png" alt="KEW Logo" width={60} height={60} className="object-contain" />
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Specializing in high-precision machinery repair, heavy metal fabrication, and iron supply for industries.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Menu</h4>
            <ul className="space-y-4">
              {['Products', 'Services', 'Projects', 'About'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white text-sm font-light transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              {['Contact', 'Our History', 'Sales Network', 'Sustainability'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm font-light transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Top Categories</h4>
            <ul className="space-y-4">
              {['Roofing Sheets', 'Structural Steel', 'MS Pipes', 'Industrial Hardware'].map((item) => (
                <li key={item}><Link href="/products" className="text-slate-400 hover:text-white text-sm font-light transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-slate-500 text-xs font-light">&copy; {new Date().getFullYear()} Kapoor Engineering Works. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-slate-500 font-light">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-5%] left-0 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] font-black text-white tracking-tighter leading-none">KAPOOR</h1>
      </div>
    </footer>
  );
}
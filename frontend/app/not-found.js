import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#EAB308]/10 blur-[150px] pointer-events-none" />
      <div className="relative z-10 text-center max-w-xl">
        <p className="text-[#EAB308] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          Error 404
        </p>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8">
          We don&apos;t make
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-yellow-500">
            this part.
          </span>
        </h1>
        <p className="text-slate-400 font-light text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for has been moved, removed, or never
          existed. Let&apos;s get you back to solid ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            data-testid="notfound-home-btn"
            className="inline-flex items-center justify-center bg-[#EAB308] text-black text-xs font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform uppercase tracking-widest"
          >
            <Home className="mr-3 w-4 h-4" /> Back Home
          </Link>
          <Link
            href="/contact"
            data-testid="notfound-contact-btn"
            className="inline-flex items-center justify-center text-white text-xs font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest"
          >
            Contact Workshop <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

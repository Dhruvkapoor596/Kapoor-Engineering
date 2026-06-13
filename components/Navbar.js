"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Added for active link highlighting
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get the current URL

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Defined your specific link arrays here for cleaner mapping
  const desktopNavLinks = ['Home', 'Products', 'Services', 'Projects', 'About'];
  const mobileNavLinks = ['Home', 'Products', 'Services', 'Projects', 'About', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 top-0 pt-4 px-4 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
        <div className="flex justify-between items-center px-6 h-20">
          
          {/* LOGO SECTION - Kept your exact flex layout which forces it side-by-side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/logos/Kew-Logo-6.png" alt="KEW Logo" width={48} height={48} className="object-contain" />
              <div className="hidden sm:block">
                <span className="block text-xl font-roboto-slab font-black text-white tracking-widest">KAPOOR</span>
                <span className="block text-[9px] font-medium text-[#EAB308] tracking-[0.3em] uppercase">Engineering Works</span>
              </div>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-10">
            {desktopNavLinks.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isActive = pathname === href; // Check if we are on this page

              return (
                <Link 
                  key={item}
                  href={href} 
                  className={`text-xs font-semibold transition-all uppercase tracking-[0.15em] pb-1 border-b-2 ${
                    isActive 
                      ? 'text-[#EAB308] border-[#EAB308]' // Active state
                      : 'text-slate-300 border-transparent hover:text-white hover:border-white/30' // Inactive state
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* CONTACT BUTTON & MOBILE MENU TOGGLE */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:flex items-center justify-center bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-[#EAB308] hover:text-black transition-colors uppercase tracking-widest">
              Contact Us
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>
      
      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-2xl">
          <div className="space-y-6">
            {mobileNavLinks.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isActive = pathname === href;

              return (
                <Link 
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-widest ${
                    isActive ? 'text-[#EAB308]' : 'text-white hover:text-[#EAB308]'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
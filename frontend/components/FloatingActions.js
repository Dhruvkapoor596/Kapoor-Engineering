"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="floating-actions"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-3"
    >
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          data-testid="back-to-top-btn"
          className="w-12 h-12 bg-white border-2 border-black text-black flex items-center justify-center font-mono text-xs uppercase tracking-widest hover-brutal"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-floating-btn"
        className="group inline-flex items-center gap-3 bg-[#25D366] text-white border-2 border-black px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover-brutal"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.97-.94-.26-.1-.46-.14-.65.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17 0-.36-.02-.55-.02-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.03 3.1 4.92 4.34.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.34zM16.03 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.46-1.43a10.65 10.65 0 0 0 5.24 1.34h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.58-3.13z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

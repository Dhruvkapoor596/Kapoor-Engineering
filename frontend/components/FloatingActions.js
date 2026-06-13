"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3"
      data-testid="floating-actions"
    >
      {showTop && (
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          data-testid="back-to-top-btn"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-floating-btn"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.97-.94-.26-.1-.46-.14-.65.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17 0-.36-.02-.55-.02-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.03 3.1 4.92 4.34.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.34zM16.03 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.46-1.43a10.65 10.65 0 0 0 5.24 1.34h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.58-3.13zm6.34 17.04a8.83 8.83 0 0 1-6.34 2.62 8.86 8.86 0 0 1-4.52-1.24l-.32-.19-3.24.85.87-3.16-.21-.33a8.85 8.85 0 0 1-1.36-4.72c0-4.89 3.98-8.87 8.87-8.87 2.37 0 4.6.93 6.27 2.61a8.81 8.81 0 0 1 2.6 6.28c-.01 4.89-3.99 8.87-8.62 8.15z" />
        </svg>
      </a>
    </div>
  );
}

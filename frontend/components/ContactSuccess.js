"use client";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/site";

export default function ContactSuccess({ firstName, onReset }) {
  return (
    <div
      data-testid="contact-success-state"
      className="bg-[#FF3B00] text-white border-2 border-black p-8 md:p-12"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
        Status / OK · 200
      </p>
      <h3 className="font-display uppercase tracking-brutal leading-[0.85] text-4xl md:text-6xl mb-6">
        Enquiry
        <br />
        Received.
      </h3>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-prose">
        Thanks, <strong>{firstName}</strong>. Your message reached the workshop
        at <strong>{siteConfig.name}</strong>. We typically respond within one
        business day.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={telUrl}
          className="inline-flex items-center gap-3 bg-black text-white border-2 border-black px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors"
        >
          Call Now <span>☎</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black border-2 border-black px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover-brutal"
        >
          WhatsApp <span>→</span>
        </a>
        <button
          data-testid="contact-send-another"
          onClick={onReset}
          className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#FF3B00] transition-colors"
        >
          Send Another
        </button>
      </div>
    </div>
  );
}

import ContactForm from "@/components/ContactForm";
import { siteConfig, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

const mapsQuery = encodeURIComponent(
  `${siteConfig.name}, ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.name} — heavy industrial workshop in Alwar, Rajasthan.`,
};

export default function ContactPage() {
  return (
    <div data-testid="contact-page" className="bg-white">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
            Section / Despatch
          </div>
          <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
            Open channels · phone / email / WhatsApp / form
          </div>
          <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
            ● Live
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-4">
            [ Contact ] · 4 ways in
          </p>
          <h1 className="font-display uppercase tracking-brutal leading-[0.82] text-6xl md:text-8xl lg:text-[10rem]">
            Get in
            <br />
            <span className="text-outline">Touch.</span>
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-12 border-b-2 border-black">
        {/* Left: contact info + map */}
        <aside className="col-span-12 lg:col-span-5 border-r-0 lg:border-r-2 border-black">
          {/* Phone */}
          <a
            href={telUrl}
            data-testid="contact-phone-link"
            className="block border-b-2 border-black px-6 md:px-10 py-8 hover:bg-black hover:text-white transition-colors group"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-3">
              CH/01 · Telephone
            </p>
            <p className="font-display uppercase tracking-brutal text-3xl md:text-4xl leading-[0.95]">
              {siteConfig.phone}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] mt-3 opacity-60 group-hover:opacity-100">
              Tap to call ↗
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-cta"
            className="block border-b-2 border-black px-6 md:px-10 py-8 bg-[#25D366] text-white hover:bg-black transition-colors group"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
              CH/02 · Instant
            </p>
            <p className="font-display uppercase tracking-brutal text-3xl md:text-4xl leading-[0.95]">
              WhatsApp
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] mt-3 opacity-70 group-hover:opacity-100">
              Pre-filled greeting ↗
            </p>
          </a>

          {/* Email */}
          <a
            href={mailUrl}
            data-testid="contact-email-link"
            className="block border-b-2 border-black px-6 md:px-10 py-8 hover:bg-[#FF3B00] hover:text-white transition-colors group"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] group-hover:text-white mb-3">
              CH/03 · Email
            </p>
            <p className="font-sans text-lg md:text-xl leading-tight font-semibold break-all">
              {siteConfig.email}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] mt-3 opacity-60 group-hover:opacity-100">
              Open in your mail client ↗
            </p>
          </a>

          {/* Address + Maps embed */}
          <div className="border-b-2 border-black px-6 md:px-10 py-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-3">
              CH/04 · Workshop
            </p>
            <p className="font-display uppercase tracking-brutal text-2xl md:text-3xl leading-[0.95] mb-3">
              G-491 · MIA Alwar
            </p>
            <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">
              {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
              {siteConfig.address.city}, {siteConfig.address.state}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mb-5">
              Mon – Sat &nbsp;/&nbsp; 09:00 – 20:00 IST
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-maps-link"
              className="inline-flex items-center gap-3 border-2 border-black px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#FF3B00] hover:text-white transition-colors"
            >
              Directions ↗
            </a>
          </div>

          <div className="relative aspect-[4/3] bg-[#F4F4F0]">
            <iframe
              src={mapsEmbed}
              className="absolute inset-0 w-full h-full grayscale contrast-110"
              loading="lazy"
              title="Workshop location"
            />
            <div className="absolute top-3 left-3 bg-[#FF3B00] text-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] pointer-events-none">
              MAP/01
            </div>
          </div>
        </aside>

        {/* Right: form */}
        <div className="col-span-12 lg:col-span-7 bg-[#F4F4F0] bg-grain p-4 md:p-8 lg:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-3">
            [ FORM ] · Open enquiry
          </p>
          <h2 className="font-display uppercase tracking-brutal text-3xl md:text-5xl leading-[0.9] mb-8 md:mb-10">
            Tell us
            <br />
            what you need.
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

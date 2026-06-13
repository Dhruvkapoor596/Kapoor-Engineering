import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

const mapsQuery = encodeURIComponent(
  `${siteConfig.name}, ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for industrial repair, fabrication and iron supply enquiries in Alwar, Rajasthan.`,
};

export default function ContactPage() {
  return (
    <div
      data-testid="contact-page"
      className="min-h-screen bg-[#050505] pt-32 pb-20 relative"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EAB308]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
            <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Let us Connect
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            We are Thrilled To Hear <br />
            <span className="text-slate-500">From You.</span>
          </h1>
          <p className="text-slate-400 font-light max-w-2xl text-lg">
            Whether you need urgent machinery repair, a steel supply quote, or
            help planning a fabrication project — our team is ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT: 4 channels + map */}
          <aside className="lg:col-span-2 flex flex-col gap-4">
            {/* Headquarters + map */}
            <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden">
              <div className="p-8 md:p-10">
                <MapPin className="w-8 h-8 text-[#EAB308] mb-6" />
                <h3 className="text-xl font-bold text-white tracking-wide mb-2">
                  Workshop
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-maps-link"
                  className="inline-flex items-center text-[#EAB308] text-xs font-bold uppercase tracking-widest hover:text-yellow-300 transition-colors"
                >
                  Open in Google Maps →
                </a>

                <div className="space-y-5 pt-8 mt-8 border-t border-white/5">
                  <a
                    href={telUrl}
                    data-testid="contact-phone-link"
                    className="flex items-center space-x-4 group"
                  >
                    <Phone className="w-5 h-5 text-slate-500 group-hover:text-[#EAB308] transition-colors" />
                    <span className="text-slate-300 font-light group-hover:text-white transition-colors">
                      {siteConfig.phone}
                    </span>
                  </a>
                  <a
                    href={mailUrl}
                    data-testid="contact-email-link"
                    className="flex items-center space-x-4 group"
                  >
                    <Mail className="w-5 h-5 text-slate-500 group-hover:text-[#EAB308] transition-colors" />
                    <span className="text-slate-300 font-light group-hover:text-white transition-colors break-all">
                      {siteConfig.email}
                    </span>
                  </a>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-300 font-light">
                      {siteConfig.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded map */}
              <div className="relative aspect-[4/3] border-t border-white/5">
                <iframe
                  src={mapsEmbed}
                  className="absolute inset-0 w-full h-full opacity-80"
                  loading="lazy"
                  title="Workshop location"
                />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-cta"
              className="group flex items-center justify-between bg-[#25D366] text-white p-6 rounded-3xl hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-base">Quick chat on WhatsApp</p>
                  <p className="text-xs font-light opacity-80 mt-0.5">
                    Pre-filled greeting · usually replies under 1 hour
                  </p>
                </div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </aside>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3 bg-[#0a0a0a] p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

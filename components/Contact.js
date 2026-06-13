"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-sm font-black text-[#EA580C] uppercase tracking-widest mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Need a Repair or Quote?</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our workshop is always ready for urgent industrial repairs. Call us directly or visit our facility for a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <p className="text-slate-600">+91 9414846109</p>
                  <p className="text-sm text-slate-500">Mon-Sat, 9am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Workshop Location</p>
                  <p className="text-slate-600">Kapoor Engineering Works</p>
                  <p className="text-slate-600">G-491, Near Police Station MIA, Matasya Industrial Area (MIA), Alwar, Rajasthan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <p className="text-slate-600">kapooreng149@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-0 bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-0 bg-white" placeholder="+91..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-0 bg-white">
                  <option>Machinery Repair</option>
                  <option>Iron/Steel Supply</option>
                  <option>Custom Fabrication</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-0 bg-white" placeholder="Describe the issue..."></textarea>
              </div>

              <button className="w-full bg-[#0F172A] text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition shadow-lg">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
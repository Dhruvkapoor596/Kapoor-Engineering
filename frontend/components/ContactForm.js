"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

const services = [
  "Machinery Repair",
  "Iron / Steel Supply",
  "Custom Fabrication",
  "Structural Welding",
  "Other Inquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim())
      err.email = "Please provide either an email or phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      err.message = "Please share at least 10 characters describing your need.";
    if (!form.consent) err.consent = "Please accept the privacy notice.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // Frontend-only handler: open user's email client with a pre-filled message.
    // (Backend integration can be added later without changing the UI.)
    const subject = `New Enquiry from ${form.name} — ${form.service}`;
    const body =
      `Name: ${form.name}\n` +
      `Company: ${form.company || "—"}\n` +
      `Email: ${form.email || "—"}\n` +
      `Phone: ${form.phone || "—"}\n` +
      `Service: ${form.service}\n\n` +
      `Message:\n${form.message}`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Give a tiny delay so user sees the transition
    setTimeout(() => {
      window.location.href = mailto;
      setStatus("success");
    }, 400);
  };

  if (status === "success") {
    return (
      <div
        className="bg-[#0a0a0a] p-10 rounded-3xl border border-[#EAB308]/30 text-center"
        data-testid="contact-success-state"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#EAB308]" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
          Thank you, {form.name.split(" ")[0]}!
        </h3>
        <p className="text-slate-400 font-light max-w-md mx-auto mb-8">
          Your email client should now be open with your enquiry ready to send.
          If it didn&apos;t open, please reach us directly via the options below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={telUrl}
            className="bg-white text-black text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest hover:bg-[#EAB308] transition-colors"
          >
            Call Us
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
          <button
            onClick={() => {
              setForm({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: services[0],
                message: "",
                consent: false,
              });
              setStatus("idle");
            }}
            className="text-slate-300 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest border border-white/15 hover:border-white/40 transition-colors"
            data-testid="contact-send-another"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="space-y-7"
      data-testid="contact-form"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field
          id="full-name"
          label="Full Name"
          required
          error={errors.name}
          value={form.name}
          onChange={update("name")}
          placeholder="John Doe"
          testId="contact-input-name"
        />
        <Field
          id="company"
          label="Company Name"
          value={form.company}
          onChange={update("company")}
          placeholder="Acme Corp"
          testId="contact-input-company"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field
          id="email"
          label="Email Address"
          type="email"
          error={errors.email}
          value={form.email}
          onChange={update("email")}
          placeholder="john@example.com"
          testId="contact-input-email"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="+91..."
          testId="contact-input-phone"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
          Service Needed
        </label>
        <select
          value={form.service}
          onChange={update("service")}
          data-testid="contact-select-service"
          className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
        >
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#0a0a0a]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
          Your Message <span className="text-[#EAB308]">*</span>
        </label>
        <textarea
          rows="4"
          value={form.message}
          onChange={update("message")}
          data-testid="contact-input-message"
          className={`w-full bg-[#050505] border rounded-xl text-white px-6 py-4 focus:outline-none transition-colors font-light resize-none ${
            errors.message ? "border-red-500/60" : "border-white/10 focus:border-[#EAB308]"
          }`}
          placeholder="Describe the issue, materials needed, quantities, or service request..."
        />
        {errors.message && <ErrorLine text={errors.message} />}
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={update("consent")}
            data-testid="contact-consent-checkbox"
            className="w-4 h-4 rounded border-white/10 bg-[#050505] accent-[#EAB308] mt-1"
          />
          <span className="text-slate-400 text-sm font-light">
            I agree to be contacted by {siteConfig.name} regarding my enquiry.
          </span>
        </label>
        {errors.consent && <ErrorLine text={errors.consent} />}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-6">
        <p className="text-slate-500 text-xs font-light">
          We typically respond within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          data-testid="contact-submit-btn"
          className="w-full sm:w-auto bg-white text-black hover:bg-[#EAB308] disabled:opacity-60 disabled:cursor-not-allowed font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-full transition-all flex items-center justify-center group"
        >
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
          <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}

function Field({ id, label, required, error, type = "text", value, onChange, placeholder, testId }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3"
      >
        {label} {required && <span className="text-[#EAB308]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testId}
        className={`w-full bg-[#050505] border rounded-xl text-white px-6 py-4 focus:outline-none transition-colors font-light ${
          error ? "border-red-500/60" : "border-white/10 focus:border-[#EAB308]"
        }`}
      />
      {error && <ErrorLine text={error} />}
    </div>
  );
}

function ErrorLine({ text }) {
  return (
    <p className="mt-2 flex items-center gap-2 text-red-400 text-xs font-light">
      <AlertCircle className="w-3.5 h-3.5" />
      {text}
    </p>
  );
}

export { ContactForm };

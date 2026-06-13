"use client";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/site";

const SERVICES = [
  "Machinery Repair",
  "Iron / Steel Supply",
  "Custom Fabrication",
  "Structural Welding",
  "Other Inquiry",
];

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LEN = 10;

const INITIAL = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  message: "",
  consent: false,
  website: "", // honeypot
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  const update = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim())
      er.email = "Please provide email or phone.";
    else if (form.email && !EMAIL_RE.test(form.email))
      er.email = "Invalid email format.";
    if (form.message.trim().length < MIN_MESSAGE_LEN)
      er.message = `Min. ${MIN_MESSAGE_LEN} characters required.`;
    if (!form.consent) er.consent = "Please accept the privacy notice.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim() || null,
          phone: form.phone.trim(),
          service: form.service,
          message: form.message.trim(),
          website: form.website,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(
          data?.detail || "We couldn't deliver your message. Try calling us."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Server unreachable. Please call or WhatsApp us.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        data-testid="contact-success-state"
        className="bg-[#0a0a0a] p-10 rounded-3xl border border-[#EAB308]/30 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#EAB308]" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
          Thank you, {form.name.split(" ")[0]}!
        </h3>
        <p className="text-slate-400 font-light max-w-md mx-auto mb-8">
          Your enquiry has reached our workshop. We typically respond within
          one business day.
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
            data-testid="contact-send-another"
            onClick={() => {
              setForm(INITIAL);
              setStatus("idle");
            }}
            className="text-slate-300 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest border border-white/15 hover:border-white/40 transition-colors"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      data-testid="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="space-y-8"
    >
      {/* honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update("website")}
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Full Name" required error={errors.name}>
          <input
            value={form.name}
            onChange={update("name")}
            data-testid="contact-input-name"
            type="text"
            placeholder="John Doe"
            className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
          />
        </Field>
        <Field label="Company Name">
          <input
            value={form.company}
            onChange={update("company")}
            data-testid="contact-input-company"
            type="text"
            placeholder="Acme Corp"
            className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Email Address" error={errors.email}>
          <input
            value={form.email}
            onChange={update("email")}
            data-testid="contact-input-email"
            type="email"
            placeholder="you@example.com"
            className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={update("phone")}
            data-testid="contact-input-phone"
            type="tel"
            placeholder="+91..."
            className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
          />
        </Field>
      </div>

      <Field label="Service Needed">
        <select
          value={form.service}
          onChange={update("service")}
          data-testid="contact-select-service"
          className="w-full bg-[#050505] border border-white/10 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#EAB308] transition-colors font-light"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-[#0a0a0a]">
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Your Message" required error={errors.message}>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          data-testid="contact-input-message"
          placeholder="Describe the part, the issue, quantities or deadlines..."
          className={`w-full bg-[#050505] border rounded-xl text-white px-6 py-4 focus:outline-none transition-colors font-light resize-none ${
            errors.message
              ? "border-red-500/60"
              : "border-white/10 focus:border-[#EAB308]"
          }`}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={update("consent")}
            data-testid="contact-consent-checkbox"
            className="mt-1 w-4 h-4 rounded border-white/10 bg-[#050505] accent-[#EAB308]"
          />
          <span className="text-slate-400 text-sm font-light">
            I agree to be contacted by {siteConfig.name} regarding this
            enquiry.
          </span>
        </label>
        {errors.consent && <ErrorLine text={errors.consent} />}
      </div>

      {status === "error" && serverError && (
        <div
          data-testid="contact-server-error"
          className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-light p-4 rounded-xl"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">
        <p className="text-slate-500 text-xs font-light">
          We typically respond within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          data-testid="contact-submit-btn"
          className="w-full sm:w-auto bg-white text-black hover:bg-[#EAB308] disabled:opacity-60 disabled:cursor-not-allowed font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-full transition-all flex items-center justify-center group"
        >
          {status === "submitting" ? "Sending..." : "Submit Enquiry"}
          <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
        {label} {required && <span className="text-[#EAB308]">*</span>}
      </label>
      {children}
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

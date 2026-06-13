"use client";
import { useState } from "react";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/site";

const services = [
  "Machinery Repair",
  "Iron / Steel Supply",
  "Custom Fabrication",
  "Structural Welding",
  "Other Enquiry",
];

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
    consent: false,
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const update = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Required.";
    if (!form.email.trim() && !form.phone.trim())
      er.email = "Email or phone — at least one.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      er.email = "Invalid email format.";
    if (!form.message.trim() || form.message.trim().length < 10)
      er.message = "Min. 10 characters.";
    if (!form.consent) er.consent = "Acceptance required.";
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
          data?.detail || "Unable to despatch enquiry. Try phone or WhatsApp."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError(
        "Server unreachable. Use the phone or WhatsApp channel below."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
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
          Thanks, <strong>{form.name.split(" ")[0]}</strong>. Your message
          reached the workshop. We typically respond within one business day.
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
            onClick={() => {
              setForm({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: services[0],
                message: "",
                consent: false,
                website: "",
              });
              setStatus("idle");
            }}
            className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#FF3B00] transition-colors"
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
      className="border-2 border-black bg-white"
    >
      <div className="px-5 md:px-8 py-4 border-b-2 border-black flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em]">
        <span>Form / KEW · ENQ</span>
        <span className="text-[#FF3B00]">● Live</span>
      </div>

      <div className="p-5 md:p-8 space-y-6">
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

        <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black">
          <Field label="Full Name" required testId="contact-input-name" error={errors.name}>
            <input
              value={form.name}
              onChange={update("name")}
              data-testid="contact-input-name"
              placeholder="John Doe"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
          <Field label="Company" testId="contact-input-company">
            <input
              value={form.company}
              onChange={update("company")}
              data-testid="contact-input-company"
              placeholder="Acme Mills"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black">
          <Field label="Email" testId="contact-input-email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              data-testid="contact-input-email"
              placeholder="you@example.com"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
          <Field label="Phone" testId="contact-input-phone">
            <input
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              data-testid="contact-input-phone"
              placeholder="+91 …"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
        </div>

        <Field label="Service Needed" testId="contact-select-service">
          <select
            value={form.service}
            onChange={update("service")}
            data-testid="contact-select-service"
            className="w-full bg-white border-2 border-black px-4 py-4 font-sans text-base focus:outline-none appearance-none"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" required testId="contact-input-message" error={errors.message}>
          <textarea
            rows={5}
            value={form.message}
            onChange={update("message")}
            data-testid="contact-input-message"
            placeholder="Describe the part, the issue, quantities, deadlines…"
            className={`w-full bg-white border-2 ${
              errors.message ? "border-[#FF3B00]" : "border-black"
            } px-4 py-4 font-sans text-base focus:outline-none resize-none`}
          />
        </Field>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={update("consent")}
            data-testid="contact-consent-checkbox"
            className="mt-1 w-5 h-5 accent-[#FF3B00] border-2 border-black"
          />
          <span className="text-sm text-[#4A4A4A] font-sans">
            I agree to be contacted by {siteConfig.name} regarding this
            enquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B00] -mt-3">
            ⚠ {errors.consent}
          </p>
        )}

        {status === "error" && serverError && (
          <div
            data-testid="contact-server-error"
            className="border-2 border-[#FF3B00] bg-[#FF3B00]/10 text-[#0A0A0A] p-4 font-mono text-xs uppercase tracking-[0.15em] flex items-start gap-3"
          >
            <span className="text-[#FF3B00] font-bold">⚠ ERR</span>
            <span className="normal-case font-sans text-sm tracking-normal leading-relaxed">
              {serverError}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] hidden md:block">
            Avg. response · &lt; 1 business day
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            data-testid="contact-submit-btn"
            className="ml-auto inline-flex items-center justify-between gap-6 bg-black text-white border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[200px]"
          >
            <span>
              {status === "submitting" ? "Despatching…" : "Despatch Enquiry"}
            </span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block bg-white">
      <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] px-4 pt-3">
        {label} {required && <span className="text-[#FF3B00]">*</span>}
      </span>
      {children}
      {error && (
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF3B00] px-4 pb-3">
          ⚠ {error}
        </span>
      )}
    </label>
  );
}

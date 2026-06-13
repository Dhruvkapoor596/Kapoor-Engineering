"use client";
import { useCallback, useState } from "react";
import { siteConfig } from "@/lib/site";
import {
  INITIAL_FORM,
  SERVICES,
  buildPayload,
  postContact,
  validateContactForm,
} from "@/lib/contactForm";
import ContactSuccess from "./ContactSuccess";

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "";

const STATUS = {
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [serverError, setServerError] = useState("");

  const update = useCallback(
    (key) => (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((er) => (er[key] ? { ...er, [key]: undefined } : er));
    },
    []
  );

  const reset = useCallback(() => {
    setForm(INITIAL_FORM);
    setStatus(STATUS.IDLE);
    setServerError("");
    setErrors({});
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const newErrors = validateContactForm(form);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setServerError("");
      setStatus(STATUS.SUBMITTING);
      const result = await postContact(API_BASE, buildPayload(form));
      if (result.ok) {
        setStatus(STATUS.SUCCESS);
      } else {
        setServerError(result.error);
        setStatus(STATUS.ERROR);
      }
    },
    [form]
  );

  if (status === STATUS.SUCCESS) {
    return (
      <ContactSuccess
        firstName={form.name.trim().split(" ")[0] || "friend"}
        onReset={reset}
      />
    );
  }

  return (
    <form
      data-testid="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="border-2 border-black bg-white"
    >
      <FormHeader />
      <div className="p-5 md:p-8 space-y-6">
        <Honeypot value={form.website} onChange={update("website")} />

        <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black">
          <Field label="Full Name" required error={errors.name}>
            <input
              value={form.name}
              onChange={update("name")}
              data-testid="contact-input-name"
              placeholder="John Doe"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
          <Field label="Company">
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
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              data-testid="contact-input-email"
              placeholder="you@example.com"
              className="w-full bg-white px-4 py-4 font-sans text-base focus:outline-none focus:bg-[#F4F4F0]"
            />
          </Field>
          <Field label="Phone">
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

        <Field label="Service Needed">
          <select
            value={form.service}
            onChange={update("service")}
            data-testid="contact-select-service"
            className="w-full bg-white border-2 border-black px-4 py-4 font-sans text-base focus:outline-none appearance-none"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" required error={errors.message}>
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

        <ConsentCheckbox
          checked={form.consent}
          onChange={update("consent")}
          error={errors.consent}
        />

        {status === STATUS.ERROR && serverError && (
          <ServerErrorBanner message={serverError} />
        )}

        <SubmitRow submitting={status === STATUS.SUBMITTING} />
      </div>
    </form>
  );
}

// ---------- Sub-components ----------

function FormHeader() {
  return (
    <div className="px-5 md:px-8 py-4 border-b-2 border-black flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em]">
      <span>Form / KEW · ENQ</span>
      <span className="text-[#FF3B00]">● Live</span>
    </div>
  );
}

function Honeypot({ value, onChange }) {
  return (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label>
        Website
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
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

function ConsentCheckbox({ checked, onChange, error }) {
  return (
    <>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          data-testid="contact-consent-checkbox"
          className="mt-1 w-5 h-5 accent-[#FF3B00] border-2 border-black"
        />
        <span className="text-sm text-[#4A4A4A] font-sans">
          I agree to be contacted by {siteConfig.name} regarding this enquiry.
        </span>
      </label>
      {error && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B00] -mt-3">
          ⚠ {error}
        </p>
      )}
    </>
  );
}

function ServerErrorBanner({ message }) {
  return (
    <div
      data-testid="contact-server-error"
      className="border-2 border-[#FF3B00] bg-[#FF3B00]/10 text-[#0A0A0A] p-4 font-mono text-xs uppercase tracking-[0.15em] flex items-start gap-3"
    >
      <span className="text-[#FF3B00] font-bold">⚠ ERR</span>
      <span className="normal-case font-sans text-sm tracking-normal leading-relaxed">
        {message}
      </span>
    </div>
  );
}

function SubmitRow({ submitting }) {
  return (
    <div className="flex items-center justify-between gap-4 pt-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] hidden md:block">
        Avg. response · &lt; 1 business day
      </p>
      <button
        type="submit"
        disabled={submitting}
        data-testid="contact-submit-btn"
        className="ml-auto inline-flex items-center justify-between gap-6 bg-black text-white border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[200px]"
      >
        <span>{submitting ? "Despatching…" : "Despatch Enquiry"}</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}

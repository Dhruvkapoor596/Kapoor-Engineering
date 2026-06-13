// Shared types/constants/helpers for the contact form.
// Extracted to keep ContactForm.js readable.

export const SERVICES = [
  "Machinery Repair",
  "Iron / Steel Supply",
  "Custom Fabrication",
  "Structural Welding",
  "Other Enquiry",
];

export const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  message: "",
  consent: false,
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LEN = 10;
const MIN_NAME_LEN = 1;

export function validateContactForm(form) {
  const errors = {};
  if (form.name.trim().length < MIN_NAME_LEN) {
    errors.name = "Required.";
  }
  if (!form.email.trim() && !form.phone.trim()) {
    errors.email = "Email or phone — at least one.";
  } else if (form.email && !EMAIL_RE.test(form.email)) {
    errors.email = "Invalid email format.";
  }
  if (form.message.trim().length < MIN_MESSAGE_LEN) {
    errors.message = `Min. ${MIN_MESSAGE_LEN} characters.`;
  }
  if (!form.consent) {
    errors.consent = "Acceptance required.";
  }
  return errors;
}

export function buildPayload(form) {
  return {
    name: form.name.trim(),
    company: form.company.trim(),
    email: form.email.trim() || null,
    phone: form.phone.trim(),
    service: form.service,
    message: form.message.trim(),
    website: form.website,
  };
}

const FALLBACK_ERROR_MESSAGE =
  "Server unreachable. Use the phone or WhatsApp channel below.";
const GENERIC_BACKEND_ERROR =
  "Unable to despatch enquiry. Try phone or WhatsApp.";

export async function postContact(apiBase, payload) {
  try {
    const res = await fetch(`${apiBase}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data?.detail || GENERIC_BACKEND_ERROR };
    }
    return { ok: true, data };
  } catch {
    return { ok: false, error: FALLBACK_ERROR_MESSAGE };
  }
}

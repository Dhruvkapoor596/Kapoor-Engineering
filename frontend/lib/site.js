// Centralised business information — change once, updates everywhere.
export const siteConfig = {
  name: "Kapoor Engineering Works",
  shortName: "KEW",
  tagline: "Industrial Solutions",
  description:
    "Expert industrial repair, heavy metal fabrication and iron goods supply since 2007 in Alwar, Rajasthan.",
  phone: "+91 9414846109",
  phoneRaw: "+919414846109",
  email: "kapooreng149@gmail.com",
  address: {
    line1: "G-491, Near M.I.A. Police Station",
    line2: "Matsya Industrial Area (MIA)",
    city: "Alwar",
    state: "Rajasthan",
    country: "India",
  },
  hours: "Mon – Sat, 9:00 AM – 8:00 PM",
  yearFounded: 2007,
  whatsappMessage:
    "Hello Kapoor Engineering Works, I would like to enquire about your services.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
  "+",
  ""
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
export const telUrl = `tel:${siteConfig.phoneRaw}`;
export const mailUrl = `mailto:${siteConfig.email}`;

import { Oswald, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/lib/site";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s · KEW`,
  },
  description: siteConfig.description,
  keywords: [
    "Kapoor Engineering Works",
    "Industrial fabrication Alwar",
    "Precision machining Rajasthan",
    "Heavy metal fabrication India",
    "MS pipes structural steel",
    "Machinery overhaul",
    "Iron supply Alwar",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${roboto.variable} ${robotoSlab.variable}`}
    >
      <body className="antialiased font-roboto bg-[#050505] text-white">
        <Navbar />
        <main>{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}

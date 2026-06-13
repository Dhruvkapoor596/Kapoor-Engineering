import {
  Archivo_Black,
  IBM_Plex_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/lib/site";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${siteConfig.name} — Heavy Industrial Solutions, Est. 2007`,
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
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Heavy Industrial Solutions`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivoBlack.variable} ${ibmPlex.variable} ${jetbrains.variable}`}
    >
      <body className="bg-white text-black font-sans antialiased selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="pt-[72px] md:pt-[88px]">{children}</main>
          <FloatingActions />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

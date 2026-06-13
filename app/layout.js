import { Oswald, Roboto, Roboto_Slab } from "next/font/google"; // 1. Added Roboto_Slab
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// 2. Configure Roboto Slab for the Logo
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // 900 gives us a nice heavy weight for the logo
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Kapoor Engineering Works | Industrial Solutions",
  description: "Expert industrial repair and iron goods supply since 2007.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Add the new variable to the body */}
      <body className={`${oswald.variable} ${roboto.variable} ${robotoSlab.variable} antialiased font-roboto bg-[#050505] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
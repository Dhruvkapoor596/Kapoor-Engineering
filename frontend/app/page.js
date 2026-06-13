import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Hero />
      <About />
      <Products />
      <Services />
      <Projects />
    </div>
  );
}

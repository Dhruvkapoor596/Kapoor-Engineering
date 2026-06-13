import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSnippet from "@/components/AboutSnippet";
import ServicesStrip from "@/components/ServicesStrip";
import ProjectsGallery from "@/components/ProjectsGallery";
import TrustGrid from "@/components/TrustGrid";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSnippet />
      <ServicesStrip />
      <ProjectsGallery />
      <TrustGrid />
      <ContactCTA />
    </>
  );
}

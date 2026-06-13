import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "Precision machining, heavy fabrication, and machinery overhaul services for industrial clients across India.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-[#050505] min-h-screen">
      <Services />
    </div>
  );
}

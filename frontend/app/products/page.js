import Products from "@/components/Products";

export const metadata = {
  title: "Products",
  description:
    "Browse our range of industrial supplies: roofing sheets, MS pipes, structural steel, and hardware.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 bg-[#050505] min-h-screen">
      <Products />
    </div>
  );
}

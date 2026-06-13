import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Featured case studies — warehouse sheds, machinery overhauls, custom steel gates and more.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 bg-[#050505] min-h-screen">
      <Projects />
    </div>
  );
}

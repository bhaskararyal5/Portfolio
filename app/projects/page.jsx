import ProjectCard from "@/components/ProjectCard";
import { projects, site } from "@/lib/data";
export const metadata = { title: `Projects | ${site.name}` };
export default function Projects() {
  return (
    <section className="hero">
      <h1>Projects</h1>
      <div className="cards">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
    </section>
  );
}

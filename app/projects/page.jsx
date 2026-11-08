import Link from "next/link";
import { projects, site } from "@/lib/data";
export const metadata = { title: `Projects | ${site.name}` };
export default function Projects() {
  return (
    <section className="hero">
      <h1>Projects</h1>
      <div className="list">
        {projects.map((p) => (
          <Link key={p.slug} className="item" href={`/projects/${p.slug}`}>
            <h3>{p.title}</h3><p>{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

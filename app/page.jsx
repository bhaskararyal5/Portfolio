import Link from "next/link";
import Typing from "@/components/Typing";
import { site, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Teaching machines<br />to find <Typing words={site.tagline} /></h1>
        <p className="lead">{site.intro}</p>
        <div className="row">
          <Link className="btn primary" href="/projects">View projects</Link>
          <Link className="btn" href="/contact">Contact me</Link>
        </div>
      </section>
      <section>
        <h2>Featured projects</h2>
        <div className="list">
          {projects.map((p) => (
            <Link key={p.slug} className="item" href={`/projects/${p.slug}`}>
              <h3>{p.title}</h3><p>{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

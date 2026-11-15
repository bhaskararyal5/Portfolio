import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVideo from "@/components/ProjectVideo";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Project({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article className="hero">
      <Link href="/projects" className="btn">Back to all projects</Link>
      <p style={{ marginTop: 32 }}>{p.kind}</p>
      <h1 style={{ fontSize: "clamp(26px,4.4vw,40px)" }}>{p.title}</h1>
      <p className="lead">{p.intro}</p>
      {p.video
        ? <ProjectVideo src={p.video} poster={p.image} />
        : <img className="cover" src={p.image} alt={`${p.title} cover`} />}
      <div className="stats">{p.stats.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
      {p.sections.map(([h, parts]) => (
        <div key={h}>
          <h2>{h}</h2>
          {parts.map((x, i) => Array.isArray(x)
            ? <ul key={i}>{x.map((y) => <li key={y}>{y}</li>)}</ul>
            : <p key={i}>{x}</p>)}
        </div>
      ))}
      <div className="row"><a className="btn primary" href={p.repo} target="_blank" rel="noopener noreferrer">{p.repoLabel || "View on GitHub"} ↗</a></div>
    </article>
  );
}

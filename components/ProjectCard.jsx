import Link from "next/link";
export default function ProjectCard({ p }) {
  return (
    <Link href={`/projects/${p.slug}`} className="pcard">
      <img src={p.image} alt={`${p.title} cover`} loading="lazy" />
      <div><h3>{p.title}</h3><p>{p.summary}</p><span className="more">View case study →</span></div>
    </Link>
  );
}

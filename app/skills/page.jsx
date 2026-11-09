import { skills, site } from "@/lib/data";
export const metadata = { title: `Skills | ${site.name}` };

export default function Skills() {
  return (
    <section className="hero">
      <div className="eyebrow">What I work with</div>
      <h1>Skills</h1>
      <div className="skillGrid">
        {skills.map((s) => (
          <article className="panel sk" key={s.title}>
            <div className="skHead"><span className="badge">{s.icon}</span><h3>{s.title}</h3></div>
            <p>{s.text}</p>
            <div className="chips">{s.tools.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="bar" role="img" aria-label={`${s.level} percent`}><i style={{ width: `${s.level}%` }} /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

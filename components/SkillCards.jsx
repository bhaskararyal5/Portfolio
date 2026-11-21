import { skills } from "@/lib/data";

export default function SkillCards() {
  return (
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
  );
}

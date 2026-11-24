import { skills } from "@/lib/data";

export default function SkillDetails() {
  return (
    <div className="skillStack">
      {skills.map((s) => (
        <article className="panel skRow" key={s.title}>
          <div className="skMain">
            <div className="skHead"><span className="badge">{s.icon}</span><h3>{s.title}</h3></div>
            <p>{s.text}</p>
            <div className="bar" role="img" aria-label={`${s.level} percent`}><i style={{ width: `${s.level}%` }} /></div>
          </div>
          <ul className="pills">
            {s.tools.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

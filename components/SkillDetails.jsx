import { skills } from "@/lib/data";

export default function SkillDetails() {
  return (
    <div className="skillStack">
      {skills.map((s) => (
        <article className="panel skBig" key={s.title}>
          <div className="skTop">
            <div className="skHead"><span className="badge">{s.icon}</span><h3>{s.title}</h3></div>
            <span className="lvl">{s.level}%</span>
          </div>
          <p className="skIntro">{s.text}</p>
          <div className="bar" role="img" aria-label={`${s.level} percent`}><i style={{ width: `${s.level}%` }} /></div>
          <div className="subGrid">
            {s.details.map((d) => (
              <div className="sub" key={d.name}>
                <h4>{d.name}</h4>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

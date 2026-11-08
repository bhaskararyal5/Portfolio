import { skills, site } from "@/lib/data";
export const metadata = { title: `Skills | ${site.name}` };
export default function Skills() {
  return (
    <section className="hero">
      <h1>Skills</h1>
      {skills.map((s) => (
        <div className="skill" key={s.title}>
          <h3>{s.title}</h3><p>{s.text}</p>
          <div className="bar" role="img" aria-label={`${s.level} percent`}><i style={{ width: `${s.level}%` }} /></div>
        </div>
      ))}
    </section>
  );
}

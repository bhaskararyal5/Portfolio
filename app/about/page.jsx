import { site, about, education, facts } from "@/lib/data";
export const metadata = { title: `About | ${site.name}` };

export default function About() {
  return (
    <section className="hero">
      <div className="eyebrow">About me</div>
      <h1>Hi, I'm Bhaskar.</h1>
      <div className="aboutGrid">
        <article className="panel story">
          {about.map((t, i) => <p key={i}>{t}</p>)}
        </article>
        <aside className="facts">
          {facts.map(([k, v]) => <div className="panel" key={k}><small>{k}</small><b>{v}</b></div>)}
        </aside>
      </div>
      <h2>Education</h2>
      <div className="edu">
        {education.map((e) => (
          <div className="eduItem" key={e.title}>
            <span className="dot" aria-hidden="true" />
            <div className="panel">
              <small>{e.note}</small>
              <h3>{e.title}</h3>
              <p>{e.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

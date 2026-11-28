// app/about/page.jsx  ->  the ABOUT page (address: /about)
// Photo on the left, bio on the right, then the education timeline.
// Text comes from "about" and "education" in lib/data.js.
// The photo is public/profile.jpg.
import { site, about, education } from "@/lib/data";
export const metadata = { title: `About | ${site.name}` };

export default function About() {
  return (
    <section className="hero">
      <div className="eyebrow">About me</div>
      <h1>Hi, I'm Bhaskar.</h1>
      <div className="aboutGrid">
        <aside>
          <img className="aboutPhoto" src="/profile.jpg" alt={`Photo of ${site.name}`} />
        </aside>
        <article className="panel story">
          {about.map((t, i) => <p key={i}>{t}</p>)}
        </article>
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

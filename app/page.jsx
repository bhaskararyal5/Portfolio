// app/page.jsx  ->  the HOME page (address: /)
// Order on screen: intro + photo, Skills cards, Featured projects.
// Only projects with featured: true in lib/data.js appear here.
import Link from "next/link";
import Typing from "@/components/Typing";
import Avatar from "@/components/Avatar";
import SkillCards from "@/components/SkillCards";
import ProjectCard from "@/components/ProjectCard";
import { site, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero heroGrid">
        <div>
          <h1>Teaching machines<br />to find <Typing words={site.tagline} /></h1>
          <p className="lead">{site.intro}</p>
          <div className="row">
            <Link className="btn primary" href="/projects">View projects</Link>
            <Link className="btn" href="/contact">Contact me</Link>
          </div>
        </div>
        <Avatar name={site.name} />
      </section>
      <section>
        <div className="eyebrow">What I work with</div>
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <SkillCards />
      </section>
      <section style={{ marginTop: 70 }}>
        <h2>Featured projects</h2>
        <div className="cards">{projects.filter((p) => p.featured).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      </section>
    </>
  );
}

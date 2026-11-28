// app/skills/page.jsx  ->  the SKILLS page (address: /skills)
// Just a title; the clickable categories are in components/SkillsExplorer.jsx.
import SkillsExplorer from "@/components/SkillsExplorer";
import { site } from "@/lib/data";
export const metadata = { title: `Skills | ${site.name}` };

export default function Skills() {
  return (
    <section className="hero">
      <div className="eyebrow">What I work with</div>
      <h1>Skills</h1>
      <p className="lead">Pick a category to see what is inside it.</p>
      <SkillsExplorer />
    </section>
  );
}

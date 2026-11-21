import SkillCards from "@/components/SkillCards";
import { site } from "@/lib/data";
export const metadata = { title: `Skills | ${site.name}` };

export default function Skills() {
  return (
    <section className="hero">
      <div className="eyebrow">What I work with</div>
      <h1>Skills</h1>
      <SkillCards />
    </section>
  );
}

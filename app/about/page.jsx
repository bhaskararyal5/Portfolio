import { site } from "@/lib/data";
export const metadata = { title: `About | ${site.name}` };
export default function About() {
  return (
    <section className="hero">
      <h1>About</h1>
      <p className="lead">{site.intro}</p>
      <h2>Education</h2>
      <p>{site.university}, B.E. in Computer Engineering.</p>
      <h2>Focus</h2>
      <p>Machine learning, data analysis and turning models into usable apps.</p>
    </section>
  );
}

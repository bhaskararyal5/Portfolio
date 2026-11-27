import Link from "next/link";
import { site, projects } from "@/lib/data";
import { GitHub, LinkedIn, Instagram, Facebook } from "@/components/icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="fbrand">{site.name}<span>.</span></div>
            <p className="fdesc">Computer Engineering student at {site.university}, {site.location}. Focused on machine learning and turning models into real, usable apps.</p>
            <div className="fbadge"><i />{site.location}</div>
            <small className="funi">{site.university}</small>
          </div>
          <div>
            <h4>Directory</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Case studies</h4>
            <ul>{projects.map((p) => <li key={p.slug}><Link href={`/projects/${p.slug}`}>{p.title}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Profiles</h4>
            <div className="icons">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="fbottom">© {new Date().getFullYear()} <b>{site.name}</b>. All rights reserved.</div>
      </div>
    </footer>
  );
}

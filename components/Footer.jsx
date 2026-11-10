import { site } from "@/lib/data";
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="social">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div>{site.university}, {site.location}</div>
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

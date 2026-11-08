import { site } from "@/lib/data";
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a href={site.github}>GitHub</a> · {site.university}, {site.location}
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

"use client";
// components/Header.jsx
// The top menu bar. To add or remove a menu item, edit the "links" list.
// It also holds the light/dark Theme button.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";

const links = [["/about", "About"], ["/skills", "Skills"], ["/projects", "Projects"], ["/contact", "Contact"]];

export default function Header() {
  const path = usePathname();
  const toggle = () => {
    const r = document.documentElement;
    const dark = getComputedStyle(r).getPropertyValue("--bg").trim() === "#0b1220";
    r.dataset.theme = dark ? "light" : "dark";
  };
  return (
    <header>
      <div className="wrap">
        <Link href="/" className="logo">{site.name}</Link>
        <nav>
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={path.startsWith(href) ? "page" : undefined}>{label}</Link>
          ))}
          <button onClick={toggle} aria-label="Switch light or dark theme">Theme</button>
        </nav>
      </div>
    </header>
  );
}

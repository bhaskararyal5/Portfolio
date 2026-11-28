"use client";
// components/SkillsExplorer.jsx
// The clickable category list + detail panel on the SKILLS page.
// Data comes from "skills" in lib/data.js; "level" draws the ring.
import { useState } from "react";
import { skills } from "@/lib/data";

const C = 2 * Math.PI * 52;

export default function SkillsExplorer() {
  const [i, setI] = useState(0);
  const s = skills[i];
  return (
    <div className="skLayout">
      <div className="skTabs" role="tablist" aria-label="Skill categories">
        {skills.map((k, n) => (
          <button key={k.title} role="tab" aria-selected={n === i} className={`skTab${n === i ? " on" : ""}`} onClick={() => setI(n)}>
            <span className="badge">{k.icon}</span>
            <span className="skTabText"><b>{k.title}</b><small>{k.tools.length} skills</small></span>
          </button>
        ))}
      </div>
      <div className="panel skPanel" role="tabpanel" key={s.title}>
        <div className="skPanelTop">
          <div>
            <h2 className="skTitle">{s.title}</h2>
            <p>{s.text}</p>
          </div>
          <div className="ring" role="img" aria-label={`${s.level} percent`}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle className="rbg" cx="60" cy="60" r="52" />
              <circle className="rfg" cx="60" cy="60" r="52" strokeDasharray={C} strokeDashoffset={C * (1 - s.level / 100)} />
            </svg>
            <span>{s.level}%</span>
          </div>
        </div>
        <ul className="tiles">
          {s.tools.map((t, n) => (
            <li key={t} style={{ animationDelay: `${n * 60}ms` }}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

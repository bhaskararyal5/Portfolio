"use client";
// components/ProjectCard.jsx
// One project card (used on Home and Projects). If the project has a
// video, hovering or touching the card plays the first few seconds.
// Change PREVIEW_SECONDS below to make the preview longer or shorter.
import Link from "next/link";
import { useRef, useState } from "react";

const PREVIEW_SECONDS = 3; // only the first few seconds loop in the card

export default function ProjectCard({ p }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <Link href={`/projects/${p.slug}`} className="pcard" onPointerEnter={start} onPointerLeave={stop} onPointerCancel={stop}>
      <div className="media">
        {p.video ? (
          <>
            <video
              ref={ref} src={p.video} poster={p.image} muted playsInline preload="metadata"
              aria-label={`${p.title} preview`}
              onTimeUpdate={(e) => { if (e.currentTarget.currentTime >= PREVIEW_SECONDS) e.currentTarget.currentTime = 0; }}
            />
            <span className={`playchip${playing ? " on" : ""}`}>▶ Preview</span>
          </>
        ) : (
          <img src={p.image} alt={`${p.title} cover`} loading="lazy" />
        )}
      </div>
      <div className="pbody">
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <span className="more">View case study →</span>
      </div>
    </Link>
  );
}

"use client";
// components/NeuralBackground.jsx
// The animated network background. To tune it: LINK = how far apart two
// dots can be and still join, the numbers 95 / 17000 control how many
// dots appear, and the alpha values (0.28, 0.55, 0.65) set how bright
// the lines and dots are. The soft glows are CSS (.orb in globals.css).
import { useEffect, useRef } from "react";

// A living "neural network" backdrop: drifting nodes joined by faint links,
// reacting to the cursor or finger, on top of slow aurora glows and a soft grid.
export default function NeuralBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, pts = [], raf = 0, frame = 0, color = "#1d4ed8", rt;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 135, MOUSE = 170;

    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || color;
    };

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(95, Math.max(26, (w * h) / 17000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.3 + 1,
      }));
    };

    const draw = (step) => {
      if (frame++ % 30 === 0) readColor();
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 1;

      for (const p of pts) {
        if (step) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 110 && d > 0) { p.x += (dx / d) * 0.6; p.y += (dy / d) * 0.6; } // gentle push
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.28;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < MOUSE) {
          ctx.globalAlpha = (1 - md / MOUSE) * 0.55;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.globalAlpha = 0.65;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => { draw(true); raf = requestAnimationFrame(loop); };
    const start = () => { if (!reduce && !raf) loop(); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { init(); if (reduce) draw(false); }, 150); };
    const onVis = () => (document.hidden ? stop() : start());

    init(); readColor();
    if (reduce) draw(false); else start();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerup", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop(); clearTimeout(rt);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerup", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="bgfx" aria-hidden="true">
      <i className="orb o1" /><i className="orb o2" /><i className="orb o3" />
      <canvas ref={ref} />
    </div>
  );
}

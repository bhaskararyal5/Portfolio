"use client";
// components/ScrollReveal.jsx
// Makes headings, cards and sections fade in as you scroll down.
// It adds/removes CSS classes ("rv" and "in"); the animation itself
// is the "Gentle scroll reveal" block in app/globals.css.
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR =
  "main h2, main .panel, main .pcard, main .eduItem, main .stats, main .cover, main .aboutPhoto, footer .foot > div";

// Gentle fade-and-rise as sections scroll into view.
export default function ScrollReveal() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers = [];
    let io;
    const raf = requestAnimationFrame(() => {
      const items = [...document.querySelectorAll(SELECTOR)].filter(
        (el) => !(el.closest(".eduItem") && !el.classList.contains("eduItem"))
      );
      // Only hide what is below the fold, so nothing flashes on load.
      const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.95);
      below.forEach((el) => {
        const siblings = [...el.parentElement.children].filter((c) => below.includes(c));
        el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 4) * 80}ms`);
        el.classList.add("rv");
      });
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target;
            io.unobserve(el);
            el.classList.add("in");
            // Hand control back to the element's own hover transitions afterwards.
            timers.push(setTimeout(() => { el.classList.remove("rv", "in"); el.style.removeProperty("--d"); }, 1000));
          }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      below.forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      io && io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [path]);

  return null;
}

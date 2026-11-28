"use client";
// components/Typing.jsx
// The typing animation in the home headline. The words it cycles
// through are "site.tagline" in lib/data.js.
import { useEffect, useState } from "react";

export default function Typing({ words }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, c = 0, del = false, t;
    const tick = () => {
      const word = words[w];
      setText(word.slice(0, c));
      if (!del && c === word.length) { del = true; t = setTimeout(tick, 1400); return; }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; }
      c += del ? -1 : 1;
      t = setTimeout(tick, del ? 35 : 80);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return <span className="type">{text}</span>;
}

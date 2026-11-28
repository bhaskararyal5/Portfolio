"use client";
// components/Avatar.jsx
// The round photo on the home page. It loads public/profile.jpg
// and shows your initials if that file is missing.
import { useEffect, useState } from "react";

// Your photo is public/profile.jpg. If it is missing, your initials show.
export default function Avatar({ name }) {
  const [has, setHas] = useState(false);
  useEffect(() => {
    const i = new Image();
    i.onload = () => setHas(true);
    i.src = "/profile.jpg";
  }, []);
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <div className="avatar">
      {has ? <img src="/profile.jpg" alt={`Photo of ${name}`} /> : <span aria-hidden="true">{initials}</span>}
    </div>
  );
}

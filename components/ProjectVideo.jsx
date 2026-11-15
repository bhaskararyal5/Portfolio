"use client";
export default function ProjectVideo({ src, poster }) {
  return (
    <video className="cover" src={src} poster={poster} controls autoPlay muted loop playsInline preload="auto">
      Your browser cannot play this video.
    </video>
  );
}

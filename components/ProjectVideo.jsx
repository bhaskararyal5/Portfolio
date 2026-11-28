"use client";
// components/ProjectVideo.jsx
// The demo video at the top of a project page. It autoplays muted
// and has normal playback controls.
export default function ProjectVideo({ src, poster }) {
  return (
    <video className="cover" src={src} poster={poster} controls autoPlay muted loop playsInline preload="auto">
      Your browser cannot play this video.
    </video>
  );
}

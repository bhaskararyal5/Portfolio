"use client";
import { useState } from "react";
import { site } from "@/lib/data";
import { Mail, GitHub, LinkedIn, Instagram, Facebook } from "@/components/icons";

const links = [
  { label: "LinkedIn", handle: "bhaskar-aryal", href: site.linkedin, Icon: LinkedIn },
  { label: "GitHub", handle: "@bhaskararyal5", href: site.github, Icon: GitHub },
  { label: "Instagram", handle: "@bhaskar_5960", href: site.instagram, Icon: Instagram },
  { label: "Facebook", handle: "bhaskar.aryal.524", href: site.facebook, Icon: Facebook },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Hello from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  return (
    <section className="hero">
      <div className="eyebrow">Contact</div>
      <h1>Let's build something meaningful.</h1>
      <p className="lead">Have a project, an idea or just want to say hello? Send a message or find me on any of these.</p>

      <div className="ctGrid">
        <div className="ctLeft">
          <div className="ctMail panel">
            <span className="ctIcon"><Mail /></span>
            <div className="ctText"><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <button type="button" onClick={copy} className="copyBtn">{copied ? "Copied!" : "Copy"}</button>
          </div>
          {links.map(({ label, handle, href, Icon }) => (
            <a key={label} className="ctLink panel" href={href} target="_blank" rel="noopener noreferrer">
              <span className="ctIcon"><Icon /></span>
              <span className="ctText"><small>{label}</small><b>{handle}</b></span>
              <span className="ctArrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <form className="panel cform" onSubmit={submit}>
          <h2>Send a message</h2>
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" rows={6} placeholder="How can I help?" required /></label>
          <button className="btn primary" type="submit">Send message</button>
          <small className="note">{sent ? "Your email app should open now." : "This opens your email app with the message filled in."}</small>
        </form>
      </div>
    </section>
  );
}

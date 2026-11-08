"use client";
import { useState } from "react";
import { site } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n${f.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Hello from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section className="hero">
      <h1>Let's build something meaningful.</h1>
      <form onSubmit={submit}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" rows={5} placeholder="Your message" required />
        <button className="btn primary" type="submit">Send message</button>
        <small>{sent ? "Your email app should open now." : "Opens your email app with the message filled in."}</small>
      </form>
    </section>
  );
}

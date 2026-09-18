"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Mail, Send, X as XIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import Reveal from "@/components/Reveal";
import type { Personal } from "@/types/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact({ personal }: { personal: Personal }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const socials = [
    { href: personal.social.github, icon: GithubIcon, label: "GitHub" },
    { href: personal.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: personal.social.twitter, icon: XIcon, label: "X (Twitter)" },
  ].filter((s) => s.href);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email sending isn't configured yet.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          from_name: form.name,
          email: form.email,
          from_email: form.email,
          message: form.message,
        },
        { publicKey },
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      if (err && typeof err === "object" && "status" in err && "text" in err) {
        const { status, text } = err as { status: number; text: string };
        setErrorMessage(`Failed to send (${status}): ${text}`);
      } else {
        setErrorMessage("Something went wrong sending your message. Please try again.");
      }
      console.error("EmailJS send failed:", err);
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">06. Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            I&apos;m currently {personal.availableForWork ? "open to" : "not actively looking for"} new
            opportunities. Send me a message below, or reach out directly —
            my inbox is always open.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                disabled={status === "loading"}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent disabled:opacity-60"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                disabled={status === "loading"}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent disabled:opacity-60"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              disabled={status === "loading"}
              className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-500">
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-accent-2">{errorMessage}</p>
            )}
          </form>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Mail size={16} />
              {personal.email}
            </a>

            <div className="flex items-center justify-center gap-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

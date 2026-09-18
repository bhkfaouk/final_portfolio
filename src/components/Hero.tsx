"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, X as XIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import type { Personal } from "@/types/portfolio";

export default function Hero({ personal }: { personal: Personal }) {
  const socials = [
    { href: personal.social.github, icon: GithubIcon, label: "GitHub" },
    { href: personal.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: personal.social.twitter, icon: XIcon, label: "X (Twitter)" },
    { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
  ].filter((s) => s.href);

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] h-[24rem] w-[24rem] rounded-full bg-accent-2/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {personal.availableForWork && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </div>
          )}

          <p className="font-mono text-sm text-accent">
            Hi, my name is {personal.name.split(" ")[0]}.
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {personal.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

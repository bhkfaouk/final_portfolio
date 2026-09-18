import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Project } from "@/types/portfolio";

export default function Projects({ items }: { items: Project[] }) {
  return (
    <section id="projects" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="04. Projects" title="Things I've built" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <div className="flex shrink-0 gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

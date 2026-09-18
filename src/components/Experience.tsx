import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Experience as ExperienceItem } from "@/types/portfolio";

export default function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="03. Experience" title="Where I've worked" />
      </Reveal>

      <div className="relative flex flex-col gap-10">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border sm:left-[9px]" />

        {items.map((item, i) => (
          <Reveal key={`${item.company}-${item.role}`} delay={i * 0.08}>
            <div className="relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background sm:h-5 sm:w-5" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.role}{" "}
                  <span className="text-accent">@ {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.location}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
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
    </section>
  );
}

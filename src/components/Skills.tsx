import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SkillGroup } from "@/types/portfolio";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="02. Skills" title="What I work with" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="font-mono text-sm text-accent">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground"
                    >
                      {item}
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

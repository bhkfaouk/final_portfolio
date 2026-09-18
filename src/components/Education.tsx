import { GraduationCap, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Certification, Education as EducationItem } from "@/types/portfolio";

export default function Education({
  education,
  certifications,
}: {
  education: EducationItem[];
  certifications: Certification[];
}) {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="05. Education" title="Studies & certifications" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-6">
            {education.map((item) => (
              <div
                key={`${item.school}-${item.degree}`}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <GraduationCap size={20} className="mt-1 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.degree} — {item.field}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.startDate} — {item.endDate}
                  </p>
                  {item.details && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <Award size={20} className="mt-1 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

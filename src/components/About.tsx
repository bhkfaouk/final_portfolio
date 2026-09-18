import { MapPin, Mail, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Personal } from "@/types/portfolio";

export default function About({ personal }: { personal: Personal }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="01. About" title="Who I am" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {personal.bio}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-accent" />
                {personal.location}
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Mail size={16} className="text-accent" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-foreground"
                >
                  {personal.email}
                </a>
              </li>
              {personal.availableForWork && (
                <li className="flex items-center gap-3 text-muted">
                  <CheckCircle2 size={16} className="text-accent" />
                  Open to new roles
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

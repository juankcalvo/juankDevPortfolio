"use client";

import { experience } from "@/content/experience";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="Career journey and key achievements." />

      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {experience.map((entry) => (
          <StaggerItem key={entry.company}>
            <div className="flex h-full flex-col rounded-xl border border-border/60 bg-surface p-5 transition-colors duration-300 hover:border-accent/20">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">{entry.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.company}
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-surface-light px-2.5 py-0.5 font-mono text-[10px] text-muted">
                  {entry.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {entry.highlights.map((h) => (
                  <li
                    key={h.text}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                    {h.text}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

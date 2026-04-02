"use client";

import { GraduationCap, Globe, BookOpen } from "lucide-react";
import { profile } from "@/content/profile";
import {
  technologies,
  categoryLabels,
  categoryOrder,
} from "@/content/technologies";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

export function About() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    techs: technologies.filter((t) => t.category === cat),
  }));

  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" />

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: summary, education, languages */}
        <div className="space-y-6">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="space-y-2.5">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap className="h-4 w-4 text-accent" />
                Education
              </h3>
              {profile.education.map((edu) => (
                <div key={edu.degree} className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {edu.degree}
                  </span>
                  <span className="text-xs text-muted">
                    — {edu.institution}
                  </span>
                  {edu.status === "ongoing" && (
                    <span className="rounded-full bg-accent-dim px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      In Progress
                    </span>
                  )}
                </div>
              ))}
              <div className="flex items-start gap-2 text-sm text-muted">
                <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>KCNA preparation (Kubernetes, Docker, observability, GitOps) + Linux training</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-2.5">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <Globe className="h-4 w-4 text-accent" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-lg border border-border/60 bg-surface px-3 py-1 text-sm text-muted-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: tech stack */}
        <FadeIn delay={0.05}>
          <div className="space-y-5">
            <h3 className="text-sm font-semibold">Tech Stack</h3>
            {grouped.map((group) => (
              <div key={group.category}>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.techs.map((tech) => (
                    <span
                      key={tech.slug}
                      className="rounded-md border border-border/60 bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

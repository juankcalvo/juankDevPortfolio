"use client";

import { ExternalLink, Lock, Wrench, Eye, Clock, Sparkles } from "lucide-react";
import { projects } from "@/content/projects";
import { getTechName } from "@/content/technologies";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

const statusConfig = {
  live: { label: "Live", icon: Eye, color: "text-emerald-400" },
  "in-development": { label: "In Development", icon: Wrench, color: "text-amber-400" },
  private: { label: "Private", icon: Lock, color: "text-muted-foreground" },
  internal: { label: "Internal", icon: Lock, color: "text-muted-foreground" },
  completed: { label: "Completed", icon: Eye, color: "text-blue-400" },
  "coming-soon": { label: "Coming Soon", icon: Clock, color: "text-violet-400" },
} as const;

export function SelectedWork() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="work">
      <SectionHeading title="Projects" subtitle="Real systems built and deployed for real users." />

      {featured && (
        <FadeIn className="mb-8">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-surface">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent-dim px-3 py-0.5 text-xs font-semibold text-accent">
                  Featured
                </span>
                <StatusBadge status={featured.status} />
              </div>

              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                {featured.title}
              </h3>
              <p className="mb-5 max-w-2xl text-sm text-muted-foreground">
                {featured.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {featured.stack.map((slug) => (
                  <span
                    key={slug}
                    className="rounded-md border border-border/60 bg-surface-light px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {getTechName(slug)}
                  </span>
                ))}
              </div>

              <div className="mb-5 grid gap-2 sm:grid-cols-2">
                {featured.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {outcome}
                  </div>
                ))}
              </div>

              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  View Live
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      )}

      <StaggerContainer className="grid gap-4 sm:grid-cols-3">
        {others.map((project) => {
          const isComingSoon = project.status === "coming-soon";
          return (
            <StaggerItem key={project.slug}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border bg-surface p-5 transition-colors duration-300",
                  isComingSoon
                    ? "border-dashed border-border/40"
                    : "border-border/60 hover:border-accent/20",
                )}
              >
                <div className="mb-3">
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="mb-1.5 text-base font-semibold">
                  {project.title}
                  {isComingSoon && (
                    <Sparkles className="ml-1.5 inline h-3.5 w-3.5 text-violet-400" />
                  )}
                </h3>
                <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 4).map((slug) => (
                      <span
                        key={slug}
                        className="rounded border border-border/50 bg-surface-light px-1.5 py-0.5 font-mono text-[9px] text-muted"
                      >
                        {getTechName(slug)}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1 text-[9px] text-muted">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}

function StatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const config = statusConfig[status];
  const Icon = config.icon;
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", config.color)}>
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}

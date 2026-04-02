"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTechFilter } from "@/context/tech-filter-context";
import {
  technologies,
  categoryLabels,
  categoryOrder,
} from "@/content/technologies";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

function getMatchCounts(selected: string[]) {
  const matchingProjects = projects.filter((p) =>
    p.stack.some((t) => selected.includes(t)),
  ).length;

  const matchingHighlights = experience
    .flatMap((e) => e.highlights)
    .filter((h) => h.techs.some((t) => selected.includes(t))).length;

  return { matchingProjects, matchingHighlights };
}

export function TechExplorer() {
  const { selected, toggle, clear, isSelected, hasSelection } = useTechFilter();
  const counts = hasSelection ? getMatchCounts(selected) : null;

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    techs: technologies.filter((t) => t.category === cat),
  }));

  return (
    <SectionWrapper id="explorer">
      <SectionHeading
        label="02 — Explorer"
        title="Technology & Capability Explorer"
        subtitle="Select technologies to filter and highlight relevant projects, experience, and capabilities across the portfolio."
      />

      <div className="space-y-8">
        {grouped.map((group, gi) => (
          <FadeIn key={group.category} delay={gi * 0.08}>
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => {
                  const active = isSelected(tech.slug);
                  return (
                    <button
                      key={tech.slug}
                      onClick={() => toggle(tech.slug)}
                      className={cn(
                        "rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                        active
                          ? "border-accent/40 bg-accent-dim text-accent shadow-[0_0_16px_rgba(16,185,129,0.08)]"
                          : "border-border bg-surface text-muted-foreground hover:border-border hover:text-foreground",
                      )}
                    >
                      {tech.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Match summary bar */}
      <AnimatePresence>
        {hasSelection && counts && (
          <motion.div
            initial={{ opacity: 0, y: 12, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto", marginTop: 32 }}
            exit={{ opacity: 0, y: 12, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-accent/20 bg-accent-dim px-5 py-3.5">
              <p className="text-sm text-accent">
                <span className="font-semibold">{selected.length}</span>
                {selected.length === 1 ? " technology" : " technologies"}{" "}
                selected &nbsp;·&nbsp; Matching{" "}
                <span className="font-semibold">{counts.matchingProjects}</span>{" "}
                {counts.matchingProjects === 1 ? "project" : "projects"} and{" "}
                <span className="font-semibold">
                  {counts.matchingHighlights}
                </span>{" "}
                experience highlights
              </p>
              <button
                onClick={clear}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/10"
              >
                <X className="h-3 w-3" />
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

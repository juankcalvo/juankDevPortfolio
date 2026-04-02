"use client";

import {
  Shield,
  Zap,
  Rocket,
  Cloud,
  Activity,
  Code,
  type LucideIcon,
} from "lucide-react";
import { principles } from "@/content/principles";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  rocket: Rocket,
  cloud: Cloud,
  activity: Activity,
  code: Code,
};

export function Principles() {
  return (
    <SectionWrapper id="principles">
      <SectionHeading
        label="05 — Principles"
        title="How I Build"
        subtitle="The engineering values and practices that guide every system I design and deploy."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => {
          const Icon = iconMap[principle.icon] ?? Code;
          return (
            <StaggerItem key={principle.title}>
              <div className="group flex h-full flex-col rounded-xl border border-border/60 bg-surface p-6 transition-all duration-300 hover:border-accent/25">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dim">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}

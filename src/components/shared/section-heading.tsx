"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "left",
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-10", align === "center" && "text-center")}>
      {label && (
        <span className="mb-2 inline-block font-mono text-xs uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

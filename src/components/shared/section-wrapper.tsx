import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("px-6 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

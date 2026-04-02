import type { Technology, TechCategory } from "@/types";

export const technologies: Technology[] = [
  // Frontend
  { slug: "angular", name: "Angular", category: "frontend" },
  { slug: "react", name: "React", category: "frontend" },
  { slug: "typescript", name: "TypeScript", category: "frontend" },
  { slug: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { slug: "bootstrap", name: "Bootstrap", category: "frontend" },

  // Backend
  { slug: "nodejs", name: "Node.js", category: "backend" },
  { slug: "express", name: "Express", category: "backend" },
  { slug: "dotnet", name: ".NET / C#", category: "backend" },
  { slug: "postgresql", name: "PostgreSQL", category: "backend" },
  { slug: "sqlserver", name: "SQL Server", category: "backend" },
  { slug: "rest-apis", name: "REST APIs", category: "backend" },

  // Infrastructure
  { slug: "aws", name: "AWS", category: "infrastructure" },
  { slug: "docker", name: "Docker", category: "infrastructure" },
  { slug: "kubernetes", name: "Kubernetes", category: "infrastructure" },
  { slug: "linux", name: "Linux", category: "infrastructure" },

  // Practices
  { slug: "security", name: "Security", category: "practices" },
  { slug: "automation", name: "Automation", category: "practices" },
  { slug: "testing", name: "Testing", category: "practices" },
];

export const categoryLabels: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend & Data",
  infrastructure: "Infrastructure & DevOps",
  practices: "Practices & Methodology",
};

export const categoryOrder: TechCategory[] = [
  "frontend",
  "backend",
  "infrastructure",
  "practices",
];

export function getTechBySlug(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}

export function getTechName(slug: string): string {
  return getTechBySlug(slug)?.name ?? slug;
}

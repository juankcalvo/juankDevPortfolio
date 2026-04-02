export type TechCategory = "frontend" | "backend" | "infrastructure" | "practices";

export interface Technology {
  slug: string;
  name: string;
  category: TechCategory;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  outcomes: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: "live" | "in-development" | "private" | "completed" | "coming-soon";
  featured: boolean;
}

export interface ExperienceHighlight {
  text: string;
  techs: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
}

export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: "completed" | "ongoing";
  detail?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string[];
  headlineAccent: string;
  subheadline: string;
  summary: string;
  focusAreas: FocusArea[];
  education: Education[];
  languages: string[];
  location: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  available: boolean;
}

import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Own Product",
    role: "Founder & Full-Stack Developer",
    period: "Apr 2025 — Present",
    location: "San José, Costa Rica",
    description:
      "Built and launched an event ticketing and staff access-control platform end to end — from architecture and database design to deployment on AWS.",
    highlights: [
      {
        text: "Built and deployed the platform end to end using Angular, Node.js/Express, PostgreSQL, and AWS",
        techs: ["angular", "typescript", "nodejs", "express", "postgresql", "aws"],
      },
      {
        text: "Replaced paper-based access lists with QR-based web scanning from any phone, improving check-in traceability",
        techs: ["angular", "typescript", "security"],
      },
      {
        text: "Integrated dynamic PDF tickets, email and WhatsApp workflows, and scheduled background jobs",
        techs: ["nodejs", "automation"],
      },
      {
        text: "Deployed core services on AWS with EC2, S3, CloudFront, and Aurora",
        techs: ["aws", "docker"],
      },
    ],
    technologies: [
      "angular",
      "typescript",
      "nodejs",
      "express",
      "postgresql",
      "aws",
      "docker",
      "rest-apis",
      "security",
      "automation",
    ],
  },
  {
    company: "Mayoreo del Istmo",
    role: "Full-Stack Developer (Freelance)",
    period: "Dec 2024 — Present",
    location: "Remote",
    description:
      "Developed a full-stack time-tracking platform for a multi-location retail operation, digitizing attendance workflows.",
    highlights: [
      {
        text: "Developed a full-stack time-tracking platform using Angular, Node.js, and PostgreSQL",
        techs: ["angular", "typescript", "nodejs", "postgresql"],
      },
      {
        text: "Implemented authentication, role-based access, encryption, and background automations",
        techs: ["security", "automation", "nodejs"],
      },
      {
        text: "Built data-retrieval automations tied to Costa Rica's official time-reporting flows",
        techs: ["automation", "nodejs", "rest-apis"],
      },
      {
        text: "Structured the solution for maintainability and future production deployment",
        techs: ["typescript", "nodejs"],
      },
    ],
    technologies: [
      "angular",
      "typescript",
      "nodejs",
      "postgresql",
      "security",
      "automation",
      "rest-apis",
    ],
  },
  {
    company: "CREDID.NET",
    role: "Software Engineer",
    period: "Jan 2024 — May 2024",
    location: "Costa Rica",
    description:
      "Built automation scripts and web scrapers for credit-information workflows, replacing manual research with automated collection pipelines.",
    highlights: [
      {
        text: "Built 10+ automation scripts and web scrapers to collect professional and public record data",
        techs: ["nodejs", "automation"],
      },
      {
        text: "Replaced manual copy-paste research with automated pipelines, reducing data-gathering from hours to minutes",
        techs: ["automation"],
      },
      {
        text: "Supported smoke testing, database work, and delivery planning for automation features",
        techs: ["testing", "postgresql"],
      },
    ],
    technologies: ["nodejs", "automation", "testing", "postgresql"],
  },
  {
    company: "Asociación Roblealto",
    role: "Full-Stack Developer (Volunteer)",
    period: "May 2023 — Jun 2023",
    location: "San José, Costa Rica",
    description:
      "Built a .NET MVC and Web API inventory solution for a nonprofit organization with multiple sites.",
    highlights: [
      {
        text: "Built a .NET MVC and Web API inventory solution for tracking food and supply usage across sites",
        techs: ["dotnet", "rest-apis"],
      },
      {
        text: "Designed the SQL Server schema and responsive Bootstrap-based UI for cross-location visibility",
        techs: ["sqlserver", "bootstrap"],
      },
    ],
    technologies: ["dotnet", "sqlserver", "bootstrap", "rest-apis"],
  },
];

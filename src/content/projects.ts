import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ticketing-events-platform",
    title: "Ticketing & Events Platform",
    summary:
      "Event ticketing and staff access-control platform with QR-based check-ins, real-time traceability, and automated workflows.",
    description:
      "A full end-to-end event ticketing and staff access-control platform. Replaced paper-based access lists with QR-based web scanning from any phone, improving check-in traceability and removing dependence on dedicated scanning hardware. Includes dynamic PDF tickets, email and WhatsApp notification workflows, and scheduled background jobs.",
    stack: [
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
    outcomes: [
      "QR-based check-in system replacing paper access lists",
      "Dynamic PDF ticket generation with email and WhatsApp delivery",
      "Deployed on AWS (EC2, S3, CloudFront, Aurora)",
      "Scheduled background jobs for automated workflows",
      "Role-based staff access control with audit traceability",
    ],
    liveUrl: "https://d27r6oodnuugmc.cloudfront.net/events",
    status: "live",
    featured: true,
  },
  {
    slug: "time-tracking-platform",
    title: "Time-Tracking Platform",
    summary:
      "Full-stack time-tracking and attendance system for a multi-location retail operation with automated reporting.",
    description:
      "A time-tracking platform built for Mayoreo del Istmo, a multi-location retail operation. Features authentication, role-based access, encryption, and background automations to digitize attendance workflows. Includes data-retrieval automations tied to Costa Rica's official time-reporting flows.",
    stack: [
      "angular",
      "typescript",
      "nodejs",
      "postgresql",
      "security",
      "automation",
      "rest-apis",
    ],
    outcomes: [
      "Digitized attendance workflows replacing manual processes",
      "Authentication with role-based access and encryption",
      "Automated data retrieval tied to official reporting flows",
      "Structured for maintainability and future production scaling",
    ],
    status: "private",
    featured: false,
  },
  {
    slug: "nonprofit-inventory",
    title: "Nonprofit Inventory System",
    summary:
      "Inventory tracking solution for a nonprofit with multiple sites, built with .NET MVC and SQL Server.",
    description:
      "An inventory management solution built as a volunteer project for Asociación Roblealto, a nonprofit organization with multiple sites. Tracks food and supply usage across locations with a responsive Bootstrap-based UI and structured SQL Server schema.",
    stack: ["dotnet", "sqlserver", "bootstrap", "rest-apis"],
    outcomes: [
      "Multi-site food and supply tracking system",
      "SQL Server schema designed for cross-location visibility",
      "Responsive Bootstrap UI for field and office use",
    ],
    status: "completed",
    featured: false,
  },
  {
    slug: "next-project",
    title: "Next Project",
    summary:
      "A new project currently in the planning and early development phase. Details coming soon.",
    description:
      "A new initiative currently being scoped and designed. More details will be available as development progresses.",
    stack: [],
    outcomes: [],
    status: "coming-soon",
    featured: false,
  },
];

import type { Principle } from "@/types";

export const principles: Principle[] = [
  {
    title: "Security-First",
    description:
      "Authentication, authorization, encryption, and vulnerability-aware development from day one. Pursuing a Master's in Cybersecurity to deepen this practice.",
    icon: "shield",
  },
  {
    title: "Automation-Driven",
    description:
      "Manual processes are automation opportunities. From background jobs and CI pipelines to data-collection scrapers — if it repeats, it gets automated.",
    icon: "zap",
  },
  {
    title: "Production-Minded",
    description:
      "Every system is built to run in production. Real deployments on AWS, real users, real constraints. Not just demos — products that ship.",
    icon: "rocket",
  },
  {
    title: "Cloud Operations",
    description:
      "AWS-native deployments with EC2, S3, CloudFront, Aurora, and Docker. Infrastructure that's reproducible, scalable, and cost-aware.",
    icon: "cloud",
  },
  {
    title: "Traceability & Visibility",
    description:
      "Audit trails, structured logging, and operational visibility built into every system. Knowing what happened and when is not optional.",
    icon: "activity",
  },
  {
    title: "Practical & Maintainable",
    description:
      "Clean architecture, strong typing, clear naming, and code structured for the next developer — including future me.",
    icon: "code",
  },
];

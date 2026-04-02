import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Juan Carlos Calvo González",
  title: "Full-Stack Engineer · Security-Focused",
  headline: ["I build secure systems", "that"],
  headlineAccent: "actually ship.",
  subheadline:
    "Full-stack engineer building production-grade web applications with Angular, Node.js, and AWS. Security-focused, automation-driven, and currently pursuing a Master's in Cybersecurity.",
  summary:
    "I build secure, production-minded web applications, internal tools, and automation workflows. My stack centers on Angular, Node.js, PostgreSQL, and AWS, with a strong focus on automation, cloud operations, traceability, and practical security. I'm currently pursuing a Master's in Cybersecurity at Universidad CENFOTEC — which shapes how I approach every system I design and deploy.",
  focusAreas: [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end applications with Angular, Node.js/Express, and PostgreSQL — from database schema to responsive UI.",
    },
    {
      title: "Security & Cybersecurity",
      description:
        "Authentication, authorization, encryption, and vulnerability-aware development. Master's in Cybersecurity in progress.",
    },
    {
      title: "Automation & Cloud Ops",
      description:
        "AWS deployments (EC2, S3, CloudFront, Aurora), Docker containers, automation pipelines, and background job systems.",
    },
  ],
  education: [
    {
      degree: "Master's in Cybersecurity",
      institution: "Universidad CENFOTEC",
      status: "ongoing",
    },
    {
      degree: "Bachelor's in Systems Engineering",
      institution: "Universidad Fidelitas",
      status: "completed",
    },
  ],
  languages: ["Spanish (Native)", "English (B2 — Working Proficiency)"],
  location: "San José, Costa Rica",
  phone: "+506 7070-1474",
  email: "jcalvog00@gmail.com",
  github: "https://github.com/juankcalvo",
  linkedin: "https://linkedin.com/in/yourusername",
  whatsapp:
    "https://wa.me/50670701474?text=Hola%20Juan%20Carlos%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20una%20oportunidad%20profesional.",
  available: true,
};

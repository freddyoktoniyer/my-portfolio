import type { Skill, SkillGroup, SupplementarySkills } from "@/types/portfolio";

const toSkills = (names: string[]): Skill[] => names.map((name) => ({ name }));

/** Technical foundation, grouped by where each technology sits in the system. */
export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: "Mobile",
    description:
      "Native Android and iOS, plus cross-platform with Kotlin Multiplatform and Flutter.",
    skills: toSkills([
      "Android",
      "Kotlin",
      "Compose",
      "Kotlin Multiplatform",
      "iOS",
      "Swift",
      "Flutter",
      "Dart",
    ]),
  },
  {
    id: "backend",
    title: "Backend",
    description: "Services and APIs that carry business rules, validation, and error handling.",
    skills: toSkills(["Go", "Laravel", "PHP", "CodeIgniter", "REST API"]),
  },
  {
    id: "web",
    title: "Web",
    description: "Web applications and internal business tools.",
    skills: toSkills([
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Angular",
      "Next.js",
      "jQuery",
      "HTML5 & CSS",
    ]),
  },
  {
    id: "database",
    title: "Database",
    description:
      "Relational data models behind application features, processing, and troubleshooting.",
    skills: toSkills(["PostgreSQL", "MySQL", "Oracle", "SQL Server", "SQL"]),
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Data exchange and access control between applications, internal services, and enterprise systems.",
    skills: toSkills([
      "REST API",
      "SAP",
      "OData",
      "Authentication",
      "JWT",
      "OAuth",
      "Internal Services",
      "External Systems",
    ]),
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Delivery practices from code to release.",
    skills: toSkills([
      "Git",
      "CI/CD",
      "Testing",
      "SIT / UAT",
      "Debugging",
      "Root Cause Analysis",
      "Performance Optimization",
      "Deployment",
    ]),
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "The environment applications are deployed to and run in.",
    skills: toSkills([
      "Server",
      "Cloud",
      "Networking",
      "Domain",
      "Storage",
      "Monitoring",
      "Containers",
    ]),
  },
];

export const supplementarySkills: SupplementarySkills = {
  title: "Also in the toolkit",
  groups: [
    {
      label: "Languages",
      skills: toSkills(["Java", "Python"]),
    },
    {
      label: "Automation",
      skills: toSkills(["UiPath"]),
    },
    {
      label: "Practice",
      skills: toSkills([
        "Software Architecture",
        "UI/UX",
        "Manual Testing",
        "Crash Fix",
        "Project Management",
        "Compliance Management",
      ]),
    },
  ],
};

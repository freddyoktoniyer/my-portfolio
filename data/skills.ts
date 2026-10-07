import type { Skill, SkillGroup, SupplementarySkills } from "@/types/portfolio";

const toSkills = (names: string[]): Skill[] => names.map((name) => ({ name }));

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Services and APIs that carry business rules, validation, and error handling.",
    skills: toSkills([
      "Golang",
      "Laravel",
      "PHP",
      "REST API",
      "Business Logic",
      "Validation",
      "Error Handling",
    ]),
  },
  {
    id: "mobile",
    title: "Mobile Engineering",
    description:
      "Native and cross-platform mobile development, and the APIs mobile apps depend on.",
    skills: toSkills([
      "Kotlin",
      "Android",
      "Swift",
      "iOS",
      "Compose",
      "Flutter",
      "Dart",
    ]),
  },
  {
    id: "integration",
    title: "System Integration",
    description:
      "Data exchange between applications, backend services, and SAP.",
    skills: toSkills([
      "REST",
      "SAP",
      "OData",
      "API Integration",
      "Data Exchange",
    ]),
  },
  {
    id: "data",
    title: "Data",
    description:
      "Relational databases behind application features, processing, and troubleshooting.",
    skills: toSkills([
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "SQL Queries",
      "Data Processing",
    ]),
  },
  {
    id: "quality",
    title: "Quality & Reliability",
    description:
      "Testing, root cause analysis, and production support across the SDLC.",
    skills: toSkills([
      "Testing",
      "SIT",
      "UAT",
      "Troubleshooting",
      "Root Cause Analysis",
      "Production Support",
      "Performance",
    ]),
  },
];

export const supplementarySkills: SupplementarySkills = {
  title: "Also in the toolkit",
  groups: [
    {
      label: "Web",
      skills: toSkills([
        "Vue.js",
        "Angular",
        "CodeIgniter",
        "JavaScript",
        "jQuery",
        "HTML5",
        "CSS",
      ]),
    },
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
        "Crash Fix",
        "Manual Testing",
        "Project Management",
        "Compliance Management",
      ]),
    },
  ],
};

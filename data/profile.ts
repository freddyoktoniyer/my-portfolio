import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Freddy Oktoniyer S",
  shortName: "Freddy",
  title: "Backend / Full Stack Software Engineer",
  headline:
    "Building reliable software across backend services, mobile applications, APIs, and enterprise systems.",
  positioning:
    "Building reliable software across backend services, REST APIs, mobile applications, enterprise integrations, and database-driven systems.",
  location: "Tangerang, Indonesia",
  email: "freddy.oktoniyer@gmail.com",
  // Taken from the hyperlink embedded in the CV.
  linkedin: "https://www.linkedin.com/in/freddy-oktoniyer-s-9b3408182/",
  experience: "5+ years",
  focus: "Backend · APIs · Integration",
  current: {
    role: "Fullstack Developer",
    company: "VIVERE GROUP",
  },
  resume: {
    href: "/resume/Freddy-Oktoniyer-S-CV.pdf",
    fileName: "Freddy-Oktoniyer-S-CV.pdf",
  },
  languages: [
    { label: "Indonesian", value: "Native" },
    { label: "English", value: "Intermediate" },
  ],
};

export const about = {
  title: "Engineering across the system, not just the interface.",
  paragraphs: [
    "Software engineer with 5+ years of professional experience developing and maintaining backend services, RESTful APIs, mobile applications, system integrations, and database-driven applications.",
    "My work follows a business requirement through the stack: the API contract a mobile app depends on, the server-side logic and validation behind it, the relational data underneath, and the integration with enterprise systems such as SAP through OData.",
    "I support applications across the software development lifecycle — requirements analysis, solution design, development, SIT and UAT, release, and production troubleshooting.",
  ],
  collaborators: [
    "Mobile & frontend developers",
    "QA",
    "Product",
    "Business users",
    "Enterprise system teams",
  ],
  lifecycle: [
    "Requirements",
    "Design",
    "Development",
    "SIT / UAT",
    "Release",
    "Support",
  ],
} as const;

export const contact = {
  titleLines: ["Have a system", "worth building?"],
  description:
    "Let's talk about software, systems, integrations, or the next product.",
} as const;

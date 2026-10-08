import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Freddy Oktoniyer S",
  shortName: "Freddy",
  title: "System Analyst · Technical Business Analyst · IT Consultant",
  headline: ["From Business Problems", "to Technical Solutions."],
  tagline: "I translate business problems into systems that work.",
  positioning:
    "I bridge the gap between business requirements, system design, and technology implementation.",
  summary:
    "With a background in Information Systems and hands-on experience across mobile, web, backend, APIs, databases, system integration, and software architecture, I analyze business processes, translate requirements into system solutions, and work closely with stakeholders to deliver practical, maintainable technology.",
  background: "Information Systems",
  location: "Tangerang, Indonesia",
  email: "freddy.oktoniyer@gmail.com",
  // Taken from the hyperlink embedded in the CV.
  linkedin: "https://www.linkedin.com/in/freddy-oktoniyer-s-9b3408182/",
  experience: "5+ years",
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
  title: "I don't just build systems. I understand why they need to exist.",
  lead: "I am a Software Engineer with an Information Systems background and strong experience bridging business requirements with technical solutions.",
  intro:
    "My background started in software engineering, but my approach to solving problems has always gone beyond writing code.",
  question: {
    instead: "How do I code this?",
    first: "What problem are we trying to solve?",
  },
  analysisPath: [
    "Business process",
    "Requirement",
    "System behavior",
    "Data",
    "Integration",
    "Technical solution",
    "Implementation",
  ],
  paragraphs: [
    "I work with Business Analysts, Product teams, business users, UI/UX teams, vendors, and engineering teams to understand requirements, clarify ambiguities, analyze impact, design solutions, and make sure the final implementation matches the intended business process.",
    "My technical background lets me go one step further: I can take a business requirement and understand how it should actually be implemented within a real system.",
  ],
  collaborators: [
    "Business Analysts",
    "Product",
    "Business users",
    "UI/UX",
    "Vendors",
    "QA",
    "Engineering teams",
  ],
  lifecycle: [
    "Requirements",
    "Analysis",
    "Design",
    "Development",
    "SIT / UAT",
    "Release",
    "Support",
  ],
  openTo: [
    "System Analyst",
    "Technical Business Analyst",
    "IT Consultant",
    "Technical Consultant",
    "Solution Architect",
    "Product Owner",
  ],
} as const;

export const contact = {
  titleLines: ["Have a business problem", "worth solving?"],
  description:
    "Let's talk about business processes, requirements, system design, integrations, or the next solution.",
} as const;

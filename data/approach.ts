import type {
  ArchitectureLayer,
  CapabilityGroup,
  Comparison,
  LayerSummary,
  ProcessStep,
  StrengthLayer,
} from "@/types/portfolio";

/** Stages shown in the hero visual and the Open Graph image. */
export const heroStages: LayerSummary[] = [
  { id: "business", label: "Business", detail: "Problem & process" },
  { id: "requirement", label: "Requirement", detail: "AS-IS → TO-BE" },
  { id: "system", label: "System", detail: "Flow · API · Data" },
  { id: "technology", label: "Technology", detail: "Mobile · Web · Backend" },
  { id: "delivery", label: "Delivery", detail: "UAT · Release" },
];

export const heroVisual = {
  title: "Business → System → Technology",
  caption: "From the business problem to a working, validated system.",
};

export const coreStrength = {
  // Non-breaking spaces keep each "×" on the line of the word before it.
  title: "Business × System × Technology.",
  description:
    "A requirement rarely stays in one layer. I work across all three — why the system is needed, how it should behave, and how it is built.",
  layers: [
    {
      id: "business",
      label: "Business",
      question: "Why does the system need to exist?",
      items: [
        "Business Process Analysis",
        "Requirement Analysis",
        "AS-IS / TO-BE Analysis",
        "Business Flow",
        "Problem Identification",
        "Impact Analysis",
        "Stakeholder Communication",
        "Business Requirement Understanding",
      ],
    },
    {
      id: "system",
      label: "System",
      question: "How should the system behave?",
      items: [
        "System Analysis",
        "Functional Requirements",
        "System Flow",
        "Use Case",
        "Sequence Diagram",
        "Data Flow",
        "Database Design",
        "API Design",
        "Integration Design",
        "Solution Design",
      ],
    },
    {
      id: "technology",
      label: "Technology",
      question: "How is it built and run?",
      items: [
        "Mobile Applications",
        "Web Applications",
        "Backend",
        "REST API",
        "Database",
        "Authentication & Authorization",
        "System Integration",
        "CI/CD",
        "Cloud & Infrastructure",
        "Performance & Security",
      ],
    },
  ] satisfies StrengthLayer[],
};

export const differentiator = {
  title: "Business understanding without losing technical depth.",
  profiles: [
    {
      label: "Functional analyst",
      description:
        "May understand the business process, but relies on engineering teams to judge technical feasibility.",
    },
    {
      label: "Traditional developer",
      description:
        "May understand the technology, but focuses primarily on implementation.",
    },
    {
      label: "Where I work",
      description:
        "Between both — from the business problem to the system solution, with the implementation understood end to end.",
      highlight: true,
    },
  ] satisfies Comparison[],
  statement:
    "I can understand the business requirement, analyze the system impact, design the technical solution, and carry it through with both business and technical stakeholders.",
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "analysis",
    title: "Business & System Analysis",
    description: "Understanding the process, and defining what the system must do.",
    items: [
      {
        title: "Requirement Analysis",
        description:
          "Translate business requirements into clear, actionable system requirements.",
      },
      {
        title: "Business Process Analysis",
        description:
          "Understand existing workflows and identify opportunities for improvement.",
      },
      {
        title: "AS-IS / TO-BE Analysis",
        description: "Analyze current processes and design improved target processes.",
      },
      {
        title: "Impact Analysis",
        description:
          "Evaluate how a change affects existing functionality, data, integrations, and users.",
      },
      {
        title: "Functional Analysis",
        description:
          "Define system behavior, validation, business rules, and edge cases.",
      },
      {
        title: "Stakeholder Collaboration",
        description:
          "Work with business, Product, BAs, UI/UX, QA, vendors, and engineering teams.",
      },
    ],
  },
  {
    id: "solution",
    title: "Solution & Technical Analysis",
    description: "Designing how the system will do it — and checking that it can.",
    items: [
      {
        title: "System Design",
        description:
          "Design solutions around business requirements and technical constraints.",
      },
      {
        title: "API Design",
        description:
          "Design REST APIs around business processes, data requirements, and system interactions.",
      },
      {
        title: "Database Design",
        description:
          "Design tables, relationships, queries, and data structures from application requirements.",
      },
      {
        title: "System Integration",
        description:
          "Design and implement integrations between internal services and external systems such as SAP.",
      },
      {
        title: "Architecture",
        description:
          "Understand and design application architecture across mobile, web, backend, database, and infrastructure.",
      },
      {
        title: "Security",
        description:
          "Consider authentication, authorization, validation, access control, and secure data handling.",
      },
      {
        title: "Performance & Reliability",
        description:
          "Weigh performance, scalability, maintainability, and reliability in every design.",
      },
    ],
  },
];

/**
 * The working approach: the path a requirement takes from the business
 * problem to a validated release. `detail` is the layer each step sits in.
 */
export const workingApproach: ArchitectureLayer[] = [
  {
    id: "business-problem",
    label: "Business problem",
    detail: "Business",
    description:
      "Identify the actual business problem and what stakeholders expect — before jumping into implementation.",
  },
  {
    id: "process",
    label: "Understand the process",
    detail: "Business",
    description:
      "Study how the work is done today: the existing process, the systems it touches, its dependencies, and its constraints.",
  },
  {
    id: "as-is",
    label: "AS-IS analysis",
    detail: "Business",
    description:
      "Analyze the current process — its dependencies, bottlenecks, risks, and improvement opportunities.",
  },
  {
    id: "pain-points",
    label: "Identify pain points",
    detail: "Business",
    description:
      "Pinpoint where the process breaks down: manual steps, validation gaps, and approval or data dependencies.",
    technologies: ["Manual steps", "Validation gaps", "Approval dependencies", "Data dependencies"],
  },
  {
    id: "requirements",
    label: "Requirement analysis",
    detail: "System",
    description:
      "Translate business needs into functional and technical requirements: system behavior, validation, business rules, and edge cases.",
  },
  {
    id: "to-be",
    label: "TO-BE process",
    detail: "System",
    description:
      "Define the target process, and how the system should behave within it.",
  },
  {
    id: "impact-analysis",
    label: "Impact analysis",
    detail: "System",
    description:
      "Before changing anything, evaluate what the change touches — to avoid regressions and unintended disruption to the business process.",
    technologies: [
      "Existing features",
      "Business processes",
      "Database",
      "APIs",
      "Integrations",
      "Mobile / Web apps",
      "Security",
      "Performance",
      "Existing users",
    ],
  },
  {
    id: "system-design",
    label: "System design",
    detail: "System",
    description: "Translate the requirements into a system design.",
    technologies: [
      "System flow",
      "Use case",
      "API",
      "Database",
      "Integration",
      "Architecture",
      "Validation",
      "Error handling",
    ],
  },
  {
    id: "technical-solution",
    label: "Technical solution",
    detail: "Technology",
    description:
      "Choose the approach by weighing business value against complexity, cost, risk, and maintainability.",
  },
  {
    id: "implementation",
    label: "Implementation",
    detail: "Technology",
    description:
      "Build it with the engineering team — across mobile, web, backend, database, and integrations — with the implementation details understood.",
  },
  {
    id: "testing",
    label: "Testing / UAT",
    detail: "Technology",
    description:
      "Verify the implementation against the business requirements through testing, SIT, and UAT.",
  },
  {
    id: "release",
    label: "Release & validation",
    detail: "Technology",
    description:
      "Release, monitor, and confirm the solution holds up in production.",
    technologies: ["Business-correct", "Technically feasible", "Maintainable"],
  },
];

export const consultingApproach: ProcessStep[] = [
  {
    title: "Discover",
    description: "Understand the business problem and stakeholder expectations.",
  },
  {
    title: "Analyze",
    description: "Study the existing process, systems, dependencies, and constraints.",
  },
  {
    title: "Define",
    description: "Translate business needs into functional and technical requirements.",
  },
  {
    title: "Design",
    description: "Create the target process and the system solution.",
  },
  {
    title: "Evaluate",
    description:
      "Compare alternatives on business value × complexity × cost × risk × maintainability.",
  },
  {
    title: "Implement",
    description: "Work closely with engineering teams to turn the solution into reality.",
  },
  {
    title: "Validate",
    description: "Verify the implementation against business requirements through testing and UAT.",
  },
];

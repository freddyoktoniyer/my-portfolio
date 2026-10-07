import type {
  ArchitectureLayer,
  ArchitectureModel,
  LayerSummary,
  Principle,
  ProcessStep,
} from "@/types/portfolio";

/** Layers shown in the hero system visual. */
export const heroLayers: LayerSummary[] = [
  { id: "mobile", label: "Mobile", detail: "Android / iOS" },
  { id: "api", label: "API", detail: "REST" },
  { id: "backend", label: "Backend", detail: "Golang / Laravel" },
  { id: "data", label: "Data", detail: "PostgreSQL / MySQL / SQL Server" },
  { id: "enterprise", label: "Enterprise", detail: "SAP / OData" },
];

export const philosophy = {
  title: "How I work",
  loop: ["Understand", "Design", "Build", "Validate", "Improve"],
  principles: [
    {
      title: "Understand",
      description:
        "Understand business requirements and system context before implementation.",
    },
    {
      title: "Design",
      description:
        "Translate requirements into maintainable technical solutions.",
    },
    {
      title: "Build",
      description:
        "Develop reliable applications, APIs, integrations, and services.",
    },
    {
      title: "Improve",
      description:
        "Investigate root causes, improve reliability, and continuously refine the system.",
    },
  ] satisfies Principle[],
};

/** Request path of the backend work at VIVERE GROUP, as described in the CV. */
export const vivereArchitecture: ArchitectureModel = {
  title: "Architecture / VIVERE GROUP",
  note: "Simplified request path based on my CV — not an infrastructure map.",
  nodes: {
    mobile: {
      id: "mobile",
      label: "Android · iOS",
      detail: "Mobile applications",
      description:
        "Android and iOS applications consuming the RESTful APIs, with contracts agreed together with mobile developers.",
    },
    api: {
      id: "api",
      label: "REST API",
      detail: "Contract",
      description:
        "Request/response structures, authentication, request validation, response handling, and error responses.",
    },
    backend: {
      id: "backend",
      label: "Golang / Laravel",
      detail: "Backend services",
      description:
        "Server-side business logic, service flows, validation, data processing, and error handling.",
      technologies: ["Business Logic", "Validation", "Error Handling"],
    },
    database: {
      id: "database",
      label: "Database",
      detail: "Relational · SQL",
      description:
        "Relational databases and SQL queries supporting application features, data processing, and troubleshooting.",
    },
    sap: {
      id: "sap",
      label: "SAP",
      detail: "OData",
      description:
        "Integration with SAP through OData APIs: data exchange, request/response mapping, validation, and integration flow handling.",
    },
  },
  edges: [
    { from: "mobile", to: "api" },
    { from: "api", to: "backend" },
    { from: "backend", to: "database" },
    { from: "backend", to: "sap" },
  ],
};

export const systemLayers: ArchitectureLayer[] = [
  {
    id: "user",
    label: "User",
    detail: "Requirements",
    description:
      "Where requirements originate. Business processes and the people who run them define what the system must do — and confirm it during UAT.",
    technologies: ["Requirements Analysis", "UAT"],
  },
  {
    id: "mobile",
    label: "Mobile Application",
    detail: "Android / iOS",
    description:
      "Applications that carry user workflows and consume backend services through agreed API contracts.",
    technologies: ["Kotlin", "Swift", "Flutter"],
  },
  {
    id: "api",
    label: "API",
    detail: "REST",
    description:
      "Defines the contract between applications and backend services: request/response structures, authentication, and validation.",
    technologies: ["REST", "Authentication", "Validation"],
  },
  {
    id: "backend",
    label: "Backend",
    detail: "Golang / Laravel",
    description:
      "Handles business logic, validation, processing, and service workflows.",
    technologies: ["Golang", "Laravel", "PHP"],
  },
  {
    id: "logic",
    label: "Business Logic",
    detail: "Rules & workflows",
    description:
      "Translates functional requirements into server-side rules and service workflows, with error handling that protects data integrity.",
    technologies: ["Service Workflows", "Error Handling"],
  },
  {
    id: "database",
    label: "Database",
    detail: "Relational",
    description:
      "Relational data accessed through SQL to support application features, data processing, and troubleshooting.",
    technologies: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    id: "enterprise",
    label: "Enterprise System",
    detail: "SAP / OData",
    description:
      "Integrates application services with enterprise systems such as SAP, through OData and REST APIs.",
    technologies: ["SAP", "OData"],
  },
];

export const problemSolvingSteps: ProcessStep[] = [
  {
    title: "Understand",
    description: "Requirements and business context.",
  },
  {
    title: "Analyze",
    description:
      "Investigate application, API, data, and integration behavior.",
  },
  {
    title: "Design",
    description: "Define the technical approach.",
  },
  {
    title: "Build",
    description: "Implement the solution.",
  },
  {
    title: "Validate",
    description: "Testing, SIT, UAT, and debugging.",
  },
  {
    title: "Deploy",
    description: "Release and production support.",
  },
  {
    title: "Improve",
    description: "Root cause analysis, reliability, and optimization.",
  },
];

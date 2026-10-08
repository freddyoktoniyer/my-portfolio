import type { ArchitectureLayer, ArchitectureModel } from "@/types/portfolio";

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
        "Native Android (Kotlin) and iOS (Swift) applications consuming the RESTful APIs, with contracts agreed together with mobile developers.",
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
    id: "business",
    label: "Business",
    detail: "Process & requirements",
    description:
      "Where requirements originate. Business processes and the people who run them define what the system must do — and confirm it during UAT.",
    technologies: ["Requirement Analysis", "AS-IS / TO-BE", "UAT"],
  },
  {
    id: "client",
    label: "Mobile & Web",
    detail: "Android / iOS / Web",
    description:
      "Applications that carry user workflows and consume backend services through agreed API contracts.",
    technologies: ["Kotlin", "Swift", "Kotlin Multiplatform", "Flutter", "Vue.js", "Next.js"],
  },
  {
    id: "api",
    label: "API",
    detail: "REST",
    description:
      "Defines the contract between applications and backend services: request/response structures, authentication, and validation.",
    technologies: ["REST", "JWT", "OAuth", "Validation"],
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
    technologies: ["Business Rules", "Service Workflows", "Error Handling"],
  },
  {
    id: "database",
    label: "Database",
    detail: "Relational",
    description:
      "Relational data accessed through SQL to support application features, data processing, and troubleshooting.",
    technologies: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"],
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

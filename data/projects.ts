import type { Project } from "@/types/portfolio";

const OUTCOME_FOCUS =
  "Improving reliability, maintainability, integration, and business workflow support.";

const VIVERE = {
  company: "VIVERE GROUP",
  role: "Fullstack Developer",
  period: "09/2024 — Present",
};

const GARUDA_YAMATO = {
  company: "PT. Garuda Yamato Steel",
  role: "Application Developer & Support Engineer",
  period: "12/2022 — 09/2024",
};

export const projects: Project[] = [
  {
    slug: "backend-api-services",
    category: "Backend / API",
    title: "Backend & API Services",
    summary:
      "Designing and maintaining RESTful services for mobile applications and business processes.",
    overview:
      "Backend services and RESTful APIs built with Golang and Laravel, consumed by Android and iOS applications and by internal business processes.",
    technologies: ["Golang", "Laravel", "REST API", "SQL"],
    focus: [
      "Authentication",
      "Request validation",
      "Business logic",
      "Error handling",
    ],
    flow: ["Android / iOS", "REST API", "Golang / Laravel", "Database"],
    approach: [
      "Translate functional requirements into maintainable server-side logic and service workflows.",
      "Define API contracts and request/response structures together with mobile and frontend developers.",
      "Implement validation and error handling to keep data consistent across application flows.",
      "Optimize backend and API processes for response handling, performance, and service stability.",
    ],
    context: [VIVERE],
    outcomeFocus: OUTCOME_FOCUS,
  },
  {
    slug: "mobile-application-ecosystem",
    category: "Mobile",
    title: "Mobile Application Ecosystem",
    summary:
      "Applications consuming backend services and supporting business workflows.",
    overview:
      "Mobile applications and the backend services behind them — from API contracts and request/response structures to end-to-end application workflows.",
    technologies: ["Android", "iOS", "Kotlin", "Swift", "Flutter", "Dart"],
    focus: [
      "API contracts",
      "Integration requirements",
      "End-to-end workflows",
      "Performance",
    ],
    flow: ["Android / iOS / Flutter", "API contract", "Backend services"],
    approach: [
      "Build backend APIs consumed by Android and iOS applications.",
      "Collaborate with mobile developers on request/response structures and integration requirements.",
      "Connect mobile applications, backend systems, and enterprise systems to support end-to-end business processes.",
      "Develop business applications with Flutter alongside web and backend work.",
    ],
    context: [VIVERE, GARUDA_YAMATO],
    outcomeFocus: OUTCOME_FOCUS,
  },
  {
    slug: "enterprise-system-integration",
    category: "Integration",
    title: "Enterprise System Integration",
    summary:
      "Integration between applications, backend services, and enterprise systems.",
    overview:
      "Backend services integrated with SAP systems through OData and REST APIs, supporting enterprise data exchange and business processes.",
    technologies: ["SAP", "OData", "REST API"],
    focus: [
      "Data exchange",
      "Request/response mapping",
      "Validation",
      "Integration flow handling",
    ],
    flow: ["Application", "Backend service", "OData / REST", "SAP"],
    approach: [
      "Integrate backend services with SAP through OData APIs, mapping requests and responses between systems.",
      "Validate data at integration boundaries to protect integrity and consistency.",
      "Maintain REST API integrations for data exchange between applications and enterprise systems.",
      "Troubleshoot integration failures through root cause analysis.",
    ],
    context: [VIVERE, GARUDA_YAMATO],
    outcomeFocus: OUTCOME_FOCUS,
  },
  {
    slug: "business-applications",
    category: "Business Applications",
    title: "Business Applications",
    summary:
      "Enterprise and internal applications supporting operational workflows.",
    overview:
      "Web applications supporting operational and business workflows, built and maintained from requirements and documentation through testing, release, and support.",
    technologies: [
      "Laravel",
      "CodeIgniter",
      "Vue.js",
      "Angular",
      "SQL Server",
      "MySQL",
    ],
    focus: [
      "Requirements analysis",
      "Application development",
      "SIT / UAT",
      "Production support",
    ],
    flow: ["Business process", "Web application", "Database"],
    approach: [
      "Define software requirements from business needs and translate them into technical specifications.",
      "Create and maintain BRDs, system specifications, test scenarios, and test reports.",
      "Support SIT and UAT, then troubleshoot and correct production data and defects.",
    ],
    context: [
      GARUDA_YAMATO,
      {
        company: "PDSI Kementerian Komunikasi dan Informatika",
        role: "Fullstack Developer",
        period: "01/2022 — 06/2022",
      },
      {
        company: "PT PIN",
        role: "Fullstack Developer",
        period: "09/2021 — 12/2021",
      },
    ],
    examples: [
      {
        name: "Unmanned weighbridge management system",
        stack: ["Laravel", "Vue.js"],
        company: "PT. Garuda Yamato Steel",
      },
      {
        name: "Vendor Management and customer pre-registration applications",
        stack: ["CodeIgniter 3"],
        company: "PT. Garuda Yamato Steel",
      },
      {
        name: "Web-based activity scheduling application",
        stack: ["CodeIgniter 3", "MySQL"],
        company: "PDSI Kementerian Komunikasi dan Informatika",
      },
      {
        name: "E-commerce application for Smart Farming",
        stack: ["CodeIgniter 3", "MySQL"],
        company: "PT PIN",
      },
    ],
    outcomeFocus: OUTCOME_FOCUS,
  },
];

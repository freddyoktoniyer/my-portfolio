import { vivereArchitecture } from "@/data/engineering";
import type { CareerStage, DocumentedSystem, Experience } from "@/types/portfolio";

/** Business applications at PT. Garuda Yamato Steel, as documented in the CV. */
export const garudaYamatoSystems: DocumentedSystem[] = [
  {
    name: "Unmanned weighbridge management system",
    stack: ["Laravel", "Vue.js"],
    company: "PT. Garuda Yamato Steel",
  },
  {
    name: "Vendor Management application",
    stack: ["CodeIgniter 3"],
    company: "PT. Garuda Yamato Steel",
  },
  {
    name: "Customer pre-registration application",
    stack: ["CodeIgniter 3"],
    company: "PT. Garuda Yamato Steel",
  },
];

/**
 * Job titles are exactly as held. The highlights surface the analysis and
 * solution-design work that was part of each role.
 */
export const experiences: Experience[] = [
  {
    id: "vivere",
    company: "VIVERE GROUP",
    companyUrl: "https://www.vivere.co.id/",
    role: "Fullstack Developer",
    period: "09/2024 — Present",
    years: "2024 — Present",
    current: true,
    tier: "primary",
    description:
      "Analyze business requirements and deliver the systems behind them — across Android, iOS, web, backend services, APIs, databases, and SAP integration.",
    capabilities: [
      {
        area: "Analysis",
        items: ["Requirements", "Business process", "Impact analysis"],
      },
      {
        area: "Solution design",
        items: ["System flow", "API contracts", "Data structures", "Validation rules"],
      },
      { area: "Mobile & Web", items: ["Android (Kotlin)", "iOS (Swift)", "Web"] },
      {
        area: "Backend & API",
        items: ["Golang", "Laravel", "REST", "Authentication"],
      },
      { area: "Integration", items: ["SAP", "OData"] },
      {
        area: "Delivery",
        items: ["SIT / UAT", "Release", "Production support"],
      },
    ],
    highlights: [
      "Collaborate with Business Analysts, Product teams, business users, UI/UX teams, vendors, and engineering teams to clarify requirements and define system behavior.",
      "Analyze business processes and system requirements, and translate them into system flows, API specifications, data structures, validation rules, and technical solutions.",
      "Assess the impact of enhancements across applications, APIs, databases, and integrations before implementation, to minimize regressions and unintended disruption to business processes.",
      "Design and implement solutions across Android (Kotlin), iOS (Swift), web, backend, and database layers.",
      "Design and maintain RESTful APIs in Golang consumed by Android and iOS applications — authentication, request validation, business logic, response handling, and error handling.",
      "Integrate backend services with SAP through OData APIs, including data exchange, request/response mapping, validation, and integration flow handling.",
      "Define API contracts, request/response structures, and integration requirements with mobile and frontend developers.",
      "Investigate production and functional issues by analyzing business flow and system behavior before isolating technical defects — including issues raised by testers and business users during SIT and UAT.",
      "Work across Laravel and Golang codebases to deliver new features, maintain existing services, and improve performance, reliability, and service stability.",
      "Contribute to solution design, documentation, release preparation, deployment, and post-production monitoring.",
    ],
    technologies: [
      "Golang",
      "Laravel",
      "Kotlin",
      "Swift",
      "REST API",
      "SAP",
      "OData",
      "Oracle",
      "PostgreSQL",
      "MySQL",
    ],
    architecture: vivereArchitecture,
  },
  {
    id: "garuda-yamato",
    company: "PT. Garuda Yamato Steel",
    companyUrl: "https://www.garudayamatosteel.com/",
    role: "Application Developer & Support Engineer",
    period: "12/2022 — 09/2024",
    years: "2022 — 2024",
    current: false,
    tier: "secondary",
    description:
      "Defined requirements, documented systems, and developed, integrated, and supported business applications — from BRD through SAP integration, SIT/UAT, and production support.",
    pillars: [
      "Requirements & Documentation",
      "Application Development",
      "Enterprise Integration",
      "Application Support",
    ],
    metric: {
      value: "34",
      label: "UiPath RPA processes monitored and enhanced",
    },
    systems: garudaYamatoSystems,
    highlights: [
      "Defined software requirements from business needs and translated them into technical specifications.",
      "Created and maintained Business Requirements Documents (BRD), system specifications, technical documentation, test scenarios, and test reports.",
      "Worked closely with operations, business users, and development teams to investigate issues and streamline debugging.",
      "Developed and maintained business applications using Laravel, CodeIgniter 3, Vue.js, Angular, JavaScript, Go, Flutter, and SQL Server.",
      "Developed and maintained REST API integrations supporting data exchange between applications and enterprise systems.",
      "Integrated application data with SAP systems through APIs, improving data synchronization and operational integration.",
      "Assisted teams during System Integration Testing (SIT) and User Acceptance Testing (UAT).",
      "Performed application support, production troubleshooting, and data correction to maintain system availability, data accuracy, and integrity.",
      "Identified, documented, and analyzed front-end and back-end production bugs to support root cause analysis and continuous improvement.",
    ],
    technologies: [
      "Laravel",
      "CodeIgniter 3",
      "Vue.js",
      "Angular",
      "JavaScript",
      "Go",
      "Flutter",
      "SQL Server",
      "SAP",
      "UiPath",
    ],
  },
  {
    id: "kost-profesional",
    company: "PT. Kost Profesional Indonesia",
    role: "Fullstack Developer",
    period: "07/2022 — 12/2022",
    years: "2022",
    current: false,
    tier: "compact",
    description:
      "Requirements through release for Laravel 9 applications, across the full software development lifecycle.",
    highlights: [
      "Gathered and translated technical and business requirements into application features.",
      "Built and maintained frontend and backend applications using Laravel 9, from design and testing to documentation and release.",
      "Investigated production issues and analyzed recurring bugs, recommending improvements to minimize user impact and downtime.",
    ],
    technologies: ["Laravel 9"],
  },
  {
    id: "pdsi-kominfo",
    company: "PDSI Kementerian Komunikasi dan Informatika",
    role: "Fullstack Developer",
    period: "01/2022 — 06/2022",
    years: "2022",
    current: false,
    tier: "compact",
    description:
      "Analyzed requirements for, designed, and developed a web-based activity scheduling application.",
    highlights: [
      "Analyzed system requirements and recommended software improvements.",
      "Designed and developed a web-based activity scheduling application using CodeIgniter 3 and MySQL.",
      "Developed, tested, debugged, and maintained features, and produced technical documentation.",
    ],
    technologies: ["CodeIgniter 3", "MySQL"],
  },
  {
    id: "pt-pin",
    company: "PT PIN",
    role: "Fullstack Developer",
    period: "09/2021 — 12/2021",
    years: "2021",
    current: false,
    tier: "compact",
    description:
      "Designed and developed an e-commerce application for Smart Farming.",
    highlights: [
      "Collaborated with system analysts to translate client requirements into application functionality.",
      "Designed and developed an e-commerce application for Smart Farming using CodeIgniter 3 and MySQL.",
      "Performed testing, troubleshooting, and debugging; produced technical documentation and monitored application-supported business processes.",
    ],
    technologies: ["CodeIgniter 3", "MySQL"],
  },
  {
    id: "umkm-bogor",
    company: "UMKM Bogor City",
    role: "Web Developer - Frontend",
    period: "02/2021 — 05/2021",
    years: "2021",
    current: false,
    tier: "compact",
    description: "Developed a responsive landing page application.",
    highlights: [
      "Collaborated with system analysts to translate requirements into frontend implementation.",
      "Developed a responsive landing page application using HTML5 and CSS.",
      "Ensured usability, visual consistency, and reliable browser behavior.",
    ],
    technologies: ["HTML5", "CSS"],
  },
];

/**
 * A visual reading of the roles above — not an official title progression.
 */
export const careerStages: CareerStage[] = [
  {
    label: "Frontend",
    years: "2021",
    note: "Requirements from system analysts into responsive interfaces",
  },
  {
    label: "Full Stack",
    years: "2021 — 2022",
    note: "Client and business requirements into CodeIgniter 3 and Laravel 9 applications",
  },
  {
    label: "Requirements & Documentation",
    years: "2022 — 2024",
    note: "BRDs, system specifications, test scenarios, SIT and UAT",
  },
  {
    label: "Enterprise Integration",
    years: "2022 — Present",
    note: "REST and SAP integrations for business data",
  },
  {
    label: "Backend / API",
    years: "2024 — Present",
    note: "Golang and Laravel services, RESTful APIs",
  },
  {
    label: "Business × System × Technology",
    years: "Present",
    note: "Requirement and impact analysis, solution design, and delivery across the stack",
  },
];

import { vivereArchitecture } from "@/data/engineering";
import type { CareerStage, Experience } from "@/types/portfolio";

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
      "Develop and maintain backend services and RESTful APIs supporting mobile applications and enterprise business processes.",
    capabilities: [
      { area: "Backend", items: ["Golang", "Laravel"] },
      { area: "API", items: ["REST", "Validation", "Authentication"] },
      { area: "Integration", items: ["SAP", "OData"] },
      { area: "Mobile", items: ["Android", "iOS"] },
      {
        area: "Engineering",
        items: ["Testing", "Troubleshooting", "Production Support"],
      },
    ],
    highlights: [
      "Develop and maintain Golang backend services for mobile applications and internal business processes — application logic, service flows, validation, and data processing.",
      "Design and maintain RESTful APIs consumed by Android and iOS applications, covering authentication, request validation, business logic, response handling, and error handling.",
      "Build and integrate backend services with SAP through OData APIs, including data exchange, request/response mapping, validation, and integration flow handling.",
      "Define API contracts, request/response structures, and integration requirements with mobile and frontend developers.",
      "Work across Laravel and Golang codebases to deliver new features, maintain existing services, and improve performance, reliability, and service stability.",
      "Implement validation and error handling that maintain data integrity and consistency across application and integration flows.",
      "Work with relational databases and SQL queries to support features, data processing, and troubleshooting.",
      "Investigate backend, API, and integration issues through root cause analysis — including issues reported by testers and business users during SIT and UAT.",
      "Translate business processes and requirements into backend services, API specifications, and system workflows.",
      "Contribute to solution design, documentation, release preparation, deployment, and post-production monitoring.",
    ],
    technologies: ["Golang", "Laravel", "REST API", "SAP", "OData", "SQL"],
    focus: [
      "Backend",
      "REST API",
      "Mobile integration",
      "SAP",
      "Enterprise systems",
      "Production support",
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
      "Developed, integrated, and supported business applications — from requirements and documentation through SAP integration and production support.",
    pillars: [
      "Application Development",
      "Enterprise Integration",
      "Application Support",
    ],
    metric: {
      value: "34",
      label: "UiPath RPA processes monitored and enhanced",
    },
    systems: [
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
    ],
    highlights: [
      "Developed and maintained REST API integrations supporting data exchange between applications and enterprise systems.",
      "Integrated application data with SAP systems through APIs, improving data synchronization and operational integration.",
      "Performed application support, production troubleshooting, and data correction to maintain system availability, data accuracy, and integrity.",
      "Identified, documented, and analyzed front-end and back-end production bugs to support root cause analysis.",
      "Defined software requirements from business needs and maintained BRDs, system specifications, technical documentation, test scenarios, and test reports.",
      "Assisted teams during System Integration Testing (SIT) and User Acceptance Testing (UAT).",
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
    focus: [
      "Business applications",
      "REST API",
      "SAP integration",
      "Production support",
      "SIT / UAT",
      "RPA",
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
      "Frontend and backend application development with Laravel 9 across the software development lifecycle.",
    highlights: [
      "Built and maintained frontend and backend applications using Laravel 9.",
      "Translated technical and business requirements into application features, from design and testing to documentation and release.",
      "Investigated production issues and recurring bugs, recommending improvements to minimize user impact and downtime.",
    ],
    technologies: ["Laravel 9"],
    focus: ["Full stack", "Production support"],
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
      "Designed and developed a web-based activity scheduling application.",
    highlights: [
      "Designed and developed a web-based activity scheduling application using CodeIgniter 3 and MySQL.",
      "Analyzed system requirements, recommended software improvements, and produced technical documentation.",
      "Developed, tested, debugged, and maintained application features.",
    ],
    technologies: ["CodeIgniter 3", "MySQL"],
    focus: ["Full stack", "Requirements analysis"],
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
      "Designed and developed an e-commerce application for Smart Farming using CodeIgniter 3 and MySQL.",
      "Worked with system analysts to translate client requirements into application functionality.",
      "Performed application testing, troubleshooting, and debugging, and produced technical documentation.",
    ],
    technologies: ["CodeIgniter 3", "MySQL"],
    focus: ["Full stack", "Testing"],
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
      "Developed a responsive landing page application using HTML5 and CSS.",
      "Worked with system analysts to translate requirements into frontend implementation.",
      "Ensured usability, visual consistency, and reliable browser behavior.",
    ],
    technologies: ["HTML5", "CSS"],
    focus: ["Frontend"],
  },
];

/**
 * A visual reading of the roles above — not an official title progression.
 */
export const careerStages: CareerStage[] = [
  {
    label: "Frontend",
    years: "2021",
    note: "Responsive interfaces with HTML5 and CSS",
  },
  {
    label: "Full Stack",
    years: "2021 — 2022",
    note: "CodeIgniter 3, MySQL, and Laravel 9 applications",
  },
  {
    label: "Application Development",
    years: "2022 — 2024",
    note: "Business applications, documentation, and support",
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
    label: "System-Level Engineering",
    years: "Present",
    note: "Mobile, API, backend, data, and SAP as one system",
  },
];

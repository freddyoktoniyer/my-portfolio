import { garudaYamatoSystems } from "@/data/experience";
import type {
  CaseStudy,
  CaseStudyContext,
  DocumentedSystem,
} from "@/types/portfolio";

const VIVERE: CaseStudyContext = {
  company: "VIVERE GROUP",
  role: "Fullstack Developer",
  period: "09/2024 — Present",
};

const GARUDA_YAMATO: CaseStudyContext = {
  company: "PT. Garuda Yamato Steel",
  role: "Application Developer & Support Engineer",
  period: "12/2022 — 09/2024",
};

/** The order every case study reads in. */
export const caseStudyPath = [
  "Business problem",
  "Process",
  "Requirements",
  "System design",
  "Implementation",
];

/**
 * Case studies are written from the business problem down. No metrics,
 * clients, or outcomes are invented: sections without real detail are left
 * out, and confidential values (pricing, client names, URLs) are never shown.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "attendance-location-verification",
    category: "Mobile · Backend Integration",
    title: "Employee Attendance & Location Verification",
    summary:
      "An attendance system that validates each check-in by location, identity, time, and supporting evidence — while keeping the experience simple for employees.",
    role: [
      "System Analysis",
      "Solution Design",
      "Mobile Development",
      "Backend Integration",
    ],
    context: [VIVERE],
    cardFlow: ["Select building", "Location", "Selfie & face", "Submit", "Record"],
    blocks: [
      {
        kind: "text",
        title: "Business challenge",
        paragraphs: [
          "Organizations need a reliable attendance system that can validate employee attendance based on location, identity, time, and supporting evidence — while keeping the user experience simple.",
        ],
      },
      {
        kind: "list",
        title: "Analysis",
        intro: "The end-to-end attendance process, analyzed step by step:",
        items: [
          "Employee attendance initiation",
          "Building / location selection",
          "Location validation",
          "Camera / selfie capture",
          "Image validation",
          "Face validation",
          "Attendance submission",
          "Backend validation",
          "Attendance recording",
          "History and notification flow",
        ],
      },
      {
        kind: "process",
        title: "Business flow",
        steps: [
          "Employee",
          "Select building",
          "Validate location",
          "Open camera",
          "Capture selfie",
          "Validate image / face",
          "Submit attendance",
          "Backend validation",
          "Record attendance",
        ],
        note: "Face validation runs on-device, before the attendance is submitted.",
      },
      {
        kind: "chain",
        title: "Technical perspective",
        steps: ["Mobile", "API", "Backend", "Database", "Business rules"],
        note: "The solution required coordination across every layer: native Android and iOS apps, REST APIs, Go and Laravel services, and the database.",
      },
      {
        kind: "list",
        title: "Considerations",
        inline: true,
        items: [
          "Validation",
          "Error handling",
          "API communication",
          "Image processing",
          "Security",
          "Performance",
          "User experience",
          "Cross-platform behavior",
        ],
      },
      {
        kind: "insight",
        title: "Key contribution",
        text: "Rather than treating the requirement as a simple attendance feature, I analyzed the complete business and system flow so that each validation step aligns with the intended business process.",
      },
    ],
    technologies: [
      "Kotlin",
      "Swift",
      "Go",
      "Laravel",
      "REST API",
      "Oracle",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    slug: "sales-quotation-approval",
    category: "Business Process · Workflow",
    title: "Sales Quotation & Approval Workflow",
    summary:
      "A sales process with multiple stages, pricing and discount rules, and approvals — represented correctly in the system, not just as a quotation screen.",
    role: [
      "Business Process Analysis",
      "System Analysis",
      "Solution Design",
      "Implementation",
    ],
    context: [VIVERE],
    cardFlow: ["Inquiry", "Pricing", "Discount", "Approval", "Quotation", "Order"],
    blocks: [
      {
        kind: "text",
        title: "Business challenge",
        paragraphs: [
          "Sales processes involve multiple stages, business rules, pricing, discounts, approvals, and validations.",
          "The challenge was not simply creating a quotation screen, but making sure the system correctly represents the actual sales process and its business rules.",
        ],
      },
      {
        kind: "chain",
        title: "Process scope",
        steps: [
          "Prospecting",
          "Inquiry",
          "Product selection",
          "Pricing",
          "Discount",
          "Approval",
          "Quotation",
          "Order validation",
        ],
      },
      {
        kind: "list",
        title: "Analysis areas",
        items: [
          "Manual steps",
          "Validation gaps",
          "Approval dependencies",
          "Data dependencies",
          "Pricing rules",
          "Discount rules",
          "Impact on existing systems",
        ],
      },
      {
        kind: "process",
        title: "TO-BE process",
        steps: [
          "Sales prospect",
          "Inquiry",
          "Product selection",
          "Price calculation",
          "Discount",
          "Approval",
          "Quotation",
          "Order validation",
          "Order",
        ],
      },
      {
        kind: "list",
        title: "System analysis",
        intro: "Business rules translated into:",
        items: [
          "Functional requirements",
          "Validation rules",
          "Database relationships",
          "API requirements",
          "Approval logic",
          "Error handling",
          "UI behavior",
        ],
      },
      {
        kind: "chain",
        title: "Integration",
        steps: ["Mobile & web apps", "Backend services", "OData", "SAP"],
        note: "Available on both mobile and web, and integrated with SAP through OData.",
      },
      {
        kind: "insight",
        title: "Key strength",
        text: "The important part was not only implementing the feature, but understanding why the business process exists — and how each system component supports it.",
      },
    ],
    technologies: ["Mobile", "Web", "REST API", "SAP", "OData"],
  },
  {
    slug: "sales-intelligence-dashboard",
    category: "Data · Business Insight",
    title: "Sales Intelligence & Dashboard",
    summary:
      "Visibility into sales activities, pipeline progression, quotation status, and performance — designed to explain what is happening in the business, and why.",
    role: ["Business Process Analysis", "Data Analysis", "System Design"],
    status: {
      label: "Concept",
      note: "Solution design — not yet in production.",
    },
    context: [VIVERE],
    cardFlow: ["Transactions", "Business rules", "Aggregation", "Dashboard", "Insight"],
    blocks: [
      {
        kind: "text",
        title: "Business problem",
        paragraphs: [
          "Business teams need visibility into sales activities, pipeline progression, quotation status, and performance.",
        ],
      },
      {
        kind: "list",
        title: "Analysis",
        intro: "Business information the dashboard should surface:",
        items: [
          "Sales pipeline",
          "Prospecting",
          "Closed / dropped deals",
          "Drop causes",
          "Quotations",
          "Orders",
          "Sales performance",
        ],
      },
      {
        kind: "process",
        title: "Data flow",
        steps: [
          "Business transactions",
          "Data processing",
          "Business rules",
          "Aggregation",
          "Dashboard",
          "Business insight",
        ],
      },
      {
        kind: "insight",
        title: "Objective",
        text: "Not simply to display numbers — but to help answer: “What is happening in the business, and why?”",
      },
    ],
    technologies: [],
  },
  {
    slug: "cross-platform-enterprise-application",
    category: "Full Stack · Architecture",
    title: "Cross-Platform Enterprise Application",
    summary:
      "One enterprise application across Android, iOS, and web — with the API, backend, and database behind it, analyzed and built end to end.",
    role: ["System Analysis", "Architecture", "Fullstack Engineering"],
    context: [VIVERE],
    cardFlow: ["Android · iOS · Web", "API", "Backend", "Database"],
    blocks: [
      {
        kind: "text",
        title: "Scope",
        paragraphs: [
          "Android + iOS + Web + Backend + Database + API — with hands-on work on every layer.",
        ],
      },
      {
        kind: "list",
        title: "Responsibilities",
        items: [
          "Requirement analysis",
          "System flow",
          "API design",
          "Database design",
          "Mobile implementation",
          "Web implementation",
          "Backend implementation",
          "Integration",
          "Testing",
          "Deployment",
          "Production troubleshooting",
        ],
      },
      {
        kind: "insight",
        title: "Key advantage",
        text: "Because I work across multiple system layers, I can evaluate a requirement from both the business perspective and its technical feasibility and implementation impact.",
      },
    ],
    technologies: ["Kotlin", "Swift", "Web", "Go", "Laravel", "REST API", "SQL"],
  },
  {
    slug: "enterprise-system-integration",
    category: "Enterprise Integration",
    title: "Enterprise System Integration with SAP",
    summary:
      "Business processes that span mobile applications, backend services, and SAP — where exchanged data has to stay valid and consistent on both sides.",
    role: ["Integration Analysis", "Backend Engineering", "Troubleshooting"],
    context: [VIVERE, GARUDA_YAMATO],
    cardFlow: ["Application", "Backend service", "OData / REST", "SAP"],
    blocks: [
      {
        kind: "text",
        title: "Business context",
        paragraphs: [
          "End-to-end business processes do not stop at the application boundary. Data captured in applications has to be exchanged with SAP in a form both systems accept, without breaking data integrity on either side.",
        ],
      },
      {
        kind: "list",
        title: "Requirements",
        items: [
          "Data exchange between applications and SAP",
          "Request/response mapping between systems",
          "Validation at integration boundaries",
          "Integration flow handling",
          "Error handling that protects data integrity",
        ],
      },
      {
        kind: "chain",
        title: "System flow",
        steps: ["Application", "Backend service", "Mapping & validation", "OData / REST", "SAP"],
      },
      {
        kind: "list",
        title: "Implementation",
        items: [
          "Integrate backend services with SAP through OData APIs, mapping requests and responses between systems.",
          "Define API contracts and integration requirements with mobile and frontend developers.",
          "Validate data at integration boundaries to protect integrity and consistency.",
          "Maintain REST API integrations for data exchange between applications and enterprise systems.",
        ],
      },
      {
        kind: "list",
        title: "Testing & support",
        items: [
          "Investigate integration issues reported by testers and business users during SIT and UAT.",
          "Trace failures through request validation, business logic, data processing, and API responses to isolate the root cause.",
        ],
      },
      {
        kind: "text",
        title: "Result",
        paragraphs: [
          "Improved data synchronization and operational integration between applications and SAP at PT. Garuda Yamato Steel.",
        ],
      },
    ],
    technologies: ["SAP", "OData", "REST API", "Golang", "Laravel", "SQL"],
  },
];

/** Other systems documented in the CV, listed without a full case study. */
export const otherSystems: DocumentedSystem[] = [
  ...garudaYamatoSystems,
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
];

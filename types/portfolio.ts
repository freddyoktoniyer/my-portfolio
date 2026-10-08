export interface LabeledValue {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  shortName: string;
  /** Target roles, used as the hero subtitle and in metadata. */
  title: string;
  /** Hero heading, one entry per line. */
  headline: readonly string[];
  /** One-line personal brand statement. */
  tagline: string;
  /** Lead positioning sentence, used in the hero and the Open Graph image. */
  positioning: string;
  /** Supporting copy shown under the positioning sentence in the hero. */
  summary: string;
  /** Academic background, shown in the hero facts. */
  background: string;
  location: string;
  email: string;
  linkedin: string;
  experience: string;
  /** Actual current job title — kept separate from the target roles. */
  current: {
    role: string;
    company: string;
  };
  resume: {
    href: string;
    fileName: string;
  };
  languages: LabeledValue[];
}

export interface NavigationItem {
  /** Matches the `data-nav-section` attribute of the target sections. */
  id: string;
  label: string;
  href: `/#${string}`;
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  external: boolean;
  /** Shows a copy-to-clipboard button for the value. */
  copyable?: boolean;
}

export interface CapabilityRow {
  area: string;
  items: string[];
}

export interface DocumentedSystem {
  name: string;
  stack: string[];
  company: string;
}

export interface ExperienceMetric {
  value: string;
  label: string;
}

export type ExperienceTier = "primary" | "secondary" | "compact";

export type ArchitectureNodeId = "mobile" | "api" | "backend" | "database" | "sap";

/** Request path diagram: mobile → API → backend → (database | SAP). */
export interface ArchitectureModel {
  title: string;
  note: string;
  nodes: Record<ArchitectureNodeId, ArchitectureLayer>;
  edges: ArchitectureEdge[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  /** Job title exactly as held — never renamed to match a target role. */
  role: string;
  /** Exact period as written in the CV, e.g. "09/2024 — Present". */
  period: string;
  /** Year range for the timeline rail, e.g. "2024 — Present". */
  years: string;
  current: boolean;
  tier: ExperienceTier;
  description: string;
  highlights: string[];
  technologies: string[];
  capabilities?: CapabilityRow[];
  pillars?: string[];
  metric?: ExperienceMetric;
  systems?: DocumentedSystem[];
  architecture?: ArchitectureModel;
}

export interface CareerStage {
  label: string;
  years: string;
  note: string;
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface SupplementarySkills {
  title: string;
  groups: {
    label: string;
    skills: Skill[];
  }[];
}

/** One of the three layers in the Business × System × Technology section. */
export interface StrengthLayer {
  id: string;
  label: string;
  /** The question this layer answers about a requirement. */
  question: string;
  items: string[];
}

export interface Comparison {
  label: string;
  description: string;
  highlight?: boolean;
}

export interface Capability {
  title: string;
  description: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  items: Capability[];
}

export interface CaseStudyContext {
  company: string;
  role: string;
  period: string;
}

/**
 * A section of a case study. Case studies follow the analysis path
 * (problem → process → requirements → design → implementation), and only
 * sections backed by real detail are included — none are padded out.
 */
export type CaseStudyBlock =
  | { kind: "text"; title: string; paragraphs: string[] }
  | {
      kind: "list";
      title: string;
      intro?: string;
      items: string[];
      /** Short items rendered inline instead of as a bulleted list. */
      inline?: boolean;
    }
  /** Ordered process, drawn as a vertical flow. */
  | { kind: "process"; title: string; steps: string[]; note?: string }
  /** Layers or stages, drawn as a compact horizontal flow. */
  | { kind: "chain"; title: string; steps: string[]; note?: string }
  | { kind: "insight"; title: string; text: string };

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  /** The business challenge in one or two sentences, shown on the card. */
  summary: string;
  role: string[];
  context: CaseStudyContext[];
  /** Set when the work has not reached production. */
  status?: {
    label: string;
    note: string;
  };
  /** Short flow drawn on the card. */
  cardFlow: string[];
  blocks: CaseStudyBlock[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
}

export interface ArchitectureLayer {
  id: string;
  label: string;
  detail: string;
  description: string;
  technologies?: string[];
}

/** Compact layer summary used by the hero visual and the Open Graph image. */
export type LayerSummary = Pick<ArchitectureLayer, "id" | "label" | "detail">;

export interface ArchitectureEdge {
  from: ArchitectureNodeId;
  to: ArchitectureNodeId;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface LabeledValue {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  /** One-line positioning used in the hero. */
  headline: string;
  /** Longer positioning used for metadata and the about section. */
  positioning: string;
  location: string;
  email: string;
  linkedin: string;
  experience: string;
  /** Short summary of the engineering focus, shown under the hero. */
  focus: string;
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
  /** Matches the `data-nav-section` attribute of the target section. */
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
  focus: string[];
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

export interface ProjectContext {
  company: string;
  role: string;
  period: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  summary: string;
  overview: string;
  technologies: string[];
  focus: string[];
  /** Ordered system flow, rendered as a small diagram. */
  flow: string[];
  /** CV-backed description of how the work is approached. */
  approach: string[];
  context: ProjectContext[];
  examples?: DocumentedSystem[];
  /** Used in place of a "Result" section — no measurable results are claimed. */
  outcomeFocus: string;
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

export interface Principle {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

import { capabilityGroups } from "@/data/approach";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

/** schema.org Person data for search engines, built from the portfolio data. */
export function getPersonJsonLd(): Record<string, unknown> {
  const knowsAbout = new Set([
    ...capabilityGroups.flatMap((group) => group.items.map((item) => item.title)),
    ...skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
  ]);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    // The actual current job title; target roles live in the description.
    jobTitle: profile.current.role,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangerang",
      addressCountry: "ID",
    },
    sameAs: [profile.linkedin],
    worksFor: {
      "@type": "Organization",
      name: profile.current.company,
    },
    alumniOf: education.map((item) => ({
      "@type":
        item.degree === "Senior High School" ? "HighSchool" : "CollegeOrUniversity",
      name: item.institution,
    })),
    knowsAbout: [...knowsAbout],
  };
}

/** Serializes JSON-LD safely for inline `<script>` usage. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

import { profile } from "@/data/profile";

/**
 * Canonical site URL used for metadata, the sitemap, and robots.txt.
 * Optional: set SITE_URL when deploying. Vercel production URLs are
 * detected automatically.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_TITLE = `${profile.name} — ${profile.title}`;

export const SITE_DESCRIPTION =
  "Freddy Oktoniyer S — Software Engineer with an Information Systems background, bridging business requirements, system design, and technical implementation. System Analyst · Technical Business Analyst · IT Consultant.";

export const THEME_COLOR = "#09090b";

export const BUILT_WITH = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
] as const;

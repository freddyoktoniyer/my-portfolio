import { cacheLife } from "next/cache";

/**
 * Cache Components treats `new Date()` as request-specific, so the current
 * year is cached explicitly and refreshed on the longest preset lifetime.
 */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

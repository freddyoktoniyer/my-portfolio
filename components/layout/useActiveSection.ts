import { useEffect, useState } from "react";

/**
 * Returns the `data-nav-section` value of the section that currently crosses
 * the vertical centre of the viewport, or null (e.g. while in the hero).
 */
export function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-nav-section]");
    const intersecting = new Map<Element, string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            intersecting.set(target, target.dataset.navSection ?? "");
          } else {
            intersecting.delete(target);
          }
        }
        const [first] = intersecting.values();
        setActive(first ?? null);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

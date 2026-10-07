import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  /** Navigation item highlighted while this section is in view. */
  navSection: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  navSection,
  labelledBy,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      data-nav-section={navSection}
      aria-labelledby={labelledBy}
      tabIndex={-1}
      className={cn("relative py-24 outline-none sm:py-32", className)}
    >
      {children}
    </section>
  );
}

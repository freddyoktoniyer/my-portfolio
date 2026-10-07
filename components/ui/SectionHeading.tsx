import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Id of the heading element, referenced by the section's aria-labelledby. */
  id?: string;
  /** "display" is reserved for closing statements such as the contact section. */
  size?: "default" | "display";
  className?: string;
}

const titleSizes = {
  default: "text-4xl sm:text-5xl lg:text-6xl",
  display: "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  size = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", size === "display" && "max-w-5xl", className)}>
      <p className="label-mono flex items-center gap-3 text-fg-muted">
        <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-6 text-balance font-semibold tracking-display text-fg",
          titleSizes[size],
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}

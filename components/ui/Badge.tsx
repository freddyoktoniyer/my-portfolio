import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-line bg-surface text-fg-secondary",
  accent: "border-accent/30 bg-accent/10 text-accent-strong",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-2xs uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

interface BadgeListProps {
  items: readonly string[];
  label: string;
  className?: string;
}

/** A labelled list of technology badges. */
export function BadgeList({ items, label, className }: BadgeListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}

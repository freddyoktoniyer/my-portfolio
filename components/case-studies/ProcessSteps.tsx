import { cn, formatIndex } from "@/lib/utils";

interface ProcessStepsProps {
  steps: readonly string[];
  /** Accessible name of the process. */
  label: string;
  className?: string;
}

/** An ordered process drawn top to bottom, with the final step highlighted. */
export function ProcessSteps({ steps, label, className }: ProcessStepsProps) {
  const lastIndex = steps.length - 1;

  return (
    <ol aria-label={label} className={className}>
      {steps.map((step, index) => (
        <li key={step} className="relative flex items-center gap-4 pb-3 last:pb-0">
          {index < lastIndex ? (
            <span aria-hidden="true" className="absolute top-7 bottom-0 left-3.5 w-px bg-line-strong" />
          ) : null}
          <span
            className={cn(
              "relative flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-2xs",
              index === lastIndex ? "border-accent text-accent-strong" : "border-line text-fg-muted",
            )}
          >
            {formatIndex(index)}
          </span>
          <span className={cn("text-sm", index === lastIndex ? "text-fg" : "text-fg-secondary")}>
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

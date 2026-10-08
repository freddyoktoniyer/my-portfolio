import { Reveal } from "@/components/ui/Reveal";
import { cn, formatIndex } from "@/lib/utils";
import type { CareerStage } from "@/types/portfolio";

interface CareerProgressionProps {
  stages: CareerStage[];
  className?: string;
}

export function CareerProgression({ stages, className }: CareerProgressionProps) {
  const lastIndex = stages.length - 1;

  return (
    <div className={className}>
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono text-fg-muted">07.1 / Progression</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
            From interface to business process.
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-fg-muted md:text-right">
          A reading of the roles above — not an official title progression.
        </p>
      </Reveal>

      <div aria-hidden="true" className="mt-10 h-px bg-linear-to-r from-line via-accent/40 to-accent" />

      <ol className="grid gap-px overflow-hidden rounded-b-2xl border-x border-b border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stages.map((stage, index) => (
          <li key={stage.label} className="bg-background">
            <Reveal delay={index * 0.06} className="flex h-full flex-col p-5 sm:p-6">
              <span
                className={cn(
                  "font-mono text-xs",
                  index === lastIndex ? "text-accent" : "text-fg-faint",
                )}
              >
                {formatIndex(index)}
              </span>
              <p
                className={cn(
                  "label-mono mt-6",
                  index === lastIndex ? "text-accent-strong" : "text-fg",
                )}
              >
                {stage.label}
              </p>
              <p className="mt-1 font-mono text-2xs text-fg-muted">{stage.years}</p>
              <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{stage.note}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

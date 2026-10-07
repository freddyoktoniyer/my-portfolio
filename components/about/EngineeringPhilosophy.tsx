import { ArrowRight, RotateCw } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { philosophy } from "@/data/engineering";
import { cn, formatIndex } from "@/lib/utils";

interface EngineeringPhilosophyProps {
  className?: string;
}

export function EngineeringPhilosophy({ className }: EngineeringPhilosophyProps) {
  return (
    <div className={className}>
      <Reveal>
        <p className="label-mono text-fg-muted">01.1 / Principles</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
          {philosophy.title}
        </h3>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <EngineeringLoop stages={philosophy.loop} />
      </Reveal>

      <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {philosophy.principles.map((principle, index) => (
          <li key={principle.title} className="bg-background">
            <Reveal delay={index * 0.08} className="h-full p-6 sm:p-8">
              <span className="font-mono text-xs text-accent">{formatIndex(index)}</span>
              <h4 className="mt-8 text-xl font-semibold tracking-tight text-fg">
                {principle.title}
              </h4>
              <p className="mt-3 leading-relaxed text-fg-secondary">
                {principle.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface EngineeringLoopProps {
  stages: readonly string[];
}

/** The work loop drawn as a row of stages with a return path back to the start. */
function EngineeringLoop({ stages }: EngineeringLoopProps) {
  return (
    <figure className="relative inline-block max-w-full md:pb-9">
      <ol
        aria-label="Engineering loop"
        className="label-mono flex flex-wrap items-center gap-x-2 gap-y-3"
      >
        {stages.map((stage, index) => (
          <li key={stage} className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-full border px-3 py-1.5",
                index === 0
                  ? "border-accent/40 text-fg"
                  : "border-line text-fg-secondary",
              )}
            >
              {stage}
            </span>
            {index < stages.length - 1 ? (
              <ArrowRight aria-hidden="true" className="size-3 text-fg-faint" />
            ) : null}
          </li>
        ))}
        <li className="flex items-center gap-1.5 text-accent md:hidden">
          <RotateCw aria-hidden="true" className="size-3.5" />
          Repeat
        </li>
      </ol>

      {/* Return path from the last stage back to the first (wide screens). */}
      <div
        aria-hidden="true"
        className="absolute inset-x-12 bottom-0 hidden h-6 rounded-b-xl border-x border-b border-dashed border-line-strong md:block"
      >
        <span className="label-mono absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 bg-background px-3 text-accent">
          <RotateCw className="size-3.5" />
          Repeat
        </span>
      </div>
      <figcaption className="sr-only">
        The stages repeat: improvements feed back into understanding the next requirement.
      </figcaption>
    </figure>
  );
}

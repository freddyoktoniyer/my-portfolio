import { Reveal } from "@/components/ui/Reveal";
import { differentiator } from "@/data/approach";
import { cn } from "@/lib/utils";

interface DifferentiatorProps {
  className?: string;
}

export function Differentiator({ className }: DifferentiatorProps) {
  return (
    <div className={className}>
      <Reveal>
        <p className="label-mono text-fg-muted">02.1 / Differentiator</p>
        <h3 className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-display text-fg sm:text-3xl">
          {differentiator.title}
        </h3>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal delay={0.1} className="lg:col-span-5">
          <PositionDiagram />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <ul className="divide-y divide-line border-y border-line">
            {differentiator.profiles.map((profile) => (
              <li key={profile.label} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                <p
                  className={cn(
                    "label-mono pt-1 sm:col-span-4",
                    profile.highlight ? "text-accent" : "text-fg-muted",
                  )}
                >
                  {profile.label}
                </p>
                <p
                  className={cn(
                    "leading-relaxed sm:col-span-8",
                    profile.highlight ? "text-fg" : "text-fg-secondary",
                  )}
                >
                  {profile.description}
                </p>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-pretty text-lg leading-relaxed text-fg sm:text-xl">
            {differentiator.statement}
          </blockquote>
        </Reveal>
      </div>
    </div>
  );
}

/** Business above, technology below, the two analyst roles either side — and the point where they meet. */
function PositionDiagram() {
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-sm">
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-accent/70 via-line-strong to-accent/70" />
        <span className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-line-strong" />

        <span className="label-mono absolute top-0 left-1/2 -translate-x-1/2 text-fg">
          Business
        </span>
        <span className="label-mono absolute bottom-0 left-1/2 -translate-x-1/2 text-fg">
          Technology
        </span>
        <span className="label-mono absolute top-1/2 left-0 -translate-y-8 text-fg-secondary">
          System analyst
        </span>
        <span className="label-mono absolute top-1/2 right-0 -translate-y-8 text-right text-fg-secondary">
          Technical BA
        </span>

        <span className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-8 ring-accent/15" />
        <span className="label-mono absolute top-1/2 left-1/2 translate-x-5 translate-y-4 text-accent-strong">
          Where I work
        </span>
      </div>
      <figcaption className="sr-only">
        A two-axis diagram: business at the top, technology at the bottom, system
        analyst on the left, and technical business analyst on the right. I work
        at the point where they meet.
      </figcaption>
    </figure>
  );
}

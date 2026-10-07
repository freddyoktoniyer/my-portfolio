import { Plus } from "lucide-react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/portfolio";

interface ExperienceDetailsProps {
  experience: Experience;
}

/** Optional detail blocks for featured roles; renders only what the data provides. */
export function ExperienceDetails({ experience }: ExperienceDetailsProps) {
  const { capabilities, pillars, metric, systems, highlights, tier } = experience;

  return (
    <div className="mt-10 space-y-10">
      {capabilities ? (
        <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/60">
          {capabilities.map((row) => (
            <div key={row.area} className="grid gap-1 px-5 py-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
              <dt className="label-mono pt-0.5 text-fg-muted">{row.area}</dt>
              <dd className="text-fg sm:col-span-3">{row.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {pillars ? (
        <ul aria-label="Scope" className="flex flex-wrap items-center gap-2">
          {pillars.map((pillar, index) => (
            <Fragment key={pillar}>
              {index > 0 ? (
                <li aria-hidden="true" className="text-fg-faint">
                  <Plus className="size-4" />
                </li>
              ) : null}
              <li className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg">
                {pillar}
              </li>
            </Fragment>
          ))}
        </ul>
      ) : null}

      {metric || systems ? (
        <div className="grid gap-4 md:grid-cols-5">
          {metric ? (
            <div className="rounded-2xl border border-line bg-surface/60 p-6 md:col-span-2">
              <p className="text-5xl font-semibold tracking-display text-fg">{metric.value}</p>
              <p className="mt-3 max-w-56 text-sm leading-relaxed text-fg-secondary">
                {metric.label}
              </p>
            </div>
          ) : null}
          {systems ? (
            <div
              className={cn(
                "rounded-2xl border border-line bg-surface/60 p-6",
                metric ? "md:col-span-3" : "md:col-span-5",
              )}
            >
              <p className="label-mono text-fg-muted">Documented systems</p>
              <ul className="mt-4 space-y-3">
                {systems.map((system) => (
                  <li key={system.name} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-6">
                    <span className="text-fg">{system.name}</span>
                    <span className="shrink-0 font-mono text-xs text-fg-muted sm:pt-1">
                      {system.stack.join(" · ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}

      <div>
        <h4 className="label-mono text-fg-muted">Responsibilities</h4>
        <ul
          className={cn(
            "mt-5 grid gap-x-10 gap-y-4",
            tier === "primary" && "lg:grid-cols-2",
          )}
        >
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-relaxed text-fg-secondary">
              <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

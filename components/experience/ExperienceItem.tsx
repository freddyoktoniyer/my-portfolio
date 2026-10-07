import { ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/engineering/ArchitectureDiagram";
import { ExperienceDetails } from "@/components/experience/ExperienceDetails";
import { Badge, BadgeList } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const featured = experience.tier !== "compact";

  return (
    <li className="group/item lg:grid lg:grid-cols-12 lg:gap-10">
      <div className="hidden lg:col-span-3 lg:block lg:pt-1 lg:text-right">
        <ExperienceMeta experience={experience} />
      </div>

      <div
        className={cn(
          "relative border-l border-line pl-7 group-last/item:pb-0 sm:pl-10 lg:col-span-9 lg:pl-12",
          featured ? "pb-20 sm:pb-24" : "pb-14",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-1.5 -left-1.25 size-2.75 rounded-full border",
            experience.current
              ? "border-accent bg-accent ring-4 ring-accent/15"
              : featured
                ? "border-fg-faint bg-background"
                : "border-line-strong bg-background",
          )}
        />

        <Reveal>
          <div className="mb-4 lg:hidden">
            <ExperienceMeta experience={experience} />
          </div>

          <h3
            className={cn(
              "font-semibold tracking-display text-fg",
              experience.tier === "primary" && "text-3xl sm:text-4xl",
              experience.tier === "secondary" && "text-2xl sm:text-3xl",
              experience.tier === "compact" && "text-xl sm:text-2xl",
            )}
          >
            {experience.role}
          </h3>
          <p className={cn("mt-2 text-fg-secondary", featured && "text-lg")}>
            <CompanyName experience={experience} />
          </p>
          <p
            className={cn(
              "mt-5 max-w-3xl leading-relaxed",
              featured ? "text-lg text-fg" : "text-fg-secondary",
            )}
          >
            {experience.description}
          </p>
        </Reveal>

        {featured ? (
          <Reveal>
            <ExperienceDetails experience={experience} />
          </Reveal>
        ) : (
          <Reveal>
            <ul className="mt-5 max-w-3xl space-y-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-fg-secondary">
                  <span aria-hidden="true" className="mt-2.5 h-px w-2.5 shrink-0 bg-line-strong" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {experience.architecture ? (
          <Reveal className="mt-12">
            <ArchitectureDiagram architecture={experience.architecture} />
          </Reveal>
        ) : null}

        <Reveal>
          <BadgeList
            items={experience.technologies}
            label={`Technologies at ${experience.company}`}
            className={featured ? "mt-10" : "mt-6"}
          />
        </Reveal>
      </div>
    </li>
  );
}

function ExperienceMeta({ experience }: ExperienceItemProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 lg:flex-col lg:items-end lg:gap-y-1.5">
      <p className={cn("label-mono", experience.current ? "text-accent" : "text-fg-secondary")}>
        {experience.years}
      </p>
      <p className="font-mono text-xs text-fg-muted">{experience.period}</p>
      {experience.current ? <Badge variant="accent">Current role</Badge> : null}
    </div>
  );
}

function CompanyName({ experience }: ExperienceItemProps) {
  if (!experience.companyUrl) return <>{experience.company}</>;

  return (
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/company inline-flex items-center gap-1 rounded-sm transition-colors hover:text-fg"
    >
      {experience.company}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 text-fg-faint transition-colors group-hover/company:text-accent"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

import type { ReactNode } from "react";
import { ProcessSteps } from "@/components/case-studies/ProcessSteps";
import { Badge, BadgeList } from "@/components/ui/Badge";
import { SystemFlow } from "@/components/ui/SystemFlow";
import type { CaseStudy, CaseStudyBlock } from "@/types/portfolio";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

/**
 * Case-study body. Sections follow the analysis path and render only what the
 * data provides — no section is padded out with invented detail.
 */
export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="divide-y divide-line">
      <DetailRow title="Context">
        <ul className="space-y-3">
          {caseStudy.context.map((context) => (
            <li key={context.company}>
              <p className="text-fg">{context.company}</p>
              <p className="text-sm text-fg-secondary">
                {context.role}
                <span className="ml-2 font-mono text-xs text-fg-muted">{context.period}</span>
              </p>
            </li>
          ))}
        </ul>
        {caseStudy.status ? (
          <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-fg-secondary">
            <Badge variant="accent">{caseStudy.status.label}</Badge>
            {caseStudy.status.note}
          </p>
        ) : null}
      </DetailRow>

      <DetailRow title="Role">
        <p className="text-fg-secondary">{caseStudy.role.join(" · ")}</p>
      </DetailRow>

      {caseStudy.blocks.map((block) => (
        <DetailRow key={block.title} title={block.title}>
          <BlockContent block={block} />
        </DetailRow>
      ))}

      {caseStudy.technologies.length > 0 ? (
        <DetailRow title="Technologies">
          <BadgeList items={caseStudy.technologies} label="Technologies" />
        </DetailRow>
      ) : null}
    </div>
  );
}

function BlockContent({ block }: { block: CaseStudyBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="space-y-3 leading-relaxed">
          {block.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "text-fg" : "text-fg-secondary"}>
              {paragraph}
            </p>
          ))}
        </div>
      );
    case "list":
      return (
        <>
          {block.intro ? <p className="mb-3 text-fg">{block.intro}</p> : null}
          {block.inline ? (
            <p className="leading-relaxed text-fg-secondary">{block.items.join(" · ")}</p>
          ) : (
            <ul className="space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-fg-secondary">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </>
      );
    case "process":
      return (
        <>
          <ProcessSteps steps={block.steps} label={block.title} />
          {block.note ? <p className="mt-4 text-sm text-fg-muted">{block.note}</p> : null}
        </>
      );
    case "chain":
      return (
        <>
          <SystemFlow steps={block.steps} label={block.title} />
          {block.note ? (
            <p className="mt-4 leading-relaxed text-fg-secondary">{block.note}</p>
          ) : null}
        </>
      );
    case "insight":
      return (
        <blockquote className="border-l-2 border-accent pl-4 text-pretty leading-relaxed text-fg">
          {block.text}
        </blockquote>
      );
  }
}

interface DetailRowProps {
  title: string;
  children: ReactNode;
}

function DetailRow({ title, children }: DetailRowProps) {
  return (
    <section className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-4 sm:gap-6">
      <h3 className="label-mono pt-1 text-fg-muted">{title}</h3>
      <div className="sm:col-span-3">{children}</div>
    </section>
  );
}

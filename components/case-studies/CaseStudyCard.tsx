import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";
import { CaseStudyDialog } from "@/components/case-studies/CaseStudyDialog";
import { Badge, BadgeList } from "@/components/ui/Badge";
import { SystemFlow } from "@/components/ui/SystemFlow";
import { formatIndex } from "@/lib/utils";
import type { CaseStudy } from "@/types/portfolio";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const number = formatIndex(index);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[translate,border-color,background-color] duration-300 ease-out-expo focus-within:border-accent/40 hover:border-accent/40 hover:bg-elevated motion-safe:hover:-translate-y-1 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-fg-faint">{number}</span>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {caseStudy.status ? <Badge>{caseStudy.status.label}</Badge> : null}
          <span className="label-mono text-right text-accent">{caseStudy.category}</span>
        </div>
      </div>

      <h3 className="mt-10 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
        {caseStudy.title}
      </h3>
      <p className="mt-4 max-w-xl leading-relaxed text-fg-secondary">{caseStudy.summary}</p>

      <SystemFlow steps={caseStudy.cardFlow} label="Flow" className="mt-8" />

      <dl className="mt-8">
        <dt className="label-mono text-fg-muted">Role</dt>
        <dd className="mt-2 text-sm leading-relaxed text-fg-secondary">
          {caseStudy.role.join(" · ")}
        </dd>
      </dl>

      {caseStudy.technologies.length > 0 ? (
        <BadgeList items={caseStudy.technologies} label="Technologies" className="mt-6" />
      ) : null}

      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-sm text-fg-muted">
            {caseStudy.context.map((context) => context.company).join(" · ")}
          </p>
          <CaseStudyDialog eyebrow={`${number} / ${caseStudy.category}`} title={caseStudy.title}>
            <CaseStudyDetail caseStudy={caseStudy} />
          </CaseStudyDialog>
        </div>
      </div>
    </article>
  );
}

import type { ReactNode } from "react";
import { ProjectTechnology } from "@/components/work/ProjectTechnology";
import { SystemFlow } from "@/components/work/SystemFlow";
import type { Project } from "@/types/portfolio";

interface ProjectDetailProps {
  project: Project;
}

/**
 * Case-study body. Only sections backed by the CV are rendered; no
 * measurable results are claimed, so "Focus" replaces "Result".
 */
export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="divide-y divide-line">
      <DetailRow title="Overview">
        <p className="leading-relaxed text-fg">{project.overview}</p>
      </DetailRow>

      <DetailRow title="Role">
        <ul className="space-y-3">
          {project.context.map((context) => (
            <li key={context.company}>
              <p className="text-fg">{context.role}</p>
              <p className="text-sm text-fg-secondary">
                {context.company}
                <span className="ml-2 font-mono text-xs text-fg-muted">{context.period}</span>
              </p>
            </li>
          ))}
        </ul>
      </DetailRow>

      <DetailRow title="Engineering focus">
        <p className="text-fg-secondary">{project.focus.join(" · ")}</p>
      </DetailRow>

      <DetailRow title="System flow">
        <SystemFlow steps={project.flow} />
      </DetailRow>

      <DetailRow title="Approach">
        <ul className="space-y-2.5">
          {project.approach.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-fg-secondary">
              <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </DetailRow>

      {project.examples ? (
        <DetailRow title="Documented work">
          <ul className="space-y-4">
            {project.examples.map((example) => (
              <li key={example.name}>
                <p className="text-fg">{example.name}</p>
                <p className="mt-0.5 text-sm text-fg-secondary">
                  {example.stack.join(" · ")} — {example.company}
                </p>
              </li>
            ))}
          </ul>
        </DetailRow>
      ) : null}

      <DetailRow title="Technologies">
        <ProjectTechnology technologies={project.technologies} />
      </DetailRow>

      <DetailRow title="Focus">
        <p className="leading-relaxed text-fg-secondary">{project.outcomeFocus}</p>
      </DetailRow>
    </div>
  );
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

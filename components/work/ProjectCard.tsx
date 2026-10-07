import { ProjectDetail } from "@/components/work/ProjectDetail";
import { ProjectDialog } from "@/components/work/ProjectDialog";
import { ProjectTechnology } from "@/components/work/ProjectTechnology";
import { SystemFlow } from "@/components/work/SystemFlow";
import { formatIndex } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = formatIndex(index);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[translate,border-color,background-color] duration-300 ease-out-expo focus-within:border-accent/40 hover:border-accent/40 hover:bg-elevated motion-safe:hover:-translate-y-1 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-fg-faint">{number}</span>
        <span className="label-mono text-right text-accent">{project.category}</span>
      </div>

      <h3 className="mt-10 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-md leading-relaxed text-fg-secondary">{project.summary}</p>

      <SystemFlow steps={project.flow} className="mt-8" />

      <dl className="mt-8">
        <dt className="label-mono text-fg-muted">Engineering focus</dt>
        <dd className="mt-2 text-sm leading-relaxed text-fg-secondary">
          {project.focus.join(" · ")}
        </dd>
      </dl>

      <ProjectTechnology technologies={project.technologies} className="mt-6" />

      <div className="mt-auto pt-8">
        <div className="flex justify-end border-t border-line pt-6">
          <ProjectDialog eyebrow={`${number} / ${project.category}`} title={project.title}>
            <ProjectDetail project={project} />
          </ProjectDialog>
        </div>
      </div>
    </article>
  );
}

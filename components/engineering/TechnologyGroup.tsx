import { BadgeList } from "@/components/ui/Badge";
import { formatIndex } from "@/lib/utils";
import type { SkillGroup } from "@/types/portfolio";

interface TechnologyGroupProps {
  group: SkillGroup;
  index: number;
}

export function TechnologyGroup({ group, index }: TechnologyGroupProps) {
  return (
    <article className="flex h-full flex-col p-6 sm:p-8">
      <span className="font-mono text-xs text-accent">{formatIndex(index)}</span>
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-fg">{group.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{group.description}</p>
      <div className="mt-auto pt-8">
        <BadgeList items={group.skills.map((skill) => skill.name)} label={`${group.title} skills`} />
      </div>
    </article>
  );
}

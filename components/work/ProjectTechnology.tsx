import { BadgeList } from "@/components/ui/Badge";

interface ProjectTechnologyProps {
  technologies: readonly string[];
  className?: string;
}

export function ProjectTechnology({ technologies, className }: ProjectTechnologyProps) {
  return <BadgeList items={technologies} label="Technologies" className={className} />;
}

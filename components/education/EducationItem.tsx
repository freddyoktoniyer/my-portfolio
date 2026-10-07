import type { Education } from "@/types/portfolio";

interface EducationItemProps {
  item: Education;
}

export function EducationItem({ item }: EducationItemProps) {
  return (
    <li className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
      <p className="font-mono text-xs text-fg-muted sm:col-span-3 sm:pt-1.5">{item.period}</p>
      <div className="sm:col-span-6">
        <h3 className="text-lg font-semibold tracking-tight text-fg">{item.institution}</h3>
        <p className="mt-1 text-fg-secondary">
          {item.degree} — {item.field}
        </p>
      </div>
      {item.gpa ? (
        <p className="label-mono text-fg-muted sm:col-span-3 sm:pt-1.5 sm:text-right">
          GPA <span className="text-accent-strong">{item.gpa}</span>
        </p>
      ) : null}
    </li>
  );
}

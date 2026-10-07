import { cn } from "@/lib/utils";

interface DividerProps {
  /** Optional mono label rendered on the line. Decorative only. */
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return <hr className={cn("border-line", className)} />;
  }

  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-4 text-fg-faint", className)}
    >
      <span className="label-mono">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

import { cn } from "@/lib/utils";

interface SystemFlowProps {
  steps: readonly string[];
  className?: string;
}

/** A compact left-to-right flow diagram, e.g. "Android / iOS → REST API → …". */
export function SystemFlow({ steps, className }: SystemFlowProps) {
  return (
    <ol
      aria-label={`System flow: ${steps.join(", then ")}`}
      className={cn("flex flex-wrap items-center gap-y-2", className)}
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span className="rounded-md border border-line bg-background/60 px-2 py-1 font-mono text-2xs text-fg-secondary">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="relative mx-1.5 h-px w-4 bg-line-strong">
              <span className="absolute -right-px -top-[3px] size-1.5 rotate-45 border-t border-r border-line-strong" />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

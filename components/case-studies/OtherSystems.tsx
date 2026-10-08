import { Reveal } from "@/components/ui/Reveal";
import { otherSystems } from "@/data/case-studies";

interface OtherSystemsProps {
  className?: string;
}

export function OtherSystems({ className }: OtherSystemsProps) {
  return (
    <div className={className}>
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono text-fg-muted">05.1 / Other systems</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
            Other systems I&apos;ve built and maintained.
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-fg-muted md:text-right">
          Business applications documented in my CV.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {otherSystems.map((system) => (
            <li key={system.name} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-6">
              <p className="text-fg sm:col-span-5">{system.name}</p>
              <p className="text-sm text-fg-secondary sm:col-span-4 sm:pt-0.5">{system.company}</p>
              <p className="font-mono text-xs text-fg-muted sm:col-span-3 sm:pt-1 sm:text-right">
                {system.stack.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

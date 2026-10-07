import { ArrowUpRight } from "lucide-react";
import { CopyButton } from "@/components/contact/CopyButton";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/portfolio";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("divide-y divide-line border-y border-line", className)}>
      {links.map((link) => (
        <li key={link.label} className="flex items-center justify-between gap-4 py-5">
          <div className="min-w-0">
            <p className="label-mono text-fg-muted">{link.label}</p>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group mt-1.5 inline-flex max-w-full items-center gap-2 rounded-sm text-lg text-fg transition-colors hover:text-accent-strong"
            >
              <span className="truncate">{link.value}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 text-fg-faint transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
              {link.external ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </div>
          {link.copyable ? (
            <CopyButton value={link.value} label={`Copy ${link.label.toLowerCase()}`} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

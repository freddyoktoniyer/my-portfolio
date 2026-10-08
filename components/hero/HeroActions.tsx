import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

interface HeroActionsProps {
  className?: string;
}

export function HeroActions({ className }: HeroActionsProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <Button href="#case-studies" size="lg">
        View Case Studies
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
        />
      </Button>
      <Button href="#approach" variant="secondary" size="lg">
        Explore My Work
      </Button>
      <Button
        href={profile.resume.href}
        download={profile.resume.fileName}
        variant="ghost"
        size="lg"
      >
        <Download aria-hidden="true" className="size-4" />
        Download CV
      </Button>
    </div>
  );
}

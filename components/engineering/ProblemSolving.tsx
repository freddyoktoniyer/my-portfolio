import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemSolvingSteps } from "@/data/engineering";
import { cn, formatIndex } from "@/lib/utils";

export function ProblemSolving() {
  const lastIndex = problemSolvingSteps.length - 1;

  return (
    <Section
      id="problem-solving"
      navSection="engineering"
      labelledBy="problem-solving-title"
      className="pt-0 sm:pt-0"
    >
      <Container>
        <Divider className="mb-20 sm:mb-28" />
        <Reveal>
          <SectionHeading
            id="problem-solving-title"
            eyebrow="04.3 / Problem solving"
            title={
              <>
                From problem{" "}
                <br />
                to production.
              </>
            }
            description="The path a change takes — from understanding the requirement to improving it once it runs in production."
          />
        </Reveal>

        <ol className="mt-14 grid xl:grid-cols-7">
          {problemSolvingSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="relative border-l border-line pb-10 pl-8 last:pb-0 xl:border-t xl:border-l-0 xl:pt-8 xl:pr-6 xl:pb-0 xl:pl-0"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1 -left-1.25 size-2.75 rounded-full border xl:-top-1.25 xl:left-0",
                  index === lastIndex
                    ? "border-accent bg-accent"
                    : "border-line-strong bg-background",
                )}
              />
              <span className="font-mono text-xs text-accent">{formatIndex(index)}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

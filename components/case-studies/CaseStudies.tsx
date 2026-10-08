import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { OtherSystems } from "@/components/case-studies/OtherSystems";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemFlow } from "@/components/ui/SystemFlow";
import { caseStudies, caseStudyPath } from "@/data/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const lastIndex = caseStudies.length - 1;
  const oddCount = caseStudies.length % 2 === 1;

  return (
    <Section
      id="case-studies"
      navSection="case-studies"
      labelledBy="case-studies-title"
      className="border-t border-line"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              id="case-studies-title"
              eyebrow="05 / Case studies"
              title="From business problem to working system."
              description="Each case study starts with why the system was needed — the technology comes last."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted lg:text-right">
              Work at VIVERE GROUP and PT. Garuda Yamato Steel. Client names,
              pricing, and internal details are intentionally left out.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="label-mono shrink-0 text-fg-muted">Each case reads</p>
          <SystemFlow steps={caseStudyPath} label="Case study structure" />
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
          {caseStudies.map((caseStudy, index) => (
            <Reveal
              as="li"
              key={caseStudy.slug}
              delay={(index % 2) * 0.08}
              className={cn(oddCount && index === lastIndex && "md:col-span-2")}
            >
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </Reveal>
          ))}
        </ul>

        <OtherSystems className="mt-20 sm:mt-28" />
      </Container>
    </Section>
  );
}

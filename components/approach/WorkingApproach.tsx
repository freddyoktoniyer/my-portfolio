import { SystemLayers } from "@/components/engineering/SystemLayers";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workingApproach } from "@/data/approach";

export function WorkingApproach() {
  return (
    <Section
      id="approach"
      navSection="approach"
      labelledBy="approach-title"
      className="border-t border-line"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="approach-title"
            eyebrow="04 / How I work"
            title="Problem → Process → Requirement → Solution."
            description="The path a requirement takes, from the business problem to a validated release. Select a step to see what happens there."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <SystemLayers
            layers={workingApproach}
            initialLayerId="impact-analysis"
            tagsLabel="focus areas"
          />
        </Reveal>
      </Container>
    </Section>
  );
}

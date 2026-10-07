import { SystemLayers } from "@/components/engineering/SystemLayers";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { systemLayers } from "@/data/engineering";

export function SystemThinking() {
  return (
    <Section
      id="system-thinking"
      navSection="engineering"
      labelledBy="system-thinking-title"
      className="pt-0 sm:pt-0"
    >
      <Container>
        <Divider className="mb-20 sm:mb-28" />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="system-thinking-title"
              eyebrow="04.2 / System thinking"
              title={
                <>
                  One system.{" "}
                  <br />
                  Multiple layers.
                </>
              }
              description="A business requirement touches every one of these layers. Select a layer to see what it is responsible for."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <SystemLayers layers={systemLayers} initialLayerId="api" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

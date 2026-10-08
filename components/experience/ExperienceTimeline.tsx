import { CareerProgression } from "@/components/experience/CareerProgression";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerStages, experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      navSection="experience"
      labelledBy="experience-title"
      className="border-t border-line"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="07 / Experience"
            title="Engineering roles, with analysis built in."
            description="Six roles since 2021. Job titles are exactly as held — the responsibilities show where requirement, process, and impact analysis were part of the work."
          />
        </Reveal>

        <ol className="mt-16 sm:mt-20">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ol>

        <CareerProgression stages={careerStages} className="mt-20 sm:mt-28" />
      </Container>
    </Section>
  );
}

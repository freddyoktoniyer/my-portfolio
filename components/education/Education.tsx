import { EducationItem } from "@/components/education/EducationItem";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section
      id="education"
      navSection="education"
      labelledBy="education-title"
      className="border-t border-line"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              id="education-title"
              eyebrow="08 / Education"
              title="Education"
              description="Information Systems — where business and technology meet — studied alongside professional work."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 lg:pt-14">
            <ol className="divide-y divide-line border-y border-line">
              {education.map((item) => (
                <EducationItem key={item.institution} item={item} />
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

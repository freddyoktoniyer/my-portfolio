import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section id="work" navSection="work" labelledBy="work-title" className="border-t border-line">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              id="work-title"
              eyebrow="02 / Work"
              title="Selected Work"
              description="Systems, applications, and integrations I've worked on."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted lg:text-right">
              Grouped by area of work. Specific systems are named where they are
              documented in my CV.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={(index % 2) * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

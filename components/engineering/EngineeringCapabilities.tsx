import { TechnologyGroup } from "@/components/engineering/TechnologyGroup";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, supplementarySkills } from "@/data/skills";

export function EngineeringCapabilities() {
  return (
    <Section
      id="engineering"
      navSection="engineering"
      labelledBy="engineering-title"
      className="border-t border-line"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="engineering-title"
            eyebrow="04 / Engineering"
            title="Capabilities, organized by layer."
            description="Grouped by where each capability sits in the system — not ranked, and not rated."
          />
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <li key={group.id} className="bg-background">
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <TechnologyGroup group={group} index={index} />
              </Reveal>
            </li>
          ))}
          <li className="bg-surface">
            <Reveal delay={0.12} className="h-full p-6 sm:p-8">
              <h3 className="label-mono text-fg-muted">{supplementarySkills.title}</h3>
              <dl className="mt-6 space-y-4">
                {supplementarySkills.groups.map((group) => (
                  <div key={group.label}>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-fg-muted">
                      {group.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-fg-secondary">
                      {group.skills.map((skill) => skill.name).join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </li>
        </ul>
      </Container>
    </Section>
  );
}

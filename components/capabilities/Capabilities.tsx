import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilityGroups } from "@/data/approach";
import { formatIndex } from "@/lib/utils";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      navSection="approach"
      labelledBy="capabilities-title"
      className="border-t border-line"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="capabilities-title"
            eyebrow="03 / Capabilities"
            title="Analysis first. Engineering underneath."
            description="From understanding the process to designing a solution that holds up in production."
          />
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-20">
          {capabilityGroups.map((group, groupIndex) => (
            <div key={group.id} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-4">
                <span className="font-mono text-xs text-accent">{formatIndex(groupIndex)}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-display text-fg">
                  {group.title}
                </h3>
                <p className="mt-3 leading-relaxed text-fg-secondary">{group.description}</p>
              </Reveal>

              <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
                {group.items.map((item, index) => (
                  <li key={item.title} className="bg-background sm:last:odd:col-span-2">
                    <Reveal delay={(index % 2) * 0.06} className="h-full p-6">
                      <h4 className="font-semibold tracking-tight text-fg">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                        {item.description}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

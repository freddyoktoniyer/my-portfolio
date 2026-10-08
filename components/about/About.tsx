import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemFlow } from "@/components/ui/SystemFlow";
import { about, profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" navSection="about" labelledBy="about-title" className="border-t border-line">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading id="about-title" eyebrow="01 / About" title={about.title} />
            </Reveal>

            <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed">
              <p className="text-fg">{about.lead}</p>
              <p className="text-fg-secondary">{about.intro}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 max-w-2xl">
              <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
                <p className="text-fg-secondary">
                  When a new requirement arrives, I don&apos;t start with{" "}
                  <q className="text-fg-muted line-through decoration-fg-faint">
                    {about.question.instead}
                  </q>
                </p>
                <p className="mt-4 text-fg-secondary">I first ask:</p>
                <blockquote className="mt-2 text-balance text-2xl font-semibold tracking-display text-accent-strong sm:text-3xl">
                  “{about.question.first}”
                </blockquote>
                <div className="mt-8 border-t border-line pt-6">
                  <p className="label-mono text-fg-muted">Then I analyze</p>
                  <SystemFlow steps={about.analysisPath} label="Analysis path" className="mt-3" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-fg-secondary">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 lg:pt-28">
            <dl className="divide-y divide-line border-y border-line">
              <div className="py-6">
                <dt className="label-mono text-fg-muted">Open to</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 text-fg">
                    {about.openTo.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="py-6">
                <dt className="label-mono text-fg-muted">Works with</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-fg-secondary">
                    {about.collaborators.map((collaborator) => (
                      <li key={collaborator}>{collaborator}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="py-6">
                <dt className="label-mono text-fg-muted">Across the lifecycle</dt>
                <dd className="mt-3">
                  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-fg-secondary">
                    {about.lifecycle.map((stage, index) => (
                      <li key={stage} className="flex items-center gap-2">
                        {stage}
                        {index < about.lifecycle.length - 1 ? (
                          <ArrowRight aria-hidden="true" className="size-3 text-fg-faint" />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
              <div className="py-6">
                <dt className="label-mono text-fg-muted">Languages</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5">
                    {profile.languages.map((language) => (
                      <li key={language.label} className="flex justify-between gap-4">
                        <span className="text-fg">{language.label}</span>
                        <span className="text-fg-muted">{language.value}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

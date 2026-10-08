import { Fragment } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Differentiator } from "@/components/strengths/Differentiator";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreStrength } from "@/data/approach";
import { formatIndex } from "@/lib/utils";

export function CoreStrength() {
  return (
    <Section
      id="strengths"
      navSection="approach"
      labelledBy="strengths-title"
      className="border-t border-line"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="strengths-title"
            eyebrow="02 / Core strength"
            title={coreStrength.title}
            description={coreStrength.description}
          />
        </Reveal>

        <ol className="mt-14 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
          {coreStrength.layers.map((layer, index) => (
            <Fragment key={layer.id}>
              {index > 0 ? (
                <li aria-hidden="true" className="flex items-center justify-center">
                  <span className="flex size-9 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm text-accent">
                    ×
                  </span>
                </li>
              ) : null}
              <Reveal
                as="li"
                delay={index * 0.08}
                className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8"
              >
                <span className="font-mono text-xs text-accent">{formatIndex(index)}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-display text-fg sm:text-3xl">
                  {layer.label}
                </h3>
                <p className="mt-2 text-fg-secondary">{layer.question}</p>
                <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-secondary">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Fragment>
          ))}
        </ol>

        <Differentiator className="mt-24 sm:mt-32" />
      </Container>
    </Section>
  );
}

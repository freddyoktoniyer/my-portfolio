import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroSystemVisual } from "@/components/hero/HeroSystemVisual";
import { heroLayers } from "@/data/engineering";
import { profile } from "@/data/profile";
import type { LabeledValue } from "@/types/portfolio";

/** CSS-driven entrance so the hero paints immediately, without waiting for JS. */
const enter = "motion-safe:animate-enter";
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const facts: LabeledValue[] = [
  { label: "Experience", value: profile.experience },
  { label: "Based in", value: profile.location },
  { label: "Currently", value: profile.current.company },
  { label: "Focus", value: profile.focus },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-plus" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-40 size-160 rounded-full bg-accent/6 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p
              className={`${enter} label-mono inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-fg-secondary`}
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              <span>
                <span className="sr-only">Currently </span>
                {profile.current.role} · {profile.current.company}
              </span>
            </p>

            <h1 id="hero-title" className="mt-8">
              <span
                className={`${enter} block text-balance text-5xl font-semibold tracking-display text-fg sm:text-6xl xl:text-7xl`}
                style={delay(80)}
              >
                {profile.name}
              </span>{" "}
              <span
                className={`${enter} mt-4 block max-w-2xl text-balance text-3xl font-medium tracking-display text-fg-secondary sm:text-4xl xl:text-5xl`}
                style={delay(160)}
              >
                {profile.title}
              </span>
            </h1>

            <p
              className={`${enter} mt-8 max-w-xl text-pretty text-lg leading-relaxed text-fg-secondary`}
              style={delay(240)}
            >
              {profile.headline}
            </p>

            <div className={enter} style={delay(320)}>
              <HeroActions className="mt-10" />
            </div>
          </div>

          <div className={`${enter} lg:col-span-5`} style={delay(360)}>
            <HeroSystemVisual layers={heroLayers} />
          </div>
        </div>

        <dl
          className={`${enter} mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-24 lg:grid-cols-4`}
          style={delay(440)}
        >
          {facts.map((fact) => (
            <div key={fact.label} className="bg-background px-5 py-5 sm:px-6">
              <dt className="label-mono text-fg-muted">{fact.label}</dt>
              <dd className="mt-2 text-sm text-fg sm:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

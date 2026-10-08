import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroSystemVisual } from "@/components/hero/HeroSystemVisual";
import { heroStages, heroVisual } from "@/data/approach";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import type { LabeledValue } from "@/types/portfolio";

/** CSS-driven entrance so the hero paints immediately, without waiting for JS. */
const enter = "motion-safe:animate-enter";
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const facts: LabeledValue[] = [
  { label: "Experience", value: profile.experience },
  { label: "Background", value: profile.background },
  { label: "Currently", value: profile.current.company },
  { label: "Based in", value: profile.location },
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

            <p
              className={`${enter} mt-8 font-mono text-sm uppercase tracking-[0.24em] text-fg`}
              style={delay(60)}
            >
              {profile.name}
            </p>

            <h1 id="hero-title" className="mt-4">
              {profile.headline.map((line, index) => (
                <span
                  key={line}
                  className={cn(
                    enter,
                    "block text-balance text-4xl font-semibold tracking-display sm:text-5xl xl:text-6xl",
                    index === 0 ? "text-fg" : "text-fg-secondary",
                  )}
                  style={delay(120 + index * 60)}
                >
                  {line}
                  {index < profile.headline.length - 1 ? " " : null}
                </span>
              ))}
            </h1>

            <p
              className={`${enter} mt-6 text-pretty text-xl font-medium tracking-tight text-accent-strong sm:text-2xl`}
              style={delay(240)}
            >
              {profile.title}
            </p>

            <div
              className={`${enter} mt-8 max-w-xl space-y-4 text-pretty text-lg leading-relaxed`}
              style={delay(300)}
            >
              <p className="text-fg">{profile.positioning}</p>
              <p className="text-fg-secondary">{profile.summary}</p>
            </div>

            <div className={enter} style={delay(360)}>
              <HeroActions className="mt-10" />
            </div>
          </div>

          <div className={`${enter} lg:col-span-5`} style={delay(400)}>
            <HeroSystemVisual
              stages={heroStages}
              title={heroVisual.title}
              caption={heroVisual.caption}
            />
          </div>
        </div>

        <dl
          className={`${enter} mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-24 lg:grid-cols-4`}
          style={delay(460)}
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

"use client";

import { m, useReducedMotion } from "framer-motion";
import { formatIndex } from "@/lib/utils";
import type { LayerSummary } from "@/types/portfolio";

interface HeroSystemVisualProps {
  layers: LayerSummary[];
}

export function HeroSystemVisual({ layers }: HeroSystemVisualProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <figure className="relative rounded-2xl border border-line bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="label-mono text-fg-muted">System / Layers</span>
        <span className="label-mono flex items-center gap-2 text-fg-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {String(layers.length).padStart(2, "0")} layers
        </span>
      </div>

      <ol className="p-4 sm:p-6">
        {layers.map((layer, index) => (
          <li key={layer.id}>
            {index > 0 ? (
              <Connector index={index} reduceMotion={reduceMotion} />
            ) : null}
            <div className="flex items-center gap-4 rounded-xl border border-line bg-background/60 px-4 py-3 transition-colors duration-300 hover:border-accent/40 sm:py-3.5">
              <span aria-hidden="true" className="font-mono text-2xs text-fg-faint">
                {formatIndex(index)}
              </span>
              <span className="label-mono text-fg">{layer.label}</span>
              <span className="ml-auto text-right text-sm text-fg-secondary">
                {layer.detail}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <figcaption className="border-t border-line px-5 py-3.5 text-sm text-fg-muted">
        From the mobile client to the enterprise system — one request path.
      </figcaption>
    </figure>
  );
}

interface ConnectorProps {
  index: number;
  reduceMotion: boolean;
}

/** Vertical link between layers with a small packet travelling downwards. */
function Connector({ index, reduceMotion }: ConnectorProps) {
  return (
    <div aria-hidden="true" className="relative ml-5.5 h-5 w-px bg-line sm:h-6">
      <m.span
        className="absolute -left-px top-0 size-0.75 rounded-full bg-accent"
        initial={{ opacity: 0, y: 0 }}
        animate={
          reduceMotion ? { opacity: 0 } : { opacity: [0, 1, 1, 0], y: [0, 6, 14, 20] }
        }
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
          repeatDelay: 3.2,
          delay: 0.8 + index * 0.35,
        }}
      />
    </div>
  );
}

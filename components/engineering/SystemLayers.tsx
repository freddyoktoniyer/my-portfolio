"use client";

import { useId, useState, type PointerEvent } from "react";
import { BadgeList } from "@/components/ui/Badge";
import { cn, formatIndex } from "@/lib/utils";
import type { ArchitectureLayer } from "@/types/portfolio";

interface SystemLayersProps {
  layers: ArchitectureLayer[];
  /** Layer selected on first render. */
  initialLayerId: string;
  /** What each layer's tags are, for assistive technology, e.g. "technologies". */
  tagsLabel?: string;
}

/**
 * Layer stack with a description panel. On wide screens the panel sits beside
 * the stack; on small screens the description expands under the active layer.
 */
export function SystemLayers({
  layers,
  initialLayerId,
  tagsLabel = "technologies",
}: SystemLayersProps) {
  const [activeId, setActiveId] = useState(initialLayerId);
  const panelId = useId();
  const activeIndex = Math.max(
    0,
    layers.findIndex((layer) => layer.id === activeId),
  );

  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <ol className="md:col-span-7">
        {layers.map((layer, index) => {
          const active = index === activeIndex;
          const select = () => setActiveId(layer.id);
          const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
            if (event.pointerType === "mouse") select();
          };

          return (
            <li key={layer.id}>
              {index > 0 ? (
                <LayerConnector active={active || index - 1 === activeIndex} />
              ) : null}
              <button
                type="button"
                aria-pressed={active}
                aria-controls={panelId}
                onClick={select}
                onFocus={select}
                onPointerEnter={handlePointerEnter}
                className={cn(
                  "flex min-h-12 w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors duration-300",
                  active
                    ? "border-accent/60 bg-accent/10"
                    : "border-line bg-surface/60 hover:border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-2xs",
                    active ? "text-accent" : "text-fg-faint",
                  )}
                >
                  {formatIndex(index)}
                </span>
                <span className={cn("label-mono", active ? "text-fg" : "text-fg-secondary")}>
                  {layer.label}
                </span>
                <span className="ml-auto text-right text-xs text-fg-muted">{layer.detail}</span>
              </button>

              {active ? (
                <div className="mt-2 rounded-xl border border-line bg-background p-4 md:hidden">
                  <LayerDescription layer={layer} tagsLabel={tagsLabel} />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="hidden md:col-span-5 md:block">
        <div
          id={panelId}
          aria-live="polite"
          className="sticky top-28 rounded-2xl border border-line bg-surface/60 p-6"
        >
          <p className="label-mono text-accent">
            {formatIndex(activeIndex)} / {layers[activeIndex].label}
          </p>
          <div className="mt-4">
            <LayerDescription layer={layers[activeIndex]} tagsLabel={tagsLabel} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface LayerDescriptionProps {
  layer: ArchitectureLayer;
  tagsLabel: string;
}

function LayerDescription({ layer, tagsLabel }: LayerDescriptionProps) {
  return (
    <>
      <p className="leading-relaxed text-fg-secondary">{layer.description}</p>
      {layer.technologies ? (
        <BadgeList
          items={layer.technologies}
          label={`${layer.label} ${tagsLabel}`}
          className="mt-5"
        />
      ) : null}
    </>
  );
}

function LayerConnector({ active }: { active: boolean }) {
  return (
    <div aria-hidden="true" className="ml-5.5 h-4 w-px bg-line">
      <span
        className={cn(
          "block h-full w-px bg-accent transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

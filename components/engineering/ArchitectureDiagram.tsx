"use client";

import { m, useReducedMotion } from "framer-motion";
import { useId, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import type {
  ArchitectureLayer,
  ArchitectureModel,
  ArchitectureNodeId,
} from "@/types/portfolio";

interface ArchitectureDiagramProps {
  architecture: ArchitectureModel;
}

/**
 * Interactive request-path diagram. Hovering, focusing, or tapping a node
 * highlights it with its connections and describes it in the side panel.
 */
export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  const { nodes, edges } = architecture;
  const [activeId, setActiveId] = useState<ArchitectureNodeId>("backend");
  const reduceMotion = useReducedMotion() ?? false;
  const panelId = useId();
  const active = nodes[activeId];

  const isEdgeActive = (from: ArchitectureNodeId, to: ArchitectureNodeId) =>
    edges.some(
      (edge) =>
        edge.from === from &&
        edge.to === to &&
        (edge.from === activeId || edge.to === activeId),
    );

  const nodeProps = (id: ArchitectureNodeId) => ({
    node: nodes[id],
    active: id === activeId,
    panelId,
    onSelect: () => setActiveId(id),
  });

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface/60">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <span className="label-mono text-fg-muted">{architecture.title}</span>
        <span className="label-mono hidden text-fg-faint sm:inline">Select a layer</span>
      </div>

      <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-5 xl:gap-10">
        <div className="flex flex-col items-center xl:col-span-3">
          <DiagramNode {...nodeProps("mobile")} />
          <Edge active={isEdgeActive("mobile", "api")} reduceMotion={reduceMotion} />
          <DiagramNode {...nodeProps("api")} />
          <Edge active={isEdgeActive("api", "backend")} reduceMotion={reduceMotion} />
          <DiagramNode {...nodeProps("backend")} wide />
          <Split
            leftActive={isEdgeActive("backend", "database")}
            rightActive={isEdgeActive("backend", "sap")}
          />
          <div className="grid w-full grid-cols-2">
            <div className="flex justify-center px-1.5">
              <DiagramNode {...nodeProps("database")} />
            </div>
            <div className="flex justify-center px-1.5">
              <DiagramNode {...nodeProps("sap")} />
            </div>
          </div>
        </div>

        <div
          id={panelId}
          aria-live="polite"
          className="rounded-xl border border-line bg-background/70 p-5 sm:p-6 xl:col-span-2 xl:self-center"
        >
          <p className="label-mono text-accent">{active.detail}</p>
          <p className="mt-2 text-xl font-semibold tracking-tight text-fg">{active.label}</p>
          <p className="mt-4 leading-relaxed text-fg-secondary">{active.description}</p>
        </div>
      </div>

      <figcaption className="border-t border-line px-5 py-3.5 text-sm text-fg-muted">
        {architecture.note}
      </figcaption>
    </figure>
  );
}

interface DiagramNodeProps {
  node: ArchitectureLayer;
  active: boolean;
  panelId: string;
  wide?: boolean;
  onSelect: () => void;
}

function DiagramNode({ node, active, panelId, wide = false, onSelect }: DiagramNodeProps) {
  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse") onSelect();
  };

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-controls={panelId}
      onClick={onSelect}
      onFocus={onSelect}
      onPointerEnter={handlePointerEnter}
      className={cn(
        "w-full rounded-xl border px-3 py-3 text-center transition-colors duration-300 sm:px-4",
        wide ? "max-w-sm" : "max-w-56",
        active
          ? "border-accent/60 bg-accent/10"
          : "border-line bg-background/70 hover:border-line-strong",
      )}
    >
      <span className={cn("label-mono block", active ? "text-fg" : "text-fg-secondary")}>
        {node.label}
      </span>
      <span className="mt-1 block text-xs text-fg-muted">{node.detail}</span>
      {node.technologies ? (
        <span className="mt-3 flex flex-wrap justify-center gap-1.5">
          {node.technologies.map((item) => (
            <span
              key={item}
              className="rounded-md border border-line px-1.5 py-0.5 font-mono text-2xs text-fg-secondary"
            >
              {item}
            </span>
          ))}
        </span>
      ) : null}
    </button>
  );
}

interface EdgeProps {
  active: boolean;
  reduceMotion: boolean;
}

function Edge({ active, reduceMotion }: EdgeProps) {
  return (
    <div aria-hidden="true" className="relative h-9 w-px bg-line">
      <span
        className={cn(
          "absolute inset-0 bg-accent transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0",
        )}
      />
      <m.span
        className="absolute -left-px top-0 size-0.75 rounded-full bg-accent-strong"
        initial={{ opacity: 0, y: 0 }}
        animate={
          active && !reduceMotion
            ? { opacity: [0, 1, 1, 0], y: [0, 10, 26, 34] }
            : { opacity: 0, y: 0 }
        }
        transition={
          active && !reduceMotion
            ? { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }
            : { duration: 0.2 }
        }
      />
      <span
        className={cn(
          "absolute -bottom-px left-1/2 size-1.5 -translate-x-1/2 rotate-45 border-r border-b transition-colors duration-300",
          active ? "border-accent" : "border-line-strong",
        )}
      />
    </div>
  );
}

interface SplitProps {
  leftActive: boolean;
  rightActive: boolean;
}

/** Fork from the backend node to the two downstream systems. */
function Split({ leftActive, rightActive }: SplitProps) {
  const line = (active: boolean) =>
    cn("absolute transition-colors duration-300", active ? "bg-accent" : "bg-line");

  return (
    <div aria-hidden="true" className="relative h-10 w-full">
      <span className={cn(line(leftActive || rightActive), "top-0 left-1/2 h-5 w-px")} />
      <span className={cn(line(leftActive), "top-5 right-1/2 left-1/4 h-px")} />
      <span className={cn(line(rightActive), "top-5 right-1/4 left-1/2 h-px")} />
      <span className={cn(line(leftActive), "top-5 bottom-0 left-1/4 w-px")} />
      <span className={cn(line(rightActive), "top-5 right-1/4 bottom-0 w-px")} />
    </div>
  );
}

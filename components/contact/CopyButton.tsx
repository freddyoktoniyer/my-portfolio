"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

interface CopyButtonProps {
  value: string;
  /** Accessible name, e.g. "Copy email address". */
  label: string;
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timeout = window.setTimeout(() => setState("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-fg-secondary transition-colors hover:border-line-strong hover:text-fg"
      >
        <span className="sr-only">{label}</span>
        {state === "copied" ? (
          <Check aria-hidden="true" className="size-4 text-accent" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
      </button>
      <span role="status" className="sr-only">
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : ""}
      </span>
    </>
  );
}

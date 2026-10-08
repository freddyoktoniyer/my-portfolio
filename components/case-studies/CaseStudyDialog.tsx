"use client";

import { ArrowRight, X } from "lucide-react";
import { useId, useRef, type MouseEvent, type ReactNode } from "react";

interface CaseStudyDialogProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/**
 * Trigger + native modal <dialog>. The browser provides focus trapping,
 * Escape-to-close, and focus restoration; page scroll is locked in CSS.
 * The trigger stretches over its card so the whole card is clickable.
 */
export function CaseStudyDialog({ eyebrow, title, children }: CaseStudyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const close = () => dialogRef.current?.close();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="label-mono flex shrink-0 items-center gap-2 rounded-sm text-fg transition-colors duration-200 after:absolute after:inset-0 after:rounded-2xl group-hover:text-accent-strong"
      >
        Read case study
        <span className="sr-only">: {title}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={handleBackdropClick}
        className="m-auto mb-0 max-h-[92dvh] w-full max-w-none translate-y-6 flex-col overflow-hidden rounded-t-2xl border border-line bg-surface text-fg opacity-0 shadow-2xl shadow-black/60 transition-[opacity,translate,display,overlay] transition-discrete duration-300 ease-out-expo backdrop:bg-black/70 backdrop:backdrop-blur-sm open:flex open:translate-y-0 open:opacity-100 sm:mb-auto sm:max-h-[85dvh] sm:max-w-3xl sm:rounded-2xl starting:open:translate-y-6 starting:open:opacity-0"
      >
        <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 sm:px-10 sm:py-6">
          <div>
            <p className="label-mono text-accent">{eyebrow}</p>
            <h2
              id={titleId}
              className="mt-2 text-2xl font-semibold tracking-display text-fg sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-fg-secondary transition-colors hover:border-line-strong hover:text-fg"
          >
            <span className="sr-only">Close</span>
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-6 py-8 sm:px-10">
          {children}
        </div>
      </dialog>
    </>
  );
}

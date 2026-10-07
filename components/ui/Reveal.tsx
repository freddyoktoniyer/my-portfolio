"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, used for sequential reveals. */
  delay?: number;
  as?: "div" | "li";
}

const hidden = { opacity: 0, y: 16 };
const visible = { opacity: 1, y: 0 };
const viewport = { once: true, margin: "0px 0px -10% 0px" };

/**
 * Fades content in with a slight upward movement the first time it enters
 * the viewport. Transforms are skipped for users who prefer reduced motion
 * (see MotionProvider), and a <noscript> rule keeps content visible without JS.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay };

  if (as === "li") {
    return (
      <m.li
        data-reveal=""
        className={className}
        initial={hidden}
        whileInView={visible}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </m.li>
    );
  }

  return (
    <m.div
      data-reveal=""
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </m.div>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Zero-padded index label, e.g. 0 → "01". */
export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

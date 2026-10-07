"use client";

import { AnimatePresence, m } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Container } from "@/components/layout/Container";
import { useActiveSection } from "@/components/layout/useActiveSection";
import { Button } from "@/components/ui/Button";
import { cn, formatIndex } from "@/lib/utils";
import type { NavigationItem } from "@/types/portfolio";

interface NavbarProps {
  items: NavigationItem[];
  brand: string;
  brandLabel: string;
  email: string;
  resumeHref: string;
  resumeFileName: string;
}

/** Regions made inert while the mobile menu is open. */
const BACKGROUND_REGION_IDS = ["main", "site-footer"];
const EASE = [0.16, 1, 0.3, 1] as const;

function setBackgroundLocked(locked: boolean) {
  const root = document.documentElement;
  if (locked) {
    root.dataset.scrollLocked = "";
  } else {
    delete root.dataset.scrollLocked;
  }
  for (const id of BACKGROUND_REGION_IDS) {
    const region = document.getElementById(id);
    if (region) region.inert = locked;
  }
}

export function Navbar({
  items,
  brand,
  brandLabel,
  email,
  resumeHref,
  resumeFileName,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    setBackgroundLocked(true);
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      setBackgroundLocked(false);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen, closeMenu]);

  const handleMobileNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);
    const target = document.getElementById(href.split("#")[1] ?? "");
    // Not on the home page (e.g. the 404 page): let the browser navigate.
    if (!target) return;

    event.preventDefault();
    // Release the scroll lock before scrolling so the jump is not blocked.
    setBackgroundLocked(false);
    target.scrollIntoView();
    target.focus({ preventScroll: true });
    history.pushState(null, "", href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || menuOpen
            ? "border-line bg-background/85 backdrop-blur-md"
            : "border-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/#top"
            aria-label={brandLabel}
            className="flex items-center gap-2.5 rounded-sm py-2"
          >
            <span aria-hidden="true" className="size-2 rounded-xs bg-accent" />
            <span className="font-mono text-sm font-medium tracking-[0.24em] text-fg">
              {brand}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const active = item.id === activeSection;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "relative block rounded-sm px-3 py-2 text-sm transition-colors duration-200",
                        active ? "text-fg" : "text-fg-secondary hover:text-fg",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3 bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-out-expo",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={resumeHref}
              download={resumeFileName}
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Download aria-hidden="true" className="size-3.5" />
              Download CV
            </Button>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-line-strong lg:hidden"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              {menuOpen ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <m.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between gap-10 py-8">
              <nav aria-label="Mobile">
                <ul>
                  {items.map((item, index) => (
                    <m.li
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.45, ease: EASE }}
                    >
                      <a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        aria-current={item.id === activeSection ? "true" : undefined}
                        onClick={(event) => handleMobileNavigate(event, item.href)}
                        className="flex items-baseline gap-4 border-b border-line py-4 text-3xl font-semibold tracking-display text-fg"
                      >
                        <span
                          className={cn(
                            "font-mono text-xs tracking-normal",
                            item.id === activeSection ? "text-accent" : "text-fg-muted",
                          )}
                        >
                          {formatIndex(index)}
                        </span>
                        {item.label}
                      </a>
                    </m.li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="block break-all text-fg-secondary transition-colors hover:text-fg"
                >
                  {email}
                </a>
                <Button
                  href={resumeHref}
                  download={resumeFileName}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Download CV
                </Button>
              </div>
            </Container>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

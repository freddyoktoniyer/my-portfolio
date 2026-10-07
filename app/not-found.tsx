import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Container className="flex min-h-[70dvh] flex-col justify-center py-32">
        <p className="label-mono text-accent">404 / Not found</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-display text-fg sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-lg text-fg-secondary">
          The portfolio is a single page — everything lives on the home page.
        </p>
        <Link
          href="/"
          className={buttonStyles({ variant: "secondary", className: "mt-10 self-start" })}
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </Container>
    </main>
  );
}

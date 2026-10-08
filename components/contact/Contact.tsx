import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/navigation";
import { contact, profile } from "@/data/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      navSection="contact"
      labelledBy="contact-title"
      className="overflow-hidden border-t border-line sm:pb-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_80%_100%] from-accent/8 to-transparent to-60%"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-plus opacity-60" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="09 / Contact"
            size="display"
            title={contact.titleLines.map((line, index) => (
              <span key={line} className="block">
                {line}
                {index < contact.titleLines.length - 1 ? " " : null}
              </span>
            ))}
          />
        </Reveal>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-md text-pretty text-xl leading-relaxed text-fg-secondary">
              {contact.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`mailto:${profile.email}`} size="lg">
                <Mail aria-hidden="true" className="size-4" />
                Email Me
              </Button>
              <Button href={profile.linkedin} external variant="secondary" size="lg">
                LinkedIn
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </Button>
              <Button
                href={profile.resume.href}
                download={profile.resume.fileName}
                variant="ghost"
                size="lg"
              >
                <Download aria-hidden="true" className="size-4" />
                Download CV
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <SocialLinks links={socialLinks} />
            <p className="mt-6 flex items-center gap-2 text-fg-secondary">
              <MapPin aria-hidden="true" className="size-4 text-fg-faint" />
              {profile.location}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

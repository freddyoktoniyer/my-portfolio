import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Education } from "@/components/education/Education";
import { EngineeringCapabilities } from "@/components/engineering/EngineeringCapabilities";
import { ProblemSolving } from "@/components/engineering/ProblemSolving";
import { SystemThinking } from "@/components/engineering/SystemThinking";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { getPersonJsonLd, serializeJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getPersonJsonLd()) }}
      />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <SelectedWork />
        <ExperienceTimeline />
        <EngineeringCapabilities />
        <SystemThinking />
        <ProblemSolving />
        <Education />
        <Contact />
      </main>
    </>
  );
}

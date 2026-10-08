import { About } from "@/components/about/About";
import { ConsultingApproach } from "@/components/approach/ConsultingApproach";
import { WorkingApproach } from "@/components/approach/WorkingApproach";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { Contact } from "@/components/contact/Contact";
import { Education } from "@/components/education/Education";
import { SystemThinking } from "@/components/engineering/SystemThinking";
import { TechnicalFoundation } from "@/components/engineering/TechnicalFoundation";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Hero } from "@/components/hero/Hero";
import { CoreStrength } from "@/components/strengths/CoreStrength";
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
        <CoreStrength />
        <Capabilities />
        <WorkingApproach />
        <ConsultingApproach />
        <CaseStudies />
        <TechnicalFoundation />
        <SystemThinking />
        <ExperienceTimeline />
        <Education />
        <Contact />
      </main>
    </>
  );
}

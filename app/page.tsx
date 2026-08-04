import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { AboutMe } from "@/components/sections/about-me";
import { CoreExpertise } from "@/components/sections/core-expertise";
import { ProfessionalExperience } from "@/components/sections/professional-experience";
import { SubjectsITeach } from "@/components/sections/subjects-i-teach";
import { TeachingMethodology } from "@/components/sections/teaching-methodology";
import { CurriculumDevelopment } from "@/components/sections/curriculum-development";
import { SessionAuditing } from "@/components/sections/session-auditing";
import { LessonPlanningAssessment } from "@/components/sections/lesson-planning-assessment";
import { DigitalTeachingSkills } from "@/components/sections/digital-teaching-skills";
import { ProjectsContributions } from "@/components/sections/projects-contributions";
import { Certifications } from "@/components/sections/certifications";
import { AwardsRecognition } from "@/components/sections/awards-recognition";
import { LetsConnect } from "@/components/sections/lets-connect";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <AboutMe />
      <CoreExpertise />
      <ProfessionalExperience />
      <SubjectsITeach />
      <TeachingMethodology />
      <CurriculumDevelopment />
      <SessionAuditing />
      <LessonPlanningAssessment />
      <DigitalTeachingSkills />
      <ProjectsContributions />
      <Certifications />
      <AwardsRecognition />
      <LetsConnect />
    </main>
  );
}

import { Section } from "@/components/layout/section";
import { ProcessStepper } from "@/components/sections/process-stepper";
import { curriculumDevelopmentSteps } from "@/data/curriculum-development";

export function CurriculumDevelopment() {
  return (
    <Section id="curriculum-development" title="Curriculum Development">
      <ProcessStepper
        steps={curriculumDevelopmentSteps}
        ariaLabel="Curriculum development process, six steps"
      />
    </Section>
  );
}

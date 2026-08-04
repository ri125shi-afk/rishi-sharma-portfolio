import { Section } from "@/components/layout/section";
import { ProcessStepper } from "@/components/sections/process-stepper";
import { sessionAuditingSteps } from "@/data/session-auditing";

export function SessionAuditing() {
  return (
    <Section id="session-auditing" title="Session Auditing & Quality Assurance" tone="muted">
      <ProcessStepper
        steps={sessionAuditingSteps}
        ariaLabel="Session auditing and quality assurance process, five steps"
      />
    </Section>
  );
}

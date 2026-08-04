import type { ProcessStep } from "@/types";

interface ProcessStepperProps {
  steps: ProcessStep[];
  /** Accessible label for the stepper's implicit list semantics. */
  ariaLabel: string;
}

/**
 * Renders as an <ol> since these are genuine ordered processes (each
 * step's position communicates real information — you observe before
 * you evaluate, you evaluate before you give feedback). The dashed
 * connector line is decorative (aria-hidden) and purely visual.
 */
export function ProcessStepper({ steps, ariaLabel }: ProcessStepperProps) {
  return (
    <ol
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.id}
            className="relative flex flex-1 flex-col items-center gap-3 text-center"
          >
            {!isLast ? (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-7 hidden h-px w-full border-t border-dashed border-border lg:block"
              />
            ) : null}
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
            </span>
            <span className="max-w-[9rem] text-sm font-semibold text-foreground">
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

interface SectionProps {
  /** Section landmark id, used for the in-page nav's anchor links. */
  id: string;
  /** Uppercase heading, e.g. "Core Expertise" -> renders as "CORE EXPERTISE —" */
  title: string;
  /** Optional supporting copy shown under the heading. */
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternates the section background per the design's light/off-white rhythm. */
  tone?: "default" | "muted";
  /** Extra element(s) rendered inline next to the heading (rare — e.g. none currently). */
  headingSlot?: React.ReactNode;
}

/**
 * Every content section in the design shares the same heading pattern:
 * a bold uppercase title immediately followed by a short gold dash, sitting
 * on its own row. This component owns that pattern once so no section
 * component has to re-implement the eyebrow markup or its spacing.
 */
export function Section({
  id,
  title,
  description,
  children,
  className,
  tone = "default",
  headingSlot,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-20 py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-secondary/60",
        className,
      )}
    >
      <Container>
        <div className="mb-10 flex items-center gap-3 sm:mb-12">
          <h2
            id={headingId}
            className="font-display text-xl font-extrabold uppercase tracking-tight text-primary sm:text-2xl"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="h-0.5 w-10 shrink-0 bg-accent" />
          {headingSlot}
        </div>
        {description ? (
          <p className="-mt-8 mb-10 max-w-2xl text-muted-foreground sm:mb-12">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

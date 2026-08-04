import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

/**
 * Rendered as an <ol> — this is a genuine reverse-chronological sequence,
 * not decorative numbering, so a real ordered list is the correct
 * semantic here (screen readers announce "item 1 of 2", etc.).
 */
export function ProfessionalExperience() {
  return (
    <Section id="experience" title="Professional Experience">
      <ol className="relative space-y-10 border-l-2 border-border pl-8 sm:pl-10">
        {experience.map((entry) => (
          <li key={entry.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[calc(2.5rem+5px)]"
            />
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {entry.role}
                  </h3>
                  <Badge variant="accent">{entry.period}</Badge>
                </div>
                <p className="mb-4 text-sm font-semibold text-muted-foreground">
                  {entry.organization}
                </p>
                <ul className="space-y-2">
                  {entry.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span aria-hidden="true" className="text-accent">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

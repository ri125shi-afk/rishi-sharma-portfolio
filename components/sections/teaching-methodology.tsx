import { Section } from "@/components/layout/section";
import {
  teachingMethodology,
  teachingMethodologyDescriptions,
} from "@/data/teaching-methodology";

export function TeachingMethodology() {
  return (
    <Section id="methodology" title="Teaching Methodology">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teachingMethodology.map(({ id, label, icon: Icon }) => (
          <li
            key={id}
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center shadow-sm"
          >
            <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground">{label}</span>
            <p className="text-xs text-muted-foreground">
              {teachingMethodologyDescriptions[id]}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

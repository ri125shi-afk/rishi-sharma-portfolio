import { Calculator } from "lucide-react";

import { Section } from "@/components/layout/section";
import { subjects } from "@/data/subjects";

export function SubjectsITeach() {
  return (
    <Section id="subjects" title="Subjects I Teach" tone="muted">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {subjects.map((subject) => (
          <li
            key={subject}
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-5 text-center shadow-sm"
          >
            <Calculator className="h-6 w-6 text-accent" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">
              {subject}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

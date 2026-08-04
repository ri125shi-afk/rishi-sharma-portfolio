import { ClipboardList } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lessonPlanningItems, assessmentDesignItems } from "@/data/lesson-planning";

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm uppercase tracking-wide text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="text-accent">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function LessonPlanningAssessment() {
  return (
    <Section
      id="lesson-planning"
      title="Lesson Planning & Assessment Design"
    >
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        <ChecklistCard title="Lesson Planning" items={lessonPlanningItems} />
        <ChecklistCard title="Assessment Design" items={assessmentDesignItems} />

        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-sm sm:flex"
        >
          <ClipboardList className="h-7 w-7 text-accent" />
        </span>
      </div>
    </Section>
  );
}

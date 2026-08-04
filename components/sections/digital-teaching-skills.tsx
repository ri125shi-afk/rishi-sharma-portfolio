import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { digitalTeachingSkills } from "@/data/digital-skills";

export function DigitalTeachingSkills() {
  return (
    <Section id="digital-skills" title="Digital Teaching Skills" tone="muted">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {digitalTeachingSkills.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-3 p-5 text-center">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground">
                  {label}
                </span>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

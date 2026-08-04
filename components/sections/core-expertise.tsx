import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { coreExpertise } from "@/data/core-expertise";

export function CoreExpertise() {
  return (
    <Section id="expertise" title="Core Expertise" tone="muted">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {coreExpertise.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-3 p-5 text-center">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
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

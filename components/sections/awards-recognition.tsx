import { Trophy } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { awards } from "@/data/awards";

export function AwardsRecognition() {
  return (
    <Section id="awards" title="Awards & Recognition">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {awards.map((award) => (
          <li key={award.id}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
                <Trophy className="h-8 w-8 text-accent" aria-hidden="true" />
                <span className="text-sm font-bold text-foreground">
                  {award.title}
                </span>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

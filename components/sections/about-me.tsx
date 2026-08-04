import Image from "next/image";

import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/constants/site";
import { aboutHighlights } from "@/data/about-highlights";

export function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-xl sm:mx-0 sm:w-full">
          <Image
            src="/images/rishi-sharma-portrait.png"
            alt={`Portrait of ${siteConfig.name}`}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p>
            I am a passionate mathematics educator with experience in
            teaching, curriculum development, content creation, and session
            auditing. I specialize in making complex mathematical concepts
            simple, engaging, and application-oriented for diverse learners.
          </p>
          <p>
            My goal is to empower students with strong conceptual
            foundations, critical thinking skills, and a love for
            mathematics.
          </p>
        </div>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {aboutHighlights.map(({ id, label, icon: Icon }) => (
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

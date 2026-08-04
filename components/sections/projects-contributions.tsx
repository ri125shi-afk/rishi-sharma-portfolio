import Image from "next/image";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsContributions() {
  return (
    <Section id="projects" title="Projects & Academic Contributions">
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.id}>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
                <div className="relative aspect-video sm:aspect-auto">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

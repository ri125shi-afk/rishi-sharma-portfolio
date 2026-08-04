import { FileBadge } from "lucide-react";

import { Section } from "@/components/layout/section";
import { certifications } from "@/data/certifications";

/**
 * The approved design shows these as empty outlined tiles (no badge
 * artwork supplied yet) — rendered faithfully as-is below. Swap the
 * icon fallback for <Image src={cert.image}> once badge files and
 * final titles are provided; the data shape (data/certifications.ts)
 * already supports it.
 */
export function Certifications() {
  return (
    <Section id="certifications" title="Certifications" tone="muted">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card/50 p-6 text-center">
              <FileBadge
                className="h-8 w-8 text-muted-foreground/40"
                aria-hidden="true"
              />
              <span className="text-xs text-muted-foreground/70">
                {cert.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

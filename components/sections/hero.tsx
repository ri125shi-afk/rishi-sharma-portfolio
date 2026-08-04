import Image from "next/image";
import { Mail, Linkedin, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

/**
 * Full-bleed navy hero. Renders as <section id="top"> so the Navbar's
 * logo link (href="#top") has a real anchor target, and so this section
 * participates in the same landmark pattern as the rest of the page
 * even though it doesn't use the shared <Section> wrapper (its layout —
 * two-column split with a dark background — is structurally different
 * from every other section).
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="bg-primary text-primary-foreground"
    >
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {siteConfig.name.toUpperCase()}
          </h1>
          <p className="mt-2 text-lg font-semibold text-accent">
            {siteConfig.title}
          </p>

          <ul className="mt-4 space-y-1">
            {siteConfig.roles.map((role) => (
              <li
                key={role}
                className="text-sm text-primary-foreground/70 sm:text-base"
              >
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-lg text-primary-foreground/80">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={siteConfig.resumeUrl} download>
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Email</dt>
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dd>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">LinkedIn</dt>
              <Linkedin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dd>
                <a
                  href={siteConfig.linkedin.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-accent"
                >
                  {siteConfig.linkedin.label}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Location</dt>
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dd>{siteConfig.location}</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
          <Image
            src="/images/rishi-sharma.png"
            alt={`Portrait of ${siteConfig.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 480px, 384px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Mail, Linkedin, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/constants/site";

/**
 * Matches the approved design's dark "Let's Connect" panel: contact
 * strip, QR code, resume CTA. One addition beyond what the static
 * mockup shows: a working contact form. The brief's own tech stack
 * specifies "React Hook Form + Zod" under Forms, and the current design
 * has no functional way to actually send a message (only a mailto
 * link) — so a static image can't fulfill that stated requirement.
 * The form is scoped to this section only; nothing else about the
 * approved layout changes.
 */
export function LetsConnect() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mb-10 flex items-center justify-center gap-3 sm:mb-12">
          <h2
            id="contact-heading"
            className="font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl"
          >
            Let&apos;s Connect
          </h2>
          <span aria-hidden="true" className="h-0.5 w-10 shrink-0 bg-accent" />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {siteConfig.linkedin.label}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>

          <div className="relative h-36 w-36 overflow-hidden rounded-lg bg-white p-2">
            <Image
              src="/images/linkedin-qr-code.png"
              alt="QR code linking to Rishi Sharma's LinkedIn profile"
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          <Button asChild size="lg">
            <a href={siteConfig.resumeUrl} download>
              Download Resume
            </a>
          </Button>
        </div>

        <Card className="mx-auto mt-14 max-w-2xl bg-background text-left">
          <CardContent className="p-6 sm:p-8">
            <h3 className="mb-1 font-display text-lg font-bold text-primary">
              Send a Message
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Have a question about a course, a collaboration, or an audit?
              Reach out directly.
            </p>
            <ContactForm />
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

import { Mail, Linkedin, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
              {siteConfig.initials}
            </span>
            <span className="font-display text-lg font-bold">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            {siteConfig.title}
          </p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/60">
            Creating impact through education and continuous learning.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary-foreground/50">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary-foreground/50">
            Connect
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.linkedin.label}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/10 py-5">
        <Container>
          <p className="text-center text-xs text-primary-foreground/50">
            © {year} {siteConfig.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

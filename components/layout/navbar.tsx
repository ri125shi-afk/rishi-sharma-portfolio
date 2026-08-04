"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

/**
 * Sticky header matching the approved design: circular "RS" mark on the
 * left, a horizontal link row, and a solid "Download Resume" CTA on the
 * right. Below `md`, the link row collapses into a disclosure panel
 * triggered by a menu button (the mockup doesn't show a mobile state, so
 * this is the accessibility-required responsive behavior referenced in
 * the brief — a horizontal 5-link row plus a button has no room on a
 * 375px viewport without collapsing).
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.href.slice(1)));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md"
          aria-label={`${siteConfig.name} — home`}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
  <Image
    src="/images/rishi-sharma-portrait.png"
    alt={siteConfig.name}
    fill
    className="object-cover"
    priority
  />
</div>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  isActive && "font-semibold text-primary",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={siteConfig.resumeUrl} download>
              Download Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-nav-panel"
          className="border-t border-border bg-background md:hidden"
        >
          <nav aria-label="Mobile primary" className="flex flex-col px-5 py-4">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "border-b border-border py-3 text-sm font-medium text-muted-foreground last:border-b-0",
                    isActive && "font-semibold text-primary",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Button asChild size="sm" className="mt-4 w-full">
              <a href={siteConfig.resumeUrl} download>
                Download Resume
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

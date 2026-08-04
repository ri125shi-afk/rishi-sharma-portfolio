"use client";

import { useEffect, useState } from "react";

/**
 * Observes each section id and returns whichever one is currently most
 * visible in the viewport, so the Navbar can mark the matching link
 * aria-current="true" as the user scrolls. Falls back to `null` (no
 * active link) until the first section crosses the threshold, so the
 * nav never shows a wrong/stale active state on load.
 */
export function useScrollSpy(sectionIds: string[], offsetPx = 96) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offsetPx}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offsetPx]);

  return activeId;
}

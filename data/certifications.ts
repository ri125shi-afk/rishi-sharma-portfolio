import type { Certification } from "@/types";

/**
 * Certification badge artwork was not supplied with the approved design
 * (the mockup shows empty placeholder tiles). Populate `image` for each
 * entry once badge files are provided, then swap the CertificationCard
 * render from icon-fallback to <Image>.
 */
export const certifications: Certification[] = [
  { id: "cert-1", title: "", issuer: "Issuing body pending" },
  { id: "cert-2", title: "", issuer: "Issuing body pending" },
  { id: "cert-3", title: "", issuer: "Issuing body pending" },
];

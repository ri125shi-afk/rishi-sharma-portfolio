import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names and resolves Tailwind class conflicts
 * (e.g. cn("px-2", condition && "px-4") -> "px-4" wins, not both).
 * Standard shadcn/ui utility — every ui/ and sections/ component depends
 * on this for variant + override composition.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * `as` lets call sites render the wrapper as the correct landmark
   * element (e.g. <header>, <footer>) instead of always defaulting to
   * <div>, without duplicating the width/padding rules everywhere.
   */
  as?: React.ElementType;
}

/**
 * Centralizes the page's max-width and horizontal gutters in one place.
 * Every section composes its content inside this instead of repeating
 * `mx-auto max-w-[1320px] px-5 sm:px-8 ...` at each call site.
 */
export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Component>
  );
}

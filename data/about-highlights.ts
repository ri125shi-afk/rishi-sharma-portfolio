import { Users, Target, Gauge, RefreshCcw } from "lucide-react";
import type { AboutHighlight } from "@/types";

export const aboutHighlights: AboutHighlight[] = [
  { id: "student-focused", label: "Student Focused", icon: Users },
  { id: "concept-driven", label: "Concept Driven", icon: Target },
  { id: "assessment-oriented", label: "Assessment Oriented", icon: Gauge },
  { id: "continuous-improvement", label: "Continuous Improvement", icon: RefreshCcw },
];

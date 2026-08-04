import { Atom, Sparkles, Lightbulb as Bulb, RefreshCw } from "lucide-react";
import type { AboutHighlight } from "@/types";

export const teachingMethodology: AboutHighlight[] = [
  { id: "concept-based", label: "Concept-Based Learning", icon: Atom },
  { id: "active-learning", label: "Active Learning", icon: Sparkles },
  { id: "problem-solving", label: "Problem Solving", icon: Bulb },
  { id: "continuous-assessment", label: "Continuous Assessment", icon: RefreshCw },
];

export const teachingMethodologyDescriptions: Record<string, string> = {
  "concept-based": "Focus on building strong conceptual understanding.",
  "active-learning": "Encouraging participation and real-world applications.",
  "problem-solving": "Strengthening analytical and logical thinking.",
  "continuous-assessment": "Regular assessment and feedback for improvement.",
};

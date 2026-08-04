import { Eye, ClipboardCheck, MessageSquare, TrendingUp, Target } from "lucide-react";
import type { ProcessStep } from "@/types";

export const sessionAuditingSteps: ProcessStep[] = [
  { id: "observe", label: "Observe", icon: Eye },
  { id: "evaluate", label: "Evaluate", icon: ClipboardCheck },
  { id: "provide-feedback", label: "Provide Feedback", icon: MessageSquare },
  { id: "improve-instruction", label: "Improve Instruction", icon: TrendingUp },
  { id: "measure-outcomes", label: "Measure Outcomes", icon: Target },
];

import { Target, ClipboardList, GitBranch, Users, ClipboardCheck, RefreshCw } from "lucide-react";
import type { ProcessStep } from "@/types";

export const curriculumDevelopmentSteps: ProcessStep[] = [
  { id: "learning-outcomes", label: "Learning Outcomes", icon: Target },
  { id: "curriculum-mapping", label: "Curriculum Mapping", icon: ClipboardList },
  { id: "lesson-planning", label: "Lesson Planning", icon: GitBranch },
  { id: "instruction", label: "Instruction", icon: Users },
  { id: "assessment", label: "Assessment", icon: ClipboardCheck },
  { id: "continuous-improvement", label: "Continuous Improvement", icon: RefreshCw },
];

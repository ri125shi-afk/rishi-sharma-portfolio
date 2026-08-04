import {
  BookOpen,
  Lightbulb,
  ClipboardCheck,
  FileText,
  PenSquare,
  Search,
  UserCheck,
  Monitor,
} from "lucide-react";
import type { SkillTile } from "@/types";

export const coreExpertise: SkillTile[] = [
  { id: "curriculum-development", label: "Curriculum Development", icon: BookOpen },
  { id: "instructional-design", label: "Instructional Design", icon: Lightbulb },
  { id: "assessment-design", label: "Assessment Design", icon: ClipboardCheck },
  { id: "lesson-planning", label: "Lesson Planning", icon: FileText },
  { id: "mathematics-content-creation", label: "Mathematics Content Creation", icon: PenSquare },
  { id: "session-auditing", label: "Session Auditing", icon: Search },
  { id: "academic-mentoring", label: "Academic Mentoring", icon: UserCheck },
  { id: "digital-learning", label: "Digital Learning", icon: Monitor },
];

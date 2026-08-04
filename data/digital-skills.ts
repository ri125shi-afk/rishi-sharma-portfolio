import { Layers, AppWindow, Chrome, CircleDot, Sparkles, LineChart } from "lucide-react";
import type { SkillTile } from "@/types";

export const digitalTeachingSkills: SkillTile[] = [
  { id: "lms-platforms", label: "LMS Platforms", icon: Layers },
  { id: "microsoft-office", label: "Microsoft Office", icon: AppWindow },
  { id: "google-workspace", label: "Google Workspace", icon: Chrome },
  { id: "geogebra", label: "GeoGebra", icon: CircleDot },
  { id: "ai-productivity-tools", label: "AI Productivity Tools", icon: Sparkles },
  { id: "digital-teaching", label: "Digital Teaching", icon: LineChart },
];

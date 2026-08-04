import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface SkillTile {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
}

export interface AboutHighlight {
  id: string;
  label: string;
  icon: LucideIcon;
}

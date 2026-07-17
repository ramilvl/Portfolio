export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  span?: 'wide' | 'normal';
}

export interface Responsibility {
  label: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  features?: string[];
  featured?: boolean;
  kind: string;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education';
  title: string;
  org: string;
  period: string;
  current?: boolean;
}

export interface Language {
  name: string;
  note?: string;
}

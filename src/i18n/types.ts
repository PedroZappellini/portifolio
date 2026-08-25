export type Locale = "pt" | "en";

export interface NavDictionary {
  about: string;
  projects: string;
  skills: string;
  contact: string;
  resume: string;
}

export interface HeroDictionary {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
  location: string;
  available: string;
}

export interface AboutDictionary {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlightsTitle: string;
  highlights: { title: string; description: string }[];
  educationTitle: string;
  education: { degree: string; school: string; period: string }[];
}

export interface ProjectDictionary {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewProject: string;
  allProjects: string;
  viewCode: string;
  viewDemo: string;
  close: string;
  toolsUsed: string;
  gallery: string;
  placeholderNote: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: NavDictionary;
  hero: HeroDictionary;
  about: AboutDictionary;
  projects: ProjectDictionary;
}

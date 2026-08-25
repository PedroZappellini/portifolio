export interface LocalizedText {
  pt: string;
  en: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  tools: string[];
  cover: string;
  images: string[];
  video?: string;
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

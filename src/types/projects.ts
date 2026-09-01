export interface LocalizedText {
  pt: string;
  en: string;
}

export type Category = "Project" | "Feature" | "Automation" | "Other";

export interface Project {
  category: Category;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  tools: { name: string; icon: React.ReactNode }[];
  cover: string;
  images: string[];
  video?: string;
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface TitledList<T> {
  title: LocalizedText;
  items: T[];
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  title: LocalizedText;
  stack: string;
  summaryTitle: LocalizedText;
  summary: LocalizedText;
}

export interface TechnicalKnowledgeEntry {
  category: LocalizedText;
  items: LocalizedText;
}

export interface ExperienceEntry {
  company: string;
  role: LocalizedText;
  period: string;
  description: LocalizedText;
  descriptionLink: string;
  highlights: LocalizedText[];
  keywords?: { title: LocalizedText; keywords: LocalizedText };
}

export interface LanguagesEntry {
  language: LocalizedText;
  level: LocalizedText;
}

export interface ResumeData {
  contactInfo: ContactInfo;
  education: TitledList<LocalizedText>;
  technicalKnowledge: TitledList<TechnicalKnowledgeEntry>;
  experience: TitledList<ExperienceEntry>;
  languages: TitledList<LanguagesEntry>;
}

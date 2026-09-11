export interface LocalizedText {
  pt: string;
  en: string;
}

export type Category = "Frontend" | "Backend" | "Data" | "Infra" | "All";

export interface SkillContent {
  category: Category | Category[];
  name: string;
  description: LocalizedText;
  icon: React.ReactNode;
}

export interface Skills {
  react: SkillContent;
  reactNative: SkillContent;
  typescript: SkillContent;
  javascript: SkillContent;
  node: SkillContent;
  express: SkillContent;
  restApi: SkillContent;
  postgre: SkillContent;
  prisma: SkillContent;
  mongo: SkillContent;
  gitGithub: SkillContent;
  docker: SkillContent;
  ciCd: SkillContent;
  scrum: SkillContent;
  kanban: SkillContent;
}

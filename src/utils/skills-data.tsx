import { Cloud, Database, MonitorSmartphone, Server } from "lucide-react";
import { SkillCategories, Skills } from "../types/skills";
import {
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactJSIcon,
  ReactNativeIcon,
  TypescriptIcon,
} from "./skillIcons";

export const skills: Skills = {
  react: {
    category: "Frontend",
    name: "React.js",
    description: {
      pt: "Biblioteca para construir interfaces reativas.",
      en: "Library for building reactive interfaces.",
    },
    icon: <ReactJSIcon />,
  },
  reactNative: {
    category: "Frontend",
    name: "React Native",
    description: {
      pt: "Apps mobile com a mesma lógica do React.",
      en: "Mobile apps using the same logic as React.",
    },
    icon: <ReactNativeIcon />,
  },
  typescript: {
    category: ["Frontend", "Backend"],
    name: "Typescript",
    description: {
      pt: "JavaScript com tipagem estática.",
      en: "JavaScript with static typing.",
    },
    icon: <TypescriptIcon />,
  },
  javascript: {
    category: "Frontend",
    name: "Javascript",
    description: {
      pt: "Base de tudo no front e no back.",
      en: "The foundation of both frontend and backend.",
    },
    icon: <JavascriptIcon />,
  },
  node: {
    category: "Backend",
    name: "Node.js",
    description: {
      pt: "Runtime JavaScript no lado do servidor.",
      en: "JavaScript runtime for the server side.",
    },
    icon: <NodeJSIcon />,
  },
  express: {
    category: "Backend",
    name: "Express",
    description: {
      pt: "Framework minimalista para APIs REST.",
      en: "Minimalist framework for REST APIs.",
    },
    icon: <ExpressIcon />,
  },
  restApi: {
    category: "Backend",
    name: "REST API",
    description: {
      pt: "Padrão de comunicação entre cliente e servidor.",
      en: "Standard for client-server communication.",
    },
    icon: "",
  },
  postgre: {
    category: "Data",
    name: "PostgreSQL",
    description: {
      pt: "Banco de dados relacional.",
      en: "Relational database.",
    },
    icon: <PostgreSQLIcon />,
  },
  prisma: {
    category: "Data",
    name: "Prisma",
    description: {
      pt: "ORM com tipagem para acessar o banco.",
      en: "Typed ORM for database access.",
    },
    icon: <PrismaIcon />,
  },
  mongo: {
    category: "Data",
    name: "MongoDB",
    description: {
      pt: "Banco de dados não relacional (NoSQL).",
      en: "Non-relational (NoSQL) database.",
    },
    icon: <MongoDBIcon />,
  },
  gitGithub: {
    category: "Infra",
    name: "Git/Github",
    description: {
      pt: "Controle de versão e colaboração em código.",
      en: "Version control and code collaboration.",
    },
    icon: <GitIcon />,
  },
  docker: {
    category: "Infra",
    name: "Docker",
    description: {
      pt: "Containers para padronizar o ambiente.",
      en: "Containers to standardize environments.",
    },
    icon: <DockerIcon />,
  },
  ciCd: {
    category: "Infra",
    name: "CI/CD",
    description: {
      pt: "Automação de build, testes e deploy.",
      en: "Automated build, test, and deploy.",
    },
    icon: "",
  },
  scrum: {
    category: "Infra",
    name: "Scrum",
    description: {
      pt: "Framework ágil para organizar o trabalho em sprints.",
      en: "Agile framework for organizing work in sprints.",
    },
    icon: "",
  },
  kanban: {
    category: "Infra",
    name: "Kanban",
    description: {
      pt: "Quadro visual para gerenciar o fluxo de tarefas.",
      en: "Visual board for managing task flow.",
    },
    icon: "",
  },
};

export const skillsCategory: SkillCategories = {
  frontend: {
    icon: <MonitorSmartphone size={20} className="text-skill-frontend-icon" />,
    backgroundColor: "bg-skill-frontend-bg",
    name: {
      pt: "Front-end",
      en: "Front-end",
    },
    description: {
      pt: "Interfaces web e mobile focadas em experiência do usuário, usando React no navegador e React Native para aplicativos nativos, com TypeScript garantindo tipagem segura em todo o processo.",
      en: "Web and mobile interfaces focused on user experience, using React in the browser and React Native for native apps, with TypeScript ensuring safe typing throughout.",
    },
    items: [
      skills.react,
      skills.reactNative,
      skills.typescript,
      skills.javascript,
    ],
  },
  backend: {
    icon: <Server size={20} className="text-skill-backend-icon" />,
    backgroundColor: "bg-skill-backend-bg",
    name: {
      pt: "Back-end",
      en: "Back-end",
    },
    description: {
      pt: "Construção de APIs e serviços que sustentam a lógica de negócio das aplicações, com Node.js e Express expondo endpoints REST consumidos pelo front-end.",
      en: "Building the APIs and services that power application logic, with Node.js and Express exposing REST endpoints consumed by the front-end.",
    },
    items: [skills.node, skills.express, skills.restApi],
  },
  data: {
    icon: <Database size={20} className="text-skill-data-icon" />,
    backgroundColor: "bg-skill-data-bg",
    name: {
      pt: "Dados",
      en: "Data",
    },
    description: {
      pt: "Modelagem, armazenamento e consulta de dados, combinando bancos relacionais (PostgreSQL) e não relacionais (MongoDB), com o Prisma facilitando o acesso ao banco de forma tipada.",
      en: "Modeling, storing, and querying data by combining relational (PostgreSQL) and non-relational (MongoDB) databases, with Prisma providing type-safe database access.",
    },
    items: [skills.postgre, skills.prisma, skills.mongo],
  },
  infra: {
    icon: <Cloud size={20} className="text-skill-infra-icon" />,
    backgroundColor: "bg-skill-infra-bg",
    name: {
      pt: "Infraestrutura & Processo",
      en: "Infrastructure & Process",
    },
    description: {
      pt: "Práticas e ferramentas que dão suporte ao ciclo de desenvolvimento: versionamento com Git, containerização com Docker, automação de entregas via CI/CD, e metodologias ágeis para organizar o trabalho em equipe.",
      en: "Practices and tools that support the development lifecycle: version control with Git, containerization with Docker, deployment automation via CI/CD, and agile methodologies for organizing teamwork.",
    },
    items: [skills.gitGithub, skills.docker, skills.scrum, skills.kanban],
  },
};

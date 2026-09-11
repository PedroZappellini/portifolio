import { Skills } from "../types/skills";
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

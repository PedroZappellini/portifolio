import { Cloud, Database, MonitorSmartphone, Server } from "lucide-react";
import { Dictionary } from "../../types/locale";
import { tools } from "@/src/utils/tools";

export const pt: Dictionary = {
  meta: {
    title: "Pedro Zappellini Rohwedder — Desenvolvedor Full Stack",
    description:
      "Portfólio de Pedro Zappellini Rohwedder, desenvolvedor Full Stack especializado em React, React Native, Node.js e TypeScript.",
  },
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    skills: "Stack",
    contact: "Contato",
    resume: "Currículo",
  },
  hero: {
    greeting: "Olá, eu sou",
    name: "Pedro Zappellini",
    role: "Desenvolvedor Full Stack",
    tagline:
      "Construo produtos completos, de ponta a ponta — da interface ao banco de dados.",
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
    location: "Campinas, SP — Brasil",
    available: "Disponível para novas oportunidades",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Tecnologia com visão de produto",
    paragraphs: [
      "Sou desenvolvedor Full Stack formado em Engenharia de Software pela PUC Campinas, com base sólida em React e React Native construída em produtos SaaS e aplicativos mobile para diferentes segmentos de negócio.",
      "Também atuei de perto com automação de processos e levantamento de requisitos, o que me deu uma visão mais completa de produto: entender o problema de quem vai usar o sistema, avaliar a viabilidade técnica e só então desenhar a solução certa — não apenas a mais rápida de implementar.",
      "Hoje meu foco é o desenvolvimento full stack completo: Node.js, TypeScript, bancos de dados relacionais e não relacionais, arquitetura de software e Docker, sempre construindo projetos do zero, do design ao deploy em produção.",
    ],
    highlightsTitle: "O que eu trago para o time",
    highlights: [
      {
        title: "Visão de produto",
        description:
          "Experiência real levantando requisitos e traduzindo necessidades de negócio em soluções técnicas viáveis.",
      },
      {
        title: "Full stack de verdade",
        description:
          "Confortável do front-end ao banco de dados: React/React Native no cliente, Node/Express na API, PostgreSQL e MongoDB nos dados.",
      },
      {
        title: "Entrega ponta a ponta",
        description:
          "Projetos próprios levados do design ao deploy, com Docker, CI/CD e boas práticas de arquitetura.",
      },
    ],
    educationTitle: "Formação",
    education: [
      {
        degree: "Engenharia de Software",
        school: "PUC Campinas",
        period: "Conclusão em 2024",
      },
    ],
  },
  resume: {
    title: "Currículo",
  },
  projects: {
    eyebrow: "Portfólio",
    title: "Projetos",
    subtitle:
      "Uma seleção de projetos que mostram como penso e construo — do planejamento à implementação.",
    viewProject: "Ver detalhes",
    allProjects: "Todos os projetos",
    filters: {
      all: "Todos",
      projects: "Projetos",
      features: "Funcionalidades",
      automations: "Automações",
    },
    viewCode: "Ver código",
    viewDemo: "Ver demo",
    close: "Fechar",
    toolsUsed: "Ferramentas utilizadas",
    gallery: "Galeria",
    placeholderNote:
      "Conteúdo de exemplo — substitua pelos seus projetos reais em src/lib/projects-data.ts.",
  },
  skills: {
    eyebrow: "Stack técnica",
    title: "Ferramentas que uso",
    subtitle:
      "Um stack full stack moderno, do front-end ao banco de dados, passando por infraestrutura e boas práticas de time.",
    categories: [
      {
        icon: (
          <MonitorSmartphone size={20} className="text-skill-frontend-icon" />
        ),
        backgroundColor: "bg-skill-frontend-bg",
        name: "Front-end",
        description:
          "Interfaces web e mobile focadas em experiência do usuário, usando React no navegador e React Native para aplicativos nativos, com TypeScript garantindo tipagem seguranças em todo o processo.",
        items: [
          tools.react,
          tools.reactNative,
          tools.typescript,
          tools.javascript,
        ],
      },
      {
        icon: <Server size={20} className="text-skill-backend-icon" />,
        backgroundColor: "bg-skill-backend-bg",
        name: "Back-end",
        description:
          "Construção de APIs e serviços que sustentam a lógica de negócio das aplicações, com Node.js e Express expondo endpoints REST consumidos pelo front-end.",
        items: [tools.node, tools.express, tools.restApi],
      },
      {
        icon: <Database size={20} className="text-skill-data-icon" />,
        backgroundColor: "bg-skill-data-bg",
        name: "Dados",
        description:
          "Modelagem, armazenamento e consulta de dados, combinando bancos relacionais (PostgreSQL) e não relacionais (MongoDB), com o Prisma facilitando o acesso ao banco de forma tipada.",
        items: [tools.postgre, tools.prisma, tools.mongo],
      },
      {
        icon: <Cloud size={20} className="text-skill-infra-icon" />,
        backgroundColor: "bg-skill-infra-bg",
        name: "Infraestrutura & Processo",
        description:
          "Práticas e ferramentas que dão suporte ao ciclo de desenvolvimento: versionamento com Git, containerização com Docker, automação de entregas via CI/CD, e metodologias ágeis para organizar o trabalho em equipe.",
        items: [tools.gitGithub, tools.docker, tools.scrum, tools.kanban],
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar",
    subtitle:
      "Estou em busca de novas oportunidades como desenvolvedor Full Stack. Me conta um pouco sobre a vaga ou o projeto.",
    nameLabel: "Nome",
    namePlaceholder: "Como você se chama?",
    emailLabel: "E-mail",
    emailPlaceholder: "seuemail@exemplo.com",
    messageLabel: "Mensagem",
    messagePlaceholder:
      "Conte um pouco sobre a oportunidade ou o motivo do contato...",
    fileInputPlaceholder:
      "Apenas arquivos .png, .jpeg, .pdf .docx, .xlsx, .txt são permitidos",
    maximumFileSize: "Os arquivos devem conter no maximo 4MB",
    submit: "Enviar mensagem",
    submitting: "Enviando...",
    submitted: "Enviado",
    tryAgain: "Tente novamente",
    lastEmailSent: "Último email enviado em",
    successTitle: "Mensagem enviada!",
    successBody: "Obrigado pelo contato — vou responder o quanto antes.",
    errorTitle: "Algo deu errado",
    errorBody:
      "Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou me chame diretamente por e-mail.",
    needToShare: "Precisa compartilhar mais detalhes ou anexos?",
    visitFullContact: "Acesse a página de contato completa.",
  },
  errors: {
    MISSING_FIELDS: "Alguns campos não foram preenchidos.",
    SEND_FAILED: "O email não foi enviado devido a um erro.",
    maximumReached: "Tamanho total excede o limite de 4MB",
  },
};

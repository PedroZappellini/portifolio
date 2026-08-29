import { Project } from "../types/projects";
import { tools } from "./tools";

export const projects: Project[] = [
  {
    category: "Website",
    slug: "painel-financeiro",
    title: { pt: "Painel Financeiro (SaaS)", en: "Financial Dashboard (SaaS)" },
    summary: {
      pt: "Dashboard multi-tenant para acompanhamento financeiro em tempo real, com autenticação, gráficos e exportação de relatórios.",
      en: "Multi-tenant dashboard for real-time financial tracking, with authentication, charts and report exports.",
    },
    description: {
      pt: "Aplicação SaaS completa para pequenas empresas acompanharem receitas, despesas e fluxo de caixa em um único painel. O front-end em React/TypeScript consome uma API própria em Node.js/Express, com autenticação via JWT e dados persistidos em PostgreSQL através do Prisma. Inclui gráficos interativos, filtros por período e exportação de relatórios em PDF/CSV.",
      en: "A complete SaaS application for small businesses to track revenue, expenses and cash flow in a single dashboard. The React/TypeScript front-end consumes a custom Node.js/Express API, with JWT authentication and data persisted in PostgreSQL via Prisma. Includes interactive charts, date-range filters and PDF/CSV report exports.",
    },
    tools: [
      tools.react,
      tools.typescript,
      tools.node,
      tools.express,
      tools.postgre,
      tools.prisma,
      tools.docker,
    ],
    cover: "/projects/painel-financeiro-cover.svg",
    images: [
      "/projects/painel-financeiro-cover.svg",
      "/projects/painel-financeiro-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: true,
  },
  {
    category: "Website",
    slug: "app-delivery",
    title: {
      pt: "App de Delivery (React Native)",
      en: "Delivery App (React Native)",
    },
    summary: {
      pt: "Aplicativo mobile de pedidos com acompanhamento em tempo real, notificações push e carrinho persistente.",
      en: "Mobile ordering app with real-time order tracking, push notifications and a persistent cart.",
    },
    description: {
      pt: "Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.Aplicativo mobile desenvolvido em React Native com TypeScript, focado em uma experiência de pedidos fluida: catálogo de produtos, carrinho persistente, acompanhamento do pedido em tempo real e notificações push. O back-end expõe uma API REST em Node.js consumida pelo app, com os dados de pedidos e catálogo armazenados em MongoDB.",
      en: "Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.Mobile app built with React Native and TypeScript, focused on a smooth ordering experience: product catalog, persistent cart, real-time order tracking and push notifications. The backend exposes a Node.js REST API consumed by the app, with order and catalog data stored in MongoDB.",
    },
    tools: [
      tools.reactNative,
      tools.typescript,
      tools.node,
      tools.restApi,
      tools.mongo,
    ],
    cover: "/projects/app-delivery-cover.svg",
    images: [
      "/projects/app-delivery-cover.svg",
      "/projects/app-delivery-2.svg",
      "/projects/app-delivery-cover.svg",
      "/projects/app-delivery-2.svg",
      "/projects/app-delivery-cover.svg",
      "/projects/app-delivery-2.svg",
      "/projects/app-delivery-cover.svg",
      "/projects/app-delivery-2.svg",
      "/projects/app-delivery-cover.svg",
      "/projects/app-delivery-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: true,
  },
  {
    category: "Mobile",
    slug: "api-automacao",
    title: {
      pt: "API de Automação de Processos",
      en: "Process Automation API",
    },
    summary: {
      pt: "Serviço de back-end para orquestrar fluxos de automação, com filas de tarefas e monitoramento de execução.",
      en: "Backend service that orchestrates automation workflows, with task queues and execution monitoring.",
    },
    description: {
      pt: "Serviço de back-end em Node.js/Express que orquestra fluxos de automação de tarefas repetitivas, inspirado em processos reais de automação (RPA) acompanhados na prática. Cada fluxo é modelado como uma sequência de etapas, processada em fila, com logs de execução persistidos em PostgreSQL. Containerizado com Docker e com pipeline de CI/CD via GitHub Actions.",
      en: "A Node.js/Express backend service that orchestrates automation workflows for repetitive tasks, inspired by real-world process automation (RPA) experience. Each workflow is modeled as a sequence of steps, processed through a queue, with execution logs persisted in PostgreSQL. Containerized with Docker and deployed through a GitHub Actions CI/CD pipeline.",
    },
    tools: [
      tools.node,
      tools.express,
      tools.postgre,
      tools.docker,
      tools.gitGithub,
    ],
    cover: "/projects/api-automacao-cover.svg",
    images: [
      "/projects/api-automacao-cover.svg",
      "/projects/api-automacao-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: false,
  },
  {
    category: "Automation",
    slug: "api-automacao",
    title: {
      pt: "API de Automação de Processos",
      en: "Process Automation API",
    },
    summary: {
      pt: "Serviço de back-end para orquestrar fluxos de automação, com filas de tarefas e monitoramento de execução.",
      en: "Backend service that orchestrates automation workflows, with task queues and execution monitoring.",
    },
    description: {
      pt: "Serviço de back-end em Node.js/Express que orquestra fluxos de automação de tarefas repetitivas, inspirado em processos reais de automação (RPA) acompanhados na prática. Cada fluxo é modelado como uma sequência de etapas, processada em fila, com logs de execução persistidos em PostgreSQL. Containerizado com Docker e com pipeline de CI/CD via GitHub Actions.",
      en: "A Node.js/Express backend service that orchestrates automation workflows for repetitive tasks, inspired by real-world process automation (RPA) experience. Each workflow is modeled as a sequence of steps, processed through a queue, with execution logs persisted in PostgreSQL. Containerized with Docker and deployed through a GitHub Actions CI/CD pipeline.",
    },
    tools: [
      tools.node,
      tools.express,
      tools.postgre,
      tools.docker,
      tools.gitGithub,
    ],
    cover: "/projects/api-automacao-cover.svg",
    images: [
      "/projects/api-automacao-cover.svg",
      "/projects/api-automacao-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: false,
  },
  {
    category: "Mobile",
    slug: "api-automacao",
    title: {
      pt: "API de Automação de Processos",
      en: "Process Automation API",
    },
    summary: {
      pt: "Serviço de back-end para orquestrar fluxos de automação, com filas de tarefas e monitoramento de execução.",
      en: "Backend service that orchestrates automation workflows, with task queues and execution monitoring.",
    },
    description: {
      pt: "Serviço de back-end em Node.js/Express que orquestra fluxos de automação de tarefas repetitivas, inspirado em processos reais de automação (RPA) acompanhados na prática. Cada fluxo é modelado como uma sequência de etapas, processada em fila, com logs de execução persistidos em PostgreSQL. Containerizado com Docker e com pipeline de CI/CD via GitHub Actions.",
      en: "A Node.js/Express backend service that orchestrates automation workflows for repetitive tasks, inspired by real-world process automation (RPA) experience. Each workflow is modeled as a sequence of steps, processed through a queue, with execution logs persisted in PostgreSQL. Containerized with Docker and deployed through a GitHub Actions CI/CD pipeline.",
    },
    tools: [
      tools.node,
      tools.express,
      tools.postgre,
      tools.docker,
      tools.gitGithub,
    ],
    cover: "/projects/api-automacao-cover.svg",
    images: [
      "/projects/api-automacao-cover.svg",
      "/projects/api-automacao-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: false,
  },
  {
    category: "Automation",
    slug: "api-automacao",
    title: {
      pt: "API de Automação de Processos",
      en: "Process Automation API",
    },
    summary: {
      pt: "Serviço de back-end para orquestrar fluxos de automação, com filas de tarefas e monitoramento de execução.",
      en: "Backend service that orchestrates automation workflows, with task queues and execution monitoring.",
    },
    description: {
      pt: "Serviço de back-end em Node.js/Express que orquestra fluxos de automação de tarefas repetitivas, inspirado em processos reais de automação (RPA) acompanhados na prática. Cada fluxo é modelado como uma sequência de etapas, processada em fila, com logs de execução persistidos em PostgreSQL. Containerizado com Docker e com pipeline de CI/CD via GitHub Actions.",
      en: "A Node.js/Express backend service that orchestrates automation workflows for repetitive tasks, inspired by real-world process automation (RPA) experience. Each workflow is modeled as a sequence of steps, processed through a queue, with execution logs persisted in PostgreSQL. Containerized with Docker and deployed through a GitHub Actions CI/CD pipeline.",
    },
    tools: [
      tools.node,
      tools.express,
      tools.postgre,
      tools.docker,
      tools.gitGithub,
    ],
    cover: "/projects/api-automacao-cover.svg",
    images: [
      "/projects/api-automacao-cover.svg",
      "/projects/api-automacao-2.svg",
    ],
    repoUrl: "https://github.com/PedroZappellini",
    demoUrl: undefined,
    featured: false,
  },
];

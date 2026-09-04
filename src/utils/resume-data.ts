import { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  contactInfo: {
    name: "PEDRO ZAPPELLINI ROHWEDDER",
    phone: "+55 (19) 99889-0302",
    email: "pedrozappellini@gmail.com",
    location: "Campinas, SP",
    linkedin: "linkedin.com/in/pedro-zappellini-rohwedder",
    github: "https://github.com/PedroZappellini",
    title: {
      pt: "DESENVOLVEDOR FULL STACK JR.",
      en: "JUNIOR FULL STACK DEVELOPER",
    },
    stack: "React | React Native | Node.js | TypeScript",
    summaryTitle: {
      pt: "RESUMO DAS QUALIFICAÇÕES",
      en: "RESUME OF QUALIFICATIONS",
    },
    summary: {
      pt: "Desenvolvedor com experiência prática em React e React Native, e vivência como Analista de Sistemas em projetos de automação de processos, unindo levantamento de requisitos, comunicação com stakeholders e viabilidade técnica a uma visão de produto e negócio. Em aprofundamento contínuo em desenvolvimento full stack (Node.js, TypeScript, bancos de dados relacionais e não relacionais, arquitetura de software, Docker), com portfólio de projetos completos do design ao deploy em produção.",
      en: "Developer with hands-on experience in React and React Native, and a background as a Systems Analyst on process automation projects, combining requirements gathering, stakeholder communication, and technical feasibility with a product and business mindset. Continuously deepening full stack development skills (Node.js, TypeScript, relational and non-relational databases, software architecture, Docker), with a portfolio of complete projects from design to production deployment.",
    },
  },
  education: {
    title: { pt: "FORMAÇÃO ACADÊMICA", en: "EDUCATION" },
    items: [
      {
        pt: "Graduação em Engenharia de Software — PUC Campinas — Conclusão em 2024",
        en: "Bachelor's Degree in Software Engineering — PUC Campinas — Completed in 2024",
      },
      {
        pt: "Ensino Médio — Colégio Visconde de Porto Seguro / Integral Escolas Inteligentes — Conclusão em 2024",
        en: "High School — Colégio Visconde de Porto Seguro / Integral Escolas Inteligentes — Completed in 2024",
      },
    ],
  },
  technicalKnowledge: {
    title: { pt: "CONHECIMENTOS TÉCNICOS", en: "TECHNICAL SKILLS" },
    items: [
      {
        category: { pt: "Desenvolvimento", en: "Development" },
        items: {
          pt: "React, React Native, TypeScript, JavaScript, Node.js, Express, APIs REST",
          en: "React, React Native, TypeScript, JavaScript, Node.js, Express, REST APIs",
        },
      },
      {
        category: { pt: "Banco de Dados", en: "Databases" },
        items: {
          pt: "PostgreSQL, Prisma ORM, MongoDB",
          en: "PostgreSQL, Prisma ORM, MongoDB",
        },
      },
      {
        category: { pt: "Ferramentas", en: "Tools" },
        items: {
          pt: "Git/GitHub, Docker, CI/CD (GitHub Actions)",
          en: "Git/GitHub, Docker, CI/CD (GitHub Actions)",
        },
      },
      {
        category: { pt: "Complementares", en: "Additional" },
        items: {
          pt: "Scrum, Kanban, Pacote Office",
          en: "Scrum, Kanban, Microsoft Office",
        },
      },
    ],
  },
  experience: {
    title: { pt: "EXPERIÊNCIA PROFISSIONAL", en: "PROFESSIONAL EXPERIENCE" },

    items: [
      {
        company: "COGNITION",
        role: {
          pt: "Analista de Sistemas Jr. (CLT)",
          en: "Junior Systems Analyst (Full-time)",
        },
        period: "03/2024 - 05/2025",
        description: {
          pt: "Empresa de médio porte, atuante na Inglaterra, Argentina e Brasil, focada em automação de processos robóticos (RPA).",
          en: "Mid-sized company operating in the UK, Argentina, and Brazil, focused on robotic process automation (RPA).",
        },
        descriptionLink: "https://cognitionhq.com/pt/home-pt/",
        highlights: [
          {
            pt: "Identificação de oportunidades de automação e ganho de eficiência operacional, em parceria direta com áreas de negócio de empresas clientes.",
            en: "Identified automation opportunities and operational efficiency gains, working directly with client companies' business areas.",
          },
          {
            pt: "Condução de levantamento de requisitos técnicos e funcionais, análise de viabilidade técnica e proposição de soluções, com apresentações de validação diretamente ao cliente.",
            en: "Led technical and functional requirements gathering, technical feasibility analysis, and solution proposals, presenting validations directly to clients.",
          },
          {
            pt: "Acompanhamento do ciclo completo de implementação, de ambiente de teste à produção, com uso de metodologias ágeis (Scrum) e comunicação técnica com stakeholders não técnicos.",
            en: "Followed the full implementation cycle, from test environment to production, using agile methodologies (Scrum) and technical communication with non-technical stakeholders.",
          },
          {
            pt: "Implantação de, em média, 12 processos automatizados para o cliente Recarga Pay, reduzindo o tempo de execução de tarefas manuais e padronizando operações.",
            en: "Deployed an average of 12 automated processes for client Recarga Pay, reducing manual task execution time and standardizing operations.",
          },
        ],
        keywords: {
          title: { pt: "Palavras-chave", en: "Keywords" },
          keywords: {
            pt: "Levantamento de requisitos / Viabilidade técnica / Comunicação com stakeholders / Scrum e Metodologias ágeis",
            en: "Requirements gathering / Technical feasibility / Stakeholder communication / Scrum and Agile methodologies",
          },
        },
      },
      {
        company: "SONNE GLOBAL",
        role: {
          pt: "Estágio — Desenvolvedor React Native",
          en: "Internship — React Native Developer",
        },
        period: "10/2022 - 11/2023",
        description: {
          pt: "Consultoria de Planejamento Estratégico e Marketing.",
          en: "Strategic Planning and Marketing consultancy.",
        },
        descriptionLink: "https://sonne.global/",
        highlights: [
          {
            pt: "Desenvolvimento front-end/mobile de uma plataforma SaaS white label voltada a planejamento estratégico corporativo, com participação no levantamento de requisitos funcionais e técnicos.",
            en: "Developed the front-end/mobile side of a white-label SaaS platform for corporate strategic planning, participating in functional and technical requirements gathering.",
          },
          {
            pt: "Implementação de funcionalidades de acompanhamento de indicadores (KPIs), gestão de atividades e chat interno integrado entre colaboradores.",
            en: "Implemented KPI tracking features, activity management, and an integrated internal chat between team members.",
          },
          {
            pt: "Validação de interface e experiência do usuário (UI/UX), garantindo alinhamento entre a visão de negócio e o produto entregue.",
            en: "Validated interface and user experience (UI/UX), ensuring alignment between the business vision and the delivered product.",
          },
        ],
        keywords: {
          title: { pt: "Palavras-chave", en: "Keywords" },
          keywords: {
            pt: "React Native / UI-UX / Projetos white label / Levantamento de requisitos",
            en: "React Native / UI-UX / White-label projects / Requirements gathering",
          },
        },
      },
      {
        company: "MB LABS",
        role: {
          pt: "Estágio — Desenvolvedor React Native / React",
          en: "Internship — React Native / React Developer",
        },
        period: "09/2021 - 06/2022",
        description: {
          pt: "Consultoria de Tecnologia Digital que integra estratégia, design e engenharia de software.",
          en: "Digital technology consultancy integrating strategy, design, and software engineering.",
        },
        descriptionLink: "https://mblabs.com.br/",
        highlights: [
          {
            pt: "Desenvolvimento de funcionalidades para aplicativos mobile em múltiplos projetos de diferentes segmentos de negócio, incluindo novas features, manutenção e otimização de código existente.",
            en: "Developed features for mobile applications across multiple projects in different business segments, including new features, maintenance, and optimization of existing code.",
          },
          {
            pt: "Colaboração em equipes de desenvolvimento utilizando Scrum, com participação ativa em Dailys e Plannings, contribuindo para entregas contínuas alinhadas às necessidades dos clientes.",
            en: "Collaborated with development teams using Scrum, actively participating in Daily Standups and Sprint Plannings, contributing to continuous deliveries aligned with client needs.",
          },
        ],
      },
    ],
  },
  languages: {
    title: { pt: "IDIOMAS", en: "LANGUAGES" },
    items: [
      {
        language: { pt: "Inglês", en: "English" },
        level: { pt: "Intermediário", en: "SpanIntermediateish" },
      },
      {
        language: { pt: "Espanhol", en: "Spanish" },
        level: { pt: "Iniciante", en: "Beginner" },
      },
    ],
  },
};

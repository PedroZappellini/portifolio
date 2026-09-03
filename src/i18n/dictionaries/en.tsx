import { Cloud, Database, MonitorSmartphone, Server } from "lucide-react";
import { Dictionary } from "../types";
import { tools } from "@/src/utils/tools";

export const en: Dictionary = {
  meta: {
    title: "Pedro Zappellini Rohwedder — Full Stack Developer",
    description:
      "Portfolio of Pedro Zappellini Rohwedder, a Full Stack Developer specialized in React, React Native, Node.js and TypeScript.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Stack",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Pedro Zappellini",
    role: "Full Stack Developer",
    tagline:
      "I build complete products, end to end — from interface to database.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    location: "Campinas, SP — Brazil",
    available: "Open to new opportunities",
  },
  about: {
    eyebrow: "About me",
    title: "Technology with a product mindset",
    paragraphs: [
      "I'm a Full Stack Developer with a degree in Software Engineering from PUC Campinas, with a solid foundation in React and React Native built across SaaS products and mobile apps for different business segments.",
      "I've also worked closely with process automation and requirements gathering, which gave me a more complete view of product: understanding the problem from the user's perspective, assessing technical feasibility, and only then designing the right solution — not just the fastest one to ship.",
      "Today my focus is full stack development end to end: Node.js, TypeScript, relational and non-relational databases, software architecture and Docker, always building projects from scratch, from design to production deploy.",
    ],
    highlightsTitle: "What I bring to the team",
    highlights: [
      {
        title: "Product mindset",
        description:
          "Real experience gathering requirements and translating business needs into viable technical solutions.",
      },
      {
        title: "Genuinely full stack",
        description:
          "Comfortable from front-end to database: React/React Native on the client, Node/Express on the API, PostgreSQL and MongoDB for data.",
      },
      {
        title: "End-to-end delivery",
        description:
          "Personal projects taken from design to deploy, with Docker, CI/CD and solid architecture practices.",
      },
    ],
    educationTitle: "Education",
    education: [
      {
        degree: "Software Engineering",
        school: "PUC Campinas",
        period: "Graduated 2024",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects",
    subtitle:
      "A selection of projects that show how I think and build — from planning to implementation.",
    viewProject: "View details",
    allProjects: "All Projects",
    filters: {
      all: "All",
      projects: "Projects",
      features: "Features",
      automations: "Automations",
    },
    viewCode: "View code",
    viewDemo: "View demo",
    close: "Close",
    toolsUsed: "Tools used",
    gallery: "Gallery",
    placeholderNote:
      "Sample content — replace with your real projects in src/lib/projects-data.ts.",
  },
  skills: {
    eyebrow: "Technical stack",
    title: "Tools I use",
    subtitle:
      "A modern full stack toolkit, from front-end to database, plus infrastructure and team practices.",
    categories: [
      {
        icon: (
          <MonitorSmartphone size={20} className="text-skill-frontend-icon" />
        ),
        backgroundColor: "bg-skill-frontend-bg",
        name: "Front-end",
        description:
          "Web and mobile interfaces focused on user experience, using React in the browser and React Native for native apps, with TypeScript ensuring safe typing throughout.",
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
          "Building the APIs and services that power application logic, with Node.js and Express exposing REST endpoints consumed by the front-end.",
        items: [tools.node, tools.express, tools.restApi],
      },
      {
        icon: <Database size={20} className="text-skill-data-icon" />,
        backgroundColor: "bg-skill-data-bg",
        name: "Data",
        description:
          "Modeling, storing, and querying data by combining relational (PostgreSQL) and non-relational (MongoDB) databases, with Prisma providing type-safe database access.",
        items: [tools.postgre, tools.prisma, tools.mongo],
      },
      {
        icon: <Cloud size={20} className="text-skill-infra-icon" />,
        backgroundColor: "bg-skill-infra-bg",
        name: "Infrastructure & Process",
        description:
          "Practices and tools that support the development lifecycle: version control with Git, containerization with Docker, deployment automation via CI/CD, and agile methodologies for organizing teamwork.",
        items: [
          tools.gitGithub,
          tools.docker,
          tools.gitGithub,
          tools.scrum,
          tools.kanban,
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    subtitle:
      "I'm looking for new opportunities as a Full Stack Developer. Tell me a bit about the role or project.",
    nameLabel: "Name",
    namePlaceholder: "What's your name?",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell me a bit about the opportunity or why you're reaching out...",
    fileInputPlaceholder:
      "Only .png, .jpeg, .pdf .docx, .xlsx, .txt files are allowed",
    maximumFileSize: "The files must have maximum of 4MB",
    submit: "Send message",
    submitting: "Sending...",
    submitted: "Sended",
    tryAgain: "Try again",
    lastEmailSent: "Last email sent on",
    successTitle: "Message sent!",
    successBody:
      "Thanks for reaching out — I'll get back to you as soon as I can.",
    errorTitle: "Something went wrong",
    errorBody:
      "Couldn't send your message right now. Please try again shortly or reach me directly by email.",
    needToShare: "Need to share more details or attachments?",
    visitFullContact: "Visit the full contact page.",
  },
  errors: {
    MISSING_FIELDS: "Some fields were not filled in.",
    SEND_FAILED: "Email was not sent due to an error.",
    maximumReached: "Total size exceeds the 4MB limit",
  },
};

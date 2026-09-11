import { Dictionary } from "../../types/locale";

export const en: Dictionary = {
  meta: {
    title: "Pedro Zappellini Rohwedder | Full Stack Developer",
    description:
      "Portfolio of Pedro Zappellini Rohwedder, a Full Stack Developer specialized in React, React Native, Node.js and TypeScript.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Pedro Zappellini",
    role: "Full Stack Developer",
    tagline:
      "I build complete products end to end, from interface to database.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    location: "Campinas, SP, Brazil",
    available: "Open to new opportunities",
  },
  about: {
    eyebrow: "About me",
    title: "Technology with a product mindset",
    paragraphs: [
      "I'm a Full Stack Developer with a degree in Software Engineering from PUC Campinas, with a solid foundation in React and React Native built across SaaS products and mobile apps for different business segments.",
      "I've also worked closely with process automation and requirements gathering, which gave me a more complete view of product: understanding the problem from the user's perspective, assessing technical feasibility, and only then designing the right solution, not just the fastest one to ship.",
      "Today my focus is full stack development end to end: Node.js, TypeScript, relational and non-relational databases, software architecture and Docker. I'm always building projects from scratch, from design to production deploy.",
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
  resume: {
    title: "Resume",
    downloadLabel: "Download PDF",
    fileName: "resume-pedro-zappellini.pdf",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects",
    subtitle:
      "A selection of projects that show how I think and build, from planning to implementation.",
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
      "Sample content, replace with your real projects in src/lib/projects-data.ts.",
  },
  skills: {
    eyebrow: "Technical stack",
    title: "Tools I use",
    subtitle:
      "A modern full stack toolkit, from front-end to database, plus infrastructure and team practices.",
    filters: {
      all: "All",
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      infra: "Infrastructure",
    },
    usedInProjects: "Used in",
    seeProject: "See",
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
      "Only .png, .jpeg, .pdf, .docx, .xlsx, .txt files are allowed",
    maximumFileSize: "Files must be no larger than 4MB",
    submit: "Send message",
    submitting: "Sending...",
    submitted: "Sent",
    tryAgain: "Try again",
    lastEmailSent: "Last email sent on",
    successTitle: "Message sent!",
    successBody:
      "Thanks for reaching out. I'll get back to you as soon as I can.",
    errorTitle: "Something went wrong",
    errorBody:
      "Couldn't send your message right now. Please try again shortly or reach me directly by email.",
    needToShare: "Need to share more details or attachments?",
    visitFullContact: "Visit the full contact page.",
  },
  email: {
    title: "Let's connect",
    description:
      "Feel free to reach out via email. I'll get back to you as soon as possible.",
    copy: "Copy",
    copied: "Copied",
    openEmail: "Open in email app",
  },
  footer: {
    reserved: "© 2026 Pedro Zappellini. All rights reserved.",
    built: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
  errors: {
    MISSING_FIELDS: "Some fields were not filled in.",
    SEND_FAILED: "Email was not sent due to an error.",
    maximumReached: "Total size exceeds the 4MB limit.",
  },
};

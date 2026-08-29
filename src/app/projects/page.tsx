"use client";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import { projects } from "@/src/utils/projects-data";
import useLocale from "@/src/Hooks/useLocale";
import { ProjectCard } from "@/src/components/ui/projectCard";

export default function Projects() {
  const { dict, locale } = useLocale();
  return (
    <Container className="pt-20">
      <SectionHeading align="left" title="Projetos" subtitle="" />
      <div className="grid grid-flow-col auto-cols-[min(22rem,85%)] grid-rows-[auto_auto_auto_auto_auto] overflow-x-auto scrollbar-hide gap-4 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            locale={locale}
            viewLabel={dict.projects.viewProject}
            closeModal={() => ""}
            openModal={() => ""}
          />
        ))}
      </div>
    </Container>
  );
}

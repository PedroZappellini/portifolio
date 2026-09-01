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
      <SectionHeading align="left" title={dict.projects.title} subtitle="" />
      <div
        className="grid gap-4 mt-8
    grid-flow-col auto-cols-[82%] auto-rows-[auto_auto_auto_auto_auto]
    overflow-x-auto snap-x snap-mandatory
    sm:grid-flow-row sm:grid-cols-2 sm:overflow-visible sm:snap-none
    lg:grid-cols-3 scrollbar-hide"
      >
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

"use client";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import { projects } from "@/src/utils/projects-data";
import useLocale from "@/src/Hooks/useLocale";
import { ProjectCard } from "@/src/components/ui/projectCard";
import { ProjectFilterButton } from "@/src/components/ui/projectFilterButton";
import { useState } from "react";
import { Category, Project } from "@/src/types/projects";
import useModal from "@/src/Hooks/useModal";
import { Modal } from "@/src/components/ui/modal";
import { ProjectContent } from "@/src/components/modalContents/projectContent";

export default function Projects() {
  const { dict, locale } = useLocale();
  const { open, close, isOpen, data } = useModal<Project>();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Container className="pt-10">
        <Modal
          isOpen={isOpen}
          onClose={close}
          children={data && <ProjectContent data={data} />}
        />
        <SectionHeading align="left" title={dict.projects.title} subtitle="" />
        <div className="flex gap-2 mt-8 overflow-x-auto scrollbar-hide">
          <ProjectFilterButton
            onClick={() => setActiveCategory("All")}
            isActive={activeCategory === "All"}
            name={dict.projects.filters.all}
          />
          <ProjectFilterButton
            onClick={() => setActiveCategory("Project")}
            isActive={activeCategory === "Project"}
            name={dict.projects.filters.projects}
          />
          <ProjectFilterButton
            onClick={() => setActiveCategory("Feature")}
            isActive={activeCategory === "Feature"}
            name={dict.projects.filters.features}
          />
          <ProjectFilterButton
            onClick={() => setActiveCategory("Automation")}
            isActive={activeCategory === "Automation"}
            name={dict.projects.filters.automations}
          />
        </div>
        <div className="grid grid-flow-col auto-cols-[82%] auto-rows-[auto_auto_auto_auto_auto] overflow-x-auto snap-x snap-mandatory sm:grid-flow-row sm:grid-cols-2 sm:overflow-visible sm:snap-none lg:grid-cols-3 scrollbar-hide gap-4 mt-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              locale={locale}
              viewLabel={dict.projects.viewProject}
              openModal={() => open(project)}
              closeModal={close}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

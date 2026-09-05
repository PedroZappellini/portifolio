"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { ProjectCard } from "../ui/projectCard";
import { projects } from "@/src/utils/projects-data";
import useModal from "@/src/Hooks/useModal";
import { Modal } from "../ui/modal";
import { Project } from "@/src/types/projects";
import { ProjectContent } from "../modalContents/projectContent";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const { dict, locale } = useLocale();
  const { open, close, isOpen, data } = useModal<Project>();
  return (
    <section className="mt-30">
      <Modal
        isOpen={isOpen}
        onClose={close}
        children={data && <ProjectContent data={data} />}
      />
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.projects.eyebrow}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
          button={
            <Button
              name={dict.projects.allProjects}
              variant="textOnly"
              textOnlyHref="/projects"
              children={<ArrowRight size={20} />}
            />
          }
        />
        <div className="grid grid-flow-col auto-cols-[82%] sm:auto-cols-[45%] lg:auto-cols-[31%] overflow-x-auto scrollbar-hide snap-x snap-mandatory sm:snap-none gap-4 mt-8">
          {projects.slice(0, 3).map((project, index) => (
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
    </section>
  );
}

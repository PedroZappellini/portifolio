"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { ProjectCard } from "../ui/projectCard";
import { projects } from "@/src/utils/projects-data";

export function Projects() {
  const { dict, locale } = useLocale();
  return (
    <section className="mt-30">
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.projects.eyebrow}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
          goTo={dict.projects.allProjects}
        />
        <div className="mt-8 flex overflow-x-auto scrollbar-hide gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="w-[85vw] w-72 shrink-0 lg:w-auto">
              <ProjectCard
                project={project}
                locale={locale}
                viewLabel={dict.projects.viewProject}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

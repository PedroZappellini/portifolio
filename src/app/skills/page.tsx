"use client";
import { Container } from "@/src/components/layout/container";
import { ProjectContent } from "@/src/components/modalContents/projectContent";
import { CompleteSkillsBadge } from "@/src/components/ui/completeSkillsBadge";
import { Modal } from "@/src/components/ui/modal";
import { ProjectFilterButton } from "@/src/components/ui/projectFilterButton";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import useLocale from "@/src/Hooks/useLocale";
import useModal from "@/src/Hooks/useModal";
import { Project } from "@/src/types/projects";
import { Category, SkillContent } from "@/src/types/skills";
import { skills } from "@/src/utils/skills-data";
import { useState } from "react";

export default function Stacks() {
  const { dict } = useLocale();
  const { open, close, isOpen, data } = useModal<Project>();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const skillsArray = Object.values(skills);

  const macthesCategory = (skill: SkillContent, category: Category): boolean =>
    Array.isArray(skill.category)
      ? skill.category.includes(category)
      : skill.category === category;

  const visibleSkills: SkillContent[] =
    activeCategory === "All"
      ? skillsArray
      : skillsArray.filter((skill) => macthesCategory(skill, activeCategory));

  return (
    <Container className="mt-10">
      <Modal
        isOpen={isOpen}
        onClose={close}
        children={data && <ProjectContent data={data} />}
        closeButton
      />
      <SectionHeading align="left" title={dict.skills.title} />

      <div className="flex gap-2 mt-8 overflow-x-auto scrollbar-hide">
        <ProjectFilterButton
          onClick={() => setActiveCategory("All")}
          isActive={activeCategory === "All"}
          name={dict.skills.filters.all}
        />
        <ProjectFilterButton
          onClick={() => setActiveCategory("Frontend")}
          isActive={activeCategory === "Frontend"}
          name={dict.skills.filters.frontend}
        />
        <ProjectFilterButton
          onClick={() => setActiveCategory("Backend")}
          isActive={activeCategory === "Backend"}
          name={dict.skills.filters.backend}
        />
        <ProjectFilterButton
          onClick={() => setActiveCategory("Data")}
          isActive={activeCategory === "Data"}
          name={dict.skills.filters.data}
        />
        <ProjectFilterButton
          onClick={() => setActiveCategory("Infra")}
          isActive={activeCategory === "Infra"}
          name={dict.skills.filters.infra}
        />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {visibleSkills.map((skill, index) => (
          <CompleteSkillsBadge
            key={index}
            skill={skill}
            onProjectClick={(project) => open(project)}
          />
        ))}
      </div>
    </Container>
  );
}

"use client";
import { Locale } from "@/src/i18n/types";
import { Project } from "@/src/types/projects";
import Image from "next/image";
import { SkillsBadge } from "./skillsBadge";
import { GithubIcon } from "@/src/utils/icons";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  viewLabel: string;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

const MAX_VISIBLE = 4;

export function ProjectCard({
  project,
  locale,
  viewLabel,
  openModal,
}: ProjectCardProps) {
  return (
    <div className="group grid grid-rows-subgrid row-span-5 overflow-hidden rounded-2xl border border-surface-border bg-surface transition-colors hover:bg-surface-hover">
      <button
        className="relative overflow-hidden block aspect-[5/3] w-full bg-accent-2 cursor-pointer"
        onClick={() => openModal(project)}
      >
        <Image
          src={project.cover}
          alt={""}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="grid grid-rows-subgrid row-span-4 px-6">
        <h3 className="text-lg text-foreground font-semibold">
          {project.title[locale]}
        </h3>
        <p className="text-sm text-muted line-clamp-3">
          {project.summary[locale]}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, MAX_VISIBLE).map((tool, index) => (
            <SkillsBadge key={index} name={tool.name} icon={tool.icon} />
          ))}
          {project.tools.length - MAX_VISIBLE > 0 && (
            <SkillsBadge name={`+${project.tools.length - MAX_VISIBLE}`} />
          )}
        </div>
        <div className="py-6 border-t border-surface-border flex items-center justify-between">
          <button
            className="text-sm text-accent cursor-pointer"
            onClick={() => openModal(project)}
          >
            {viewLabel}
          </button>
          {project.repoUrl && (
            <Link href={project.repoUrl}>
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

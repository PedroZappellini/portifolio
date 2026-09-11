"use client";
import useLocale from "@/src/Hooks/useLocale";
import { projects } from "@/src/utils/projects-data";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { ProjectsBadge } from "./projectsBadge";
import { Category } from "@/src/types/skills";

interface CompleteSkillsBadgeProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: Category | Category[];
}

const categoryColors: Record<
  Category,
  { bg: string; text: string; icon: string }
> = {
  Frontend: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    icon: "bg-violet-200 text-violet-700",
  },
  Backend: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    icon: "bg-blue-200 text-blue-700",
  },
  Data: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    icon: "bg-emerald-200 text-emerald-700",
  },
  Infra: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    icon: "bg-amber-200 text-amber-700",
  },
  All: {
    bg: "bg-surface",
    text: "text-foreground",
    icon: "bg-accent/10 text-accent",
  },
};

export function CompleteSkillsBadge({
  name,
  icon,
  description,
  category,
}: CompleteSkillsBadgeProps) {
  const { dict, locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const primaryCategory = Array.isArray(category) ? category[0] : category;
  const colors = categoryColors[primaryCategory];

  return (
    <div className="w-full max-w-2xl h-auto rounded-xl bg-surface flex flex-col overflow-hidden border border-surface-border">
      <div
        className={`flex items-center gap-3 h-10 border-b border-surface-border ${colors.bg} px-3 py-2`}
      >
        {icon}
        <p className={`text-sm ${colors.text}`}>{name}</p>
      </div>
      <div className="px-3 pt-2 flex flex-col gap-2">
        <div className="mt-2 text-sm text-muted">{description}</div>
        <button
          onClick={() => setIsOpen((state) => !state)}
          className="flex items-center justify-between border-t border-surface-border pt-2 cursor-pointer"
        >
          <p className="text-sm text-foreground">
            {dict.skills.usedInProjects}
          </p>

          <ChevronUp
            size={20}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1.5 pt-2 pb-5">
              {projects.map((project, index) => (
                <ProjectsBadge
                  key={index}
                  image={project.cover}
                  title={project.title[locale]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

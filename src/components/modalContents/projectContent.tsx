"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Project } from "@/src/types/projects";
import Image from "next/image";
import { useState } from "react";
import { SkillsBadge } from "../ui/skillsBadge";

interface ProjectContent {
  data: Project;
}

export function ProjectContent({ data }: ProjectContent) {
  const { locale, dict } = useLocale();
  const [coverImage, setCoverImage] = useState({ image: data.cover, index: 0 });
  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={coverImage.image}
          alt={""}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex gap-3 px-8 py-4 border-b border-surface-border overflow-x-auto scrollbar-hide">
        {data.images.map((image, index) => (
          <button
            key={index}
            className="relative w-16 h-12 shrink-0 cursor-pointer"
            onClick={() => setCoverImage({ image: image, index: index })}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover rounded-md ${index === coverImage.index ? "transition-transform duration-300 scale-110" : "transition-transform duration-300 scale-100"}`}
            />
          </button>
        ))}
      </div>
      <div className="p-8">
        <p className="text-xs text-muted-foreground font-semibold mb-2">
          {dict.projects.toolsUsed.toUpperCase()}
        </p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-5">
          {data.tools.map((tool, index) => (
            <div key={index} className="shrink-0">
              <SkillsBadge name={tool} />
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {data.title[locale]}
        </h3>
        <p className="mt-2 text-sm text-muted">{data.description[locale]}</p>
      </div>
    </div>
  );
}

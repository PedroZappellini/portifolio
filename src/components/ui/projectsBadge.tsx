import useLocale from "@/src/Hooks/useLocale";
import Image from "next/image";

interface ProjectsBadgeProps {
  image: string;
  title: string;
  onClick: () => void;
}

export function ProjectsBadge({ image, title, onClick }: ProjectsBadgeProps) {
  const { dict } = useLocale();
  return (
    <div className="flex items-center justify-between gap-3 max-w-sm h-auto rounded-md bg-surface border border-surface-border overflow-hidden">
      <div className="flex items-center gap-2 min-w-0">
        <div className="relative w-10 h-10 shrink-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <p className="text-sm text-foreground pr-3 truncate">{title}</p>
      </div>
      <button
        onClick={onClick}
        className="border-l border-surface-border text-accent bg-transparent hover:bg-accent hover:text-white transition-colors px-5 shrink-0 cursor-pointer"
      >
        <p className="text-sm font-semibold">{dict.skills.seeProject}</p>
      </button>
    </div>
  );
}

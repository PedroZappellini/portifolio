"use client";

interface ProjectFilterButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export function ProjectFilterButton({
  name,
  isActive,
  onClick,
}: ProjectFilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? "bg-accent/15 text-accent border-accent dark:bg-accent/30 dark:text-white"
          : "bg-surface text-foreground border-surface-border hover:bg-surface-hover hover:border-accent/30"
      } text-sm flex items-center justify-center rounded-full min-w-25 h-10 border px-5 transition-colors cursor-pointer font-medium shrink-0`}
    >
      {name}
    </button>
  );
}

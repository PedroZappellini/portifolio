interface SkillsBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillsBadge({ name, icon }: SkillsBadgeProps) {
  return (
    <div className="flex items-center justify-center gap-2 w-fit rounded-full bg-surface border border-surface-border px-3 py-1 text-xs font-medium text-muted">
      {icon}
      {name}
    </div>
  );
}

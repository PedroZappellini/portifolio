interface SkillsBadgeProps {
  name: string;
}

export function SkillsBadge({ name }: SkillsBadgeProps) {
  return (
    <div className="w-fit rounded-full items-center justify-center bg-surface border border-surface-border px-3 py-1 text-xs font-medium text-muted">
      {name}
    </div>
  );
}

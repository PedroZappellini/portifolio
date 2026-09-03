"use client";

interface StackCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  badges: React.ReactNode;
  iconBackgroundColor: string;
}

export function StackCard({
  icon,
  name,
  description,
  badges,
  iconBackgroundColor,
}: StackCardProps) {
  return (
    <div className="grid grid-rows-subgrid snap-start row-span-4 rounded-xl bg-surface border border-surface-border p-5">
      <span
        className={`flex w-12 h-12 items-center justify-center rounded-xl bg-accent/10 ${iconBackgroundColor}`}
      >
        {icon}
      </span>
      <h3 className="text-sm font-semibold text-foreground">{name}</h3>
      <p className="text-sm font-medium text-muted">{description}</p>
      <div className="flex flex-wrap self-start gap-2">{badges}</div>
    </div>
  );
}

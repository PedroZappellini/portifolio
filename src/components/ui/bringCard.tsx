"use client";

interface BringCardProps {
  title: string;
  description: string;
}

export function BringCard({ title, description }: BringCardProps) {
  return (
    <div className="rounded-2xl flex flex-col p-5 bg-surface border border-surface-border hover:bg-surface-hover gap-2 mb-5">
      <h1 className="text-sm font-semibold">{title}</h1>
      <p className="text-sm font-medium text-muted">{description}</p>
    </div>
  );
}

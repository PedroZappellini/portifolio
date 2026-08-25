interface GraduationCardProps {
  icon: React.ReactNode;
  title: string;
  course: string;
  university: string;
  graduated: string;
}

export function GraduationCard({
  icon,
  title,
  course,
  university,
  graduated,
}: GraduationCardProps) {
  return (
    <div className="flex flex-col gap-3 bg-surface border border-surface-border rounded-2xl p-5">
      <div className="flex gap-2 items-center">
        <span className="rounded-full bg-accent/15 p-3">{icon}</span>
        <p className="text-sm text-foreground font-semibold">{title}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-foreground font-medium">{course}</p>
          <p className="text-sm text-muted font-medium">{university}</p>
        </div>
        <p className="text-sm text-muted">{graduated}</p>
      </div>
    </div>
  );
}

"use client";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <div className="flex flex-col gap-1 mb-8">
      <h2 className="text-base font-semibold text-resume uppercase border-b border-foreground pb-1">
        {title}
      </h2>
      {children}
    </div>
  );
}

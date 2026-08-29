import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Align = "left" | "center";

interface SectionHeadingProps {
  align: Align;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  goToTitle?: string;
  goToHref?: string;
}

export function SectionHeading({
  align,
  eyebrow,
  title,
  subtitle,
  goToTitle,
  goToHref,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" && "mx-auto text-center"}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}

      <div
        className={`mt-3 flex ${goToTitle && "justify-between items-center"}`}
      >
        <h2 className="text-3xl max-w-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {goToHref && (
          <Link
            href={goToHref}
            className="text-base text-accent flex gap-2 items-center cursor-pointer"
          >
            <ArrowRight size={20} className="text-accent" />
            {goToTitle}
          </Link>
        )}
      </div>
      {subtitle ? (
        <p className="max-w-2xl mt-4 text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

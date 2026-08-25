"use client";

import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { BringCard } from "../ui/bringCard";
import { GraduationCard } from "../ui/graduationCard";
import { GraduationCap } from "lucide-react";

export function About() {
  const { dict } = useLocale();
  return (
    <section>
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
        />
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            {dict.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base sm:text-lg text-muted mb-5 ${index === dict.about.paragraphs.length - 1 ? "mb-15" : "mb-0"}`}
              >
                {paragraph}
              </p>
            ))}
            {dict.about.education.map((education) => (
              <GraduationCard
                key={education.degree}
                icon={<GraduationCap size={20} className="text-accent" />}
                title={dict.about.educationTitle}
                course={education.degree}
                university={education.school}
                graduated={education.period}
              />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-5">
              {dict.about.highlightsTitle}
            </p>
            {dict.about.highlights.map((highlight, index) => (
              <BringCard
                key={index}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

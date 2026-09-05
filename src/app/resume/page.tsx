"use client";
import { Container } from "@/src/components/layout/container";
import { Button } from "@/src/components/ui/button";
import { ResumeSection } from "@/src/components/ui/resumeSection";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import useLocale from "@/src/Hooks/useLocale";
import { resumeData } from "@/src/utils/resume-data";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Resume() {
  const { dict, locale } = useLocale();

  return (
    <Container className="mt-10">
      <SectionHeading
        align="left"
        title={dict.resume.title}
        button={
          <Button
            name={dict.resume.downloadLabel}
            variant="secondary"
            className="gap-2"
            download={dict.resume.fileName}
            href={`${locale}-resume.pdf`}
            children={<Download size={16} />}
          />
        }
      />
      <div className="flex flex-col gap-2 mt-8 bg-surface p-5 rounded-md max-w-3xl mx-auto border border-surface-border">
        <h2 className="text-xl font-semibold text-resume">
          {resumeData.contactInfo.name}
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-muted shrink-0">
            {resumeData.contactInfo.phone}
          </p>
          <span className="w-1 h-1 bg-muted rounded-full" />
          <p className="text-sm text-muted">{resumeData.contactInfo.email}</p>
          <span className="w-1 h-1 bg-muted rounded-full" />
          <p className="text-sm text-muted">
            {resumeData.contactInfo.location}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-resume">
            Linkedin:{" "}
            <Link
              href={resumeData.contactInfo.linkedin}
              className="text-sm underline text-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {resumeData.contactInfo.linkedin}
            </Link>
          </p>
          <p className="text-sm text-resume">
            Github:{" "}
            <Link
              href={resumeData.contactInfo.github}
              className="text-sm underline text-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {resumeData.contactInfo.github}
            </Link>
          </p>
        </div>
        <div className="mt-4 flex flex-col mb-4">
          <p className="text-foreground text-lg font-medium">
            {resumeData.contactInfo.title[locale]}
          </p>
          <p className="text-sm text-muted">{resumeData.contactInfo.stack}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ResumeSection
            title={resumeData.contactInfo.summaryTitle[locale]}
            children={
              <p className="text-sm text-foreground">
                {resumeData.contactInfo.summary[locale]}
              </p>
            }
          />
          <ResumeSection
            title={resumeData.education.title[locale]}
            children={
              <ul className="list-disc pl-5">
                {resumeData.education.items.map((item, index) => (
                  <li key={index} className="text-sm text-foreground">
                    {item[locale]}
                  </li>
                ))}
              </ul>
            }
          />
          <ResumeSection
            title={resumeData.technicalKnowledge.title[locale]}
            children={
              <div className="flex flex-col gap-2">
                {resumeData.technicalKnowledge.items.map((item, index) => (
                  <p key={index} className="text-sm text-foreground">
                    <strong className="text-sm text-foreground">
                      {item.category[locale]}:{" "}
                    </strong>
                    {item.items[locale]}
                  </p>
                ))}
              </div>
            }
          />
          <ResumeSection
            title={resumeData.experience.title[locale]}
            children={
              <div className="flex flex-col gap-8">
                {resumeData.experience.items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-base font-semibold text-resume uppercase">
                        {item.company}
                      </p>
                      {"|"}
                      <strong className="text-sm">{item.role[locale]}</strong>
                      {"|"}
                      <p className="text-sm text-muted">{item.period}</p>
                    </div>
                    <p className="text-xs text-muted italic">
                      {item.description[locale]}
                      <Link
                        href={item.descriptionLink}
                        className="text-link underline ml-2"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.descriptionLink}
                      </Link>
                    </p>
                    <ul className="list-disc pl-5">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-foreground">
                          {highlight[locale]}
                        </li>
                      ))}
                    </ul>
                    {item.keywords?.title && (
                      <p className="text-sm text-muted">
                        <strong className="text-sm text-foreground mr-2">
                          {item.keywords.title[locale]}
                          {":"}
                        </strong>
                        {item.keywords.keywords[locale]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            }
          />
          <ResumeSection
            title={resumeData.languages.title[locale]}
            children={
              <div className="flex flex-col gap-2">
                {resumeData.languages.items.map((item, index) => (
                  <p key={index} className="text-sm text-foreground">
                    <strong className="text-sm text-foreground">
                      {item.language[locale]}
                      {" — "}
                    </strong>
                    {item.level[locale]}
                  </p>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
}

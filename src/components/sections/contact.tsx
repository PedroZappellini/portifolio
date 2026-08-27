"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

export function Contact() {
  const { dict } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="mt-30">
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

        <div className="flex flex-col p-5 bg-surface border border-surface-border rounded-xl mt-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              label={dict.contact.nameLabel}
              placeholder={dict.contact.namePlaceholder}
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label={dict.contact.emailLabel}
              placeholder={dict.contact.emailPlaceholder}
            />
          </div>
          <div className="mt-2 flex flex-col mt-4 gap-2">
            <p className="text-sm text-foreground font-medium">
              {dict.contact.messageLabel}
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="resize-none bg-background-elevated border border-surface-border rounded-xl py-2 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              placeholder={dict.contact.messagePlaceholder}
            />
          </div>
          <div className="mt-4">
            <Button
              className="w-full sm:w-auto"
              name={dict.contact.submit}
              variant="primary"
            />
          </div>
        </div>
        <div className="flex gap-1 justify-center mt-5">
          <p className="text-sm text-muted ">{dict.contact.or}</p>
          <p className="text-sm text-accent font-medium">
            {dict.contact.directEmail}
          </p>
        </div>
      </Container>
    </section>
  );
}

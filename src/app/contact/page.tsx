"use client";
import { Container } from "@/src/components/layout/container";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import useLocale from "@/src/Hooks/useLocale";
import { ContactType } from "@/src/types/contact";
import { Loader2, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const { dict } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactType>("idle");
  const [lastEmailSentDate, setLastEmailSentDate] = useState<Date | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {}

  function handleSelectedFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  }

  return (
    <Container className="mt-10">
      <SectionHeading align="left" title={dict.contact.title} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-surface border border-surface-border rounded-xl mt-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            label={dict.contact.nameLabel}
            placeholder={dict.contact.namePlaceholder}
          />
          <Input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            label={dict.contact.emailLabel}
            placeholder={dict.contact.emailPlaceholder}
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
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
        <div className="flex flex-col mt-4 gap-2">
          <p className="text-sm text-foreground font-medium">
            Upload de arquivos
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,.pdf,.doc,.docx,.xls,.xlsx"
            onChange={handleSelectedFiles}
            className="hidden"
          />
          <div
            onClick={() => inputRef.current?.click()}
            className={`group flex flex-col items-center justify-center w-full bg-surface border-surface-border [@media(hover:hover)]:hover:bg-accent/30 [@media(hover:hover)]:hover:border-accent [@media(hover:none)]:bg-accent/15 [@media(hover:none)]:border-accent border-2 border-dashed rounded-xl h-30 cursor-pointer transition-all active:scale-95 active:bg-accent/10`}
          >
            <UploadCloud
              size={30}
              className="text-muted [@media(hover:hover)]:group-hover:text-accent [@media(hover:none)]:text-accent"
            />
            <p className="text-sm font-medium text-muted [@media(hover:hover)]:group-hover:text-accent [@media(hover:none)]:text-accent">
              clique para adicionar imagens
            </p>
          </div>
          <p className="text-muted text-sm font-medium mt-4">
            Envie ate no maximo 8mb
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
          <Button
            type="submit"
            className="w-full sm:w-[30%]"
            variant={status === "success" ? "success" : "primary"}
            name={
              status === "loading"
                ? ""
                : status === "success"
                  ? dict.contact.submitted
                  : dict.contact.submit
            }
            disabled={status !== "idle"}
          >
            {status === "loading" && (
              <Loader2 className="animate-spin" size={20} />
            )}
          </Button>
          {lastEmailSentDate && (
            <p className="text-sm text-muted">
              {dict.contact.lastEmailSent}{" "}
              {lastEmailSentDate.toLocaleDateString()}
            </p>
          )}
        </div>
      </form>
    </Container>
  );
}

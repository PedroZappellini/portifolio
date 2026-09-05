"use client";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/src/components/layout/container";
import { Button, ButtonVariant } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { SectionHeading } from "@/src/components/ui/sectionHeading";
import useLocale from "@/src/Hooks/useLocale";
import { ContactResponse, ContactType } from "@/src/types/contact";
import { CircleCheck, Loader2, RotateCcw, UploadCloud } from "lucide-react";
import { SelectedFile } from "@/src/components/ui/selectedFile";
import { getItem, setItem } from "@/src/storage/storage";
import { LAST_EMAIL_SENT_DATE, MAX_SIZE_BYTES } from "@/src/utils/constants";
import { formatBytes } from "@/src/utils/formatBytes";

interface SelectedFileEntry {
  file: File;
  previewUrl: string;
}

export default function Contact() {
  const { dict } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactType>("idle");
  const [lastEmailSentDate, setLastEmailSentDate] = useState<Date | null>(null);
  const [fileEntries, setFileEntries] = useState<SelectedFileEntry[]>([]);
  const [isPicking, setIsPicking] = useState(false);
  const [fileError, setFileError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const statusConfig: Record<
    typeof status,
    { variant: ButtonVariant; name: string; icon: React.ReactNode }
  > = {
    idle: { variant: "primary", name: dict.contact.submit, icon: null },
    loading: {
      variant: "primary",
      name: "",
      icon: <Loader2 className="animate-spin" size={20} />,
    },
    success: {
      variant: "success",
      name: dict.contact.submitted,
      icon: <CircleCheck size={20} />,
    },
    error: {
      variant: "error",
      name: dict.contact.tryAgain,
      icon: <RotateCcw size={20} />,
    },
  };

  useEffect(() => {
    setLastEmailSentDate(getLastEmailSentDate());
  }, []);

  useEffect(() => {
    if (!isPicking) return;

    function handleWindowFocus() {
      setIsPicking(false);
    }

    window.addEventListener("focus", handleWindowFocus);
    return () => window.removeEventListener("focus", handleWindowFocus);
  }, [isPicking]);

  function getLastEmailSentDate() {
    const stored = getItem(LAST_EMAIL_SENT_DATE);

    if (stored) {
      return new Date(Number(stored));
    }

    return null;
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isOverLimit) {
      setFileError(dict.errors.maximumReached);
      return;
    }
    setStatus("loading");

    let finalStatus: "success" | "error" = "success";

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      fileEntries.forEach((file) => {
        formData.append("files", file.file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result: ContactResponse = await response.json();

      finalStatus = result.success ? "success" : "error";
      setStatus(finalStatus);

      if (result.success) {
        fileEntries.forEach((entry) => {
          if (entry.previewUrl) URL.revokeObjectURL(entry.previewUrl);
        });
        setName("");
        setEmail("");
        setMessage("");
        setFileEntries([]);
        setFileError("");

        const date = Date.now();
        setItem(LAST_EMAIL_SENT_DATE, date.toString());
        setLastEmailSentDate(new Date(date));
      }
    } catch (error) {
      console.error(error);
      finalStatus = "error";
      setStatus("error");
    } finally {
      if (finalStatus !== "error") {
        setTimeout(() => setStatus("idle"), 5000);
      }
    }
  }

  function handleSelectedFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);

    const newEntries: SelectedFileEntry[] = selectedFiles.map((file) => ({
      file: file,
      previewUrl: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : "",
    }));

    setFileEntries((previous) => [...previous, ...newEntries]);
  }

  const totalFilesSize = fileEntries.reduce(
    (acumulator, entry) => acumulator + entry.file.size,
    0,
  );

  const comparedSize = `${formatBytes(totalFilesSize)} / ${formatBytes(MAX_SIZE_BYTES)}`;

  const isOverLimit = totalFilesSize > MAX_SIZE_BYTES;

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
            required
            className="resize-none bg-background-elevated border border-surface-border rounded-xl py-2 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
            accept="image/jpeg,image/png,image/webp,.pdf,.doc,.docx,.xls,.xlsx,.txt"
            onChange={handleSelectedFiles}
            className="hidden"
          />
          <div
            onClick={() => {
              inputRef.current?.click();
              setIsPicking(true);
            }}
            data-active={isPicking}
            className={`group flex flex-col items-center justify-center w-full hover:bg-accent/30 hover:border-accent active:bg-accent/30 active:border-accent border-2 border-dashed rounded-xl h-30 cursor-pointer transition-all active:scale-95 ${
              isPicking
                ? "bg-accent/30 border-accent"
                : "bg-surface border-surface-border"
            }`}
          >
            <div className="flex flex-col gap-2 items-center justify-center px-5">
              <UploadCloud
                size={30}
                className={`${isPicking ? "text-accent" : "text-muted"} group-hover:text-accent group-active:text-accent`}
              />
              <p
                className={`${isPicking ? "text-accent" : "text-muted"} text-center group-hover:text-accent group-active:text-accent text-sm`}
              >
                {dict.contact.fileInputPlaceholder}
              </p>
            </div>
          </div>
          <p className="text-muted text-sm">{dict.contact.maximumFileSize}</p>
          <div className="flex flex-wrap gap-2">
            {fileEntries.length > 0 &&
              fileEntries.map(({ file, previewUrl }, index) => {
                const isImage = file.type.startsWith("image/");
                const extension =
                  file.name.split(".").pop()?.toLocaleLowerCase() ?? "";
                return (
                  <SelectedFile
                    key={index}
                    image={isImage}
                    src={previewUrl}
                    alt={file.name}
                    extension={extension}
                    onRemove={() => {
                      if (previewUrl) URL.revokeObjectURL(previewUrl);
                      setFileEntries((previous) =>
                        previous.filter((_, i) => i !== index),
                      );
                    }}
                  />
                );
              })}
          </div>
          {fileEntries.length > 0 && (
            <p
              className={`text-sm ${isOverLimit ? "text-danger" : "text-muted"}`}
            >
              {comparedSize}
            </p>
          )}
          {fileError && <p className="text-sm text-danger">{fileError}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
          <Button
            type="submit"
            className="w-full sm:w-[30%] gap-2"
            variant={statusConfig[status].variant}
            name={statusConfig[status].name}
            disabled={status === "loading" || status === "success"}
          >
            {statusConfig[status].icon}
          </Button>
          {lastEmailSentDate && (
            <p className="text-sm text-muted">
              {dict.contact.lastEmailSent} {lastEmailSentDate.toLocaleString()}
            </p>
          )}
        </div>
      </form>
    </Container>
  );
}

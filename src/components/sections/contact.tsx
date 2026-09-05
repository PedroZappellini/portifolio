"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Button, ButtonVariant } from "../ui/button";
import { ContactResponse, ContactType } from "@/src/types/contact";
import { CircleCheck, Loader2, RotateCcw } from "lucide-react";
import { LAST_EMAIL_SENT_DATE } from "@/src/utils/constants";
import { getItem, setItem } from "@/src/storage/storage";
import Link from "next/link";

export function Contact() {
  const { dict } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactType>("idle");
  const [lastEmailSentDate, setLastEmailSentDate] = useState<Date | null>(null);

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

  function getLastEmailSentDate() {
    const stored = getItem(LAST_EMAIL_SENT_DATE);

    if (stored) {
      return new Date(Number(stored));
    }

    return null;
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    let finalStatus: "success" | "error" = "success";

    try {
      const response = await fetch("/api/contact/home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result: ContactResponse = await response.json();

      finalStatus = result.success ? "success" : "error";
      setStatus(finalStatus);

      if (result.success) {
        setName("");
        setEmail("");
        setMessage("");

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

  return (
    <section className="mt-30">
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

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
                {dict.contact.lastEmailSent}{" "}
                {lastEmailSentDate.toLocaleString()}
              </p>
            )}
          </div>
        </form>
        <div className="flex flex-col sm:flex-row gap-1 justify-center items-center mt-5">
          <p className="text-sm text-muted ">{dict.contact.needToShare}</p>
          <Link href={"/contact"}>
            <p className="text-sm text-accent font-medium">
              {dict.contact.visitFullContact}
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}

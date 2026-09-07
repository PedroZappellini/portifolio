"use client";
import useLocale from "@/src/Hooks/useLocale";
import { profile } from "@/src/utils/profile-data";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export function EmailOptionsContent() {
  const { dict } = useLocale();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">
          {dict.email.title}
        </h2>
        <p className="text-sm text-muted">{dict.email.description}</p>
      </div>
      <div className="mt-5 flex flex-col justify-between gap-5 bg-surface border border-surface-border w-full rounded-md py-2 px-3">
        <div className="flex items-center gap-3">
          <div className="border-r border-surface-border pr-5">
            <Mail size={20} className="self-center text-muted" />
          </div>
          <p className="text-muted self-center truncate">
            {profile.data.email}
          </p>
        </div>
      </div>
      <Button
        name={copied ? dict.email.copied : dict.email.copy}
        variant={copied ? "success" : "primary"}
        className="mt-4 gap-2"
        onClick={handleCopy}
        iconBefore={!copied}
        children={copied ? <Check size={20} /> : <Copy size={20} />}
      ></Button>
      <div className="flex items-center gap-3 border-t border-surface-border mt-8 pt-6 cursor-pointer">
        <a
          href="mailto:pedrozappellini@gmail.com"
          className="text-sm text-accent"
        >
          {dict.email.openEmail}
        </a>
        <ArrowRight size={20} className="text-accent" />
      </div>
    </div>
  );
}

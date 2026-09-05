"use client";

import useLocale from "@/src/Hooks/useLocale";
import { profile } from "@/src/utils/profile-data";
import { Copy, Mail } from "lucide-react";

interface EmailOptionsContent {}

export function EmailOptionsContent() {
  const { dict } = useLocale();
  return (
    <div className="flex flex-col p-5">
      <h2>{dict.email.title}</h2>
      <div className="mt-5 flex items- gap-5 bg-background-lighter w-full rounded-md py-1 px-1">
        <div className="bg-black ml-2 border-r border-surface-border pr-5">
          <Mail size={20} />
        </div>
        <p className="text-muted">{profile.data.email}</p>
        <button className="bg-accent py-2 px-5 flex items-center justify-center rounded-md">
          {dict.email.copy}
        </button>
      </div>
    </div>
  );
}

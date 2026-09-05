"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export function Input({ label, placeholder, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-sm text-foreground font-medium">{label}</p>
      <input
        className="h-10 bg-background-elevated border border-surface-border rounded-xl py-2 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  variant: Variant;
  children?: React.ReactNode;
}
const variants = {
  primary:
    "bg-foreground text-background px-5 py-2.5 hover:opacity-90 active:opacity-80",
  secondary:
    "border border-surface-border bg-surface px-5 py-2.5 text-foreground hover:bg-surface-hover",
};

type Variant = keyof typeof variants;

export function Button({
  name,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={`text-sm rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 ${variants[variant]} ${className}`}
    >
      {name}
      {children}
    </button>
  );
}

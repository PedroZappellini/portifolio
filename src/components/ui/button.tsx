"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  variant: ButtonVariant;
  children?: React.ReactNode;
  href?: string;
  textOnlyHref?: string;
  download?: boolean | string;
}

const variants = {
  primary:
    "bg-foreground text-background px-5 py-2.5 hover:opacity-90 active:opacity-80",
  secondary:
    "bg-surface text-foreground px-5 py-2.5 hover:bg-surface-hover border border-surface-border ",
  textOnly: "text-lg text-accent flex gap-2 items-center",
  success: "bg-success transition-all px-5 py-2.5 text-white",
  error: "bg-danger transition-all px-5 py-2.5 text-white",
};

export type ButtonVariant = keyof typeof variants;

export function Button({
  name,
  variant = "primary",
  children,
  className,
  href,
  textOnlyHref,
  download,
  ...props
}: ButtonProps) {
  if (href && download) {
    return (
      <a
        href={href}
        download={download}
        className={`text-sm rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 ${variants[variant]} ${className}`}
      >
        {children}
        {name}
      </a>
    );
  }
  if (href) {
    return (
      <Link
        href={href}
        className={`text-sm rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 ${variants[variant]} ${className}`}
      >
        {name}
        {children}
      </Link>
    );
  }
  if (textOnlyHref) {
    return (
      <Link
        href={textOnlyHref}
        className={`text-base cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 ${variants[variant]} ${className}`}
      >
        {name}
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`text-sm rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 ${variants[variant]} ${className}`}
      {...props}
    >
      {name}
      {children}
    </button>
  );
}

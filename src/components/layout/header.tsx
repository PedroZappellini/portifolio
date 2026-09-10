"use client";

import useLocale from "@/src/Hooks/useLocale";
import {
  FileUser,
  FolderGit2,
  Home,
  Layers,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Container } from "./container";
import { useEffect, useState } from "react";
import useTheme from "@/src/Hooks/useTheme";
import Link from "next/link";
import { profile } from "@/src/utils/profile-data";
import { usePathname } from "next/navigation";

export function Header() {
  const { dict, locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: dict.nav.home, icon: Home },
    { href: "/stack", label: dict.nav.skills, icon: Layers },
    {
      href: "/projects",
      label: dict.nav.projects,
      icon: FolderGit2,
    },
    { href: "/resume", label: dict.nav.resume, icon: FileUser },
    { href: "/contact", label: dict.nav.contact, icon: Mail },
  ];

  return (
    <header
      className={
        "flex flex-col sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-border"
      }
    >
      <Container className="h-16 flex items-center justify-between">
        <button
          className="relative lg:hidden"
          onClick={() => setIsMenuOpen((state) => !state)}
        >
          <Menu
            size={20}
            className={`transition-transform duration-300 ${isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
          />
          <X
            size={20}
            className={`absolute inset-0 transition-transform duration-300 ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
          />
        </button>
        <Link href={"/"}>
          <p className="text-sm font-semibold text-foreground tracking-tight">
            {profile.data.name}.
          </p>
        </Link>
        <nav className="hidden lg:flex gap-10">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link key={index} href={link.href}>
                <p
                  className={`text-sm font-medium ${isActive ? "text-accent/80" : "text-muted"} transition-colors ${isActive ? "hover:text-accent" : "hover:text-foreground"} cursor-pointer`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-3">
          <button
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground cursor-pointer"
            onClick={toggleLocale}
          >
            {locale.toUpperCase()}
          </button>
          <button
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </Container>
      <nav
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden overscroll-contain">
          <div
            className={`flex flex-col gap-2 px-6 pb-6 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 pl-3 py-3 ${
                    isActive ? "bg-accent/10 rounded-md" : "border-transparent"
                  }`}
                >
                  <Icon
                    size={16}
                    className={isActive ? "text-accent" : "text-muted"}
                  />
                  <p
                    className={`text-sm font-medium ${isActive ? "text-accent" : "text-muted"} transition-colors hover:text-foreground cursor-pointer`}
                  >
                    {link.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

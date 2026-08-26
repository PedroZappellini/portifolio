"use client";
import useLocale from "@/src/Hooks/useLocale";
import useTheme from "@/src/Hooks/useTheme";
import { useState, useEffect } from "react";
import { Container } from "./container";
import { Menu, Moon, Sun, X } from "lucide-react";

export function Header() {
  const { locale, toggleLocale, dict } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative sticky top-0 z-50 flex transition-colors duration-300 ${scrolled ? "border-b border-surface-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`}
    >
      <div
        className={`lg:hidden absolute top-full left-0 w-full flex flex-col gap-4 border-b border-surface-border bg-background p-6 transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
          {dict.nav.about}
        </p>
        <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
          {dict.nav.projects}
        </p>
        <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
          {dict.nav.skills}
        </p>
        <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
          {dict.nav.resume}
        </p>
        <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
          {dict.nav.contact}
        </p>
      </div>
      <Container className="flex items-center justify-between h-16">
        <button
          className="relative lg:hidden"
          onClick={() => setIsMenuOpen((state) => !state)}
        >
          <Menu
            size={20}
            className={`transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
          />
          <X
            size={20}
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
          />
        </button>
        <p className="text-sm font-semibold text-foreground tracking-tight">
          Pedro Zappellini.
        </p>
        <div className="hidden lg:flex gap-10">
          <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
            {dict.nav.about}
          </p>
          <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
            {dict.nav.projects}
          </p>
          <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
            {dict.nav.skills}
          </p>
          <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
            {dict.nav.resume}
          </p>
          <p className="text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer">
            {dict.nav.contact}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-foreground"
            onClick={toggleLocale}
          >
            {locale.toUpperCase()}
          </button>
          <button
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-foreground"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </Container>
    </header>
  );
}

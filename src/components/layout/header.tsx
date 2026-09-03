"use client";
import useLocale from "@/src/Hooks/useLocale";
import useTheme from "@/src/Hooks/useTheme";
import { useState, useEffect } from "react";
import { Container } from "./container";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const { locale, toggleLocale, dict } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/stack", label: dict.nav.skills },
    { href: "/projects", label: dict.nav.projects },
    { href: "/resume", label: dict.nav.resume },
    { href: "/contact", label: dict.nav.contact },
  ];

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
      className={`sticky top-0 z-50 flex transition-colors duration-300 ${scrolled ? "border-b border-surface-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`}
    >
      <nav
        className={`lg:hidden absolute top-full left-0 w-full flex flex-col gap-4 border-b border-surface-border bg-background p-6 transition-[transform,opacity] duration-300 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0  pointer-events-none"}`}
      >
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <p
                className={`text-sm font-medium ${isActive ? "text-accent" : "text-muted"} transition-colors hover:text-foreground cursor-pointer`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <Container className="flex items-center justify-between h-16">
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
            Pedro Zappellini.
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
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground"
            onClick={toggleLocale}
          >
            {locale.toUpperCase()}
          </button>
          <button
            className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </Container>
    </header>
  );
}

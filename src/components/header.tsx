"use client";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <header className="sticky top-0 transition-colors duration-300 border-b border-surface-border bg-background/80 backdrop-blue-md">
      <h1>ola header</h1>
    </header>
  );
}

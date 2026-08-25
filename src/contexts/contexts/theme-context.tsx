"use client";
import { Theme } from "@/src/types/theme";
import { createContext } from "react";

interface ThemeProviderType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProviderType | undefined>(
  undefined,
);

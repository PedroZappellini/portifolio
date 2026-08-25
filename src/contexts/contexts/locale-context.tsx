"use client";
import { Dictionary, Locale } from "@/src/i18n/types";
import { createContext } from "react";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dict: Dictionary;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined,
);

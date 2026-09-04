"use client";
import { PropsWithChildren, useState } from "react";
import { LocaleContext } from "../contexts/locale-context";
import { Locale } from "@/src/types/locale";
import { dictionaries } from "@/src/i18n/dictionaries";

export default function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>("pt");
  const dict = dictionaries[locale];

  function toggleLocale() {
    if (locale === "pt") {
      setLocale("en");
    } else {
      setLocale("pt");
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

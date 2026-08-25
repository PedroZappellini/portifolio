import { PropsWithChildren } from "react";
import LocaleProvider from "./providers/locale-provider";
import ThemeProvider from "./providers/theme-provider";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}

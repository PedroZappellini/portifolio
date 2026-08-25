import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-surface-border mt-30">
      <Container className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm font-semibold text-foreground">
          Pedro Zappellini Rohwedder
        </p>
      </Container>
    </footer>
  );
}

"use-client";
import useLocale from "@/src/Hooks/useLocale";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../layout/container";

export function Hero() {
  const { dict } = useLocale();

  return (
    <section className="mesh-gradient pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <div className="bg-surface flex rounded-full items-center gap-2 border border-surface-border px-4 py-1.5 text-xs font-medium text-muted w-fit">
          <div className="relative flex h-2 w-2">
            <span className="absolute w-full h-full bg-success rounded-full animate-ping" />
            <span className="relative h-full w-full bg-success rounded-full" />
          </div>
          <span>{dict.hero.available}</span>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium text-muted sm:text-xl">
              {dict.hero.greeting}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {dict.hero.name}
            </h1>
            <p className="text-gradient text-2xl font-semibold tracking-tight sm:text-3xl w-fit">
              {dict.hero.role}
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {dict.hero.tagline}
            </p>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {dict.hero.location}
              </p>
            </div>
          </div>
          <div className="flex mt-8 gap-3">
            <Button
              href="/projects"
              className="gap-2"
              variant="primary"
              name={dict.hero.ctaProjects}
              children={<ArrowRight size={16} />}
            />
            <Button
              href="/contact"
              variant="secondary"
              name={dict.hero.ctaContact}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-15 text-muted animate-bounce">
          <ArrowDown size={25} />
        </div>
      </Container>
    </section>
  );
}

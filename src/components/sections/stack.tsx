"use client";
import useLocale from "@/src/Hooks/useLocale";
import { Container } from "../layout/container";
import { SectionHeading } from "../ui/sectionHeading";
import { StackCard } from "../ui/stackCard";
import { SkillsBadge } from "../ui/skillsBadge";

export function Stack() {
  const { dict } = useLocale();
  return (
    <section className="mt-30">
      <Container>
        <SectionHeading
          align="left"
          eyebrow={dict.skills.eyebrow}
          title={dict.skills.title}
          subtitle={dict.skills.subtitle}
        />
        <div className="grid grid-flow-col auto-cols-[85%] snap-x snap-mandatory grid-rows-[auto_auto_auto_auto] overflow-x-auto scrollbar-hide sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-[repeat(8,auto)] gap-4 mt-8">
          {dict.skills.categories.map((category, index) => (
            <StackCard
              key={index}
              icon={category.icon}
              iconBackgroundColor={category.backgroundColor}
              name={category.name}
              description={category.description}
              badges={category.items.map((item, index) => (
                <SkillsBadge key={index} name={item.name} icon={item.icon} />
              ))}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// grid grid-flow-col auto-cols-[16rem] overflow-x-auto scrollbar-hide gap-4 mt-8

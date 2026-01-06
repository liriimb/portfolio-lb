import Section from "./Section";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Resume } from "@/content/resume";
import HoverCard from "@/components/shared/HoverCard";

export default function Experience({ data }: { data: Resume }) {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {data.experience.map((e) => (
          <HoverCard key={e.company} variant="aura" interactive>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{e.company}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                </div>

                <Badge variant="secondary" className="h-fit">
                  {e.period}
                </Badge>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </HoverCard>
        ))}
      </div>
    </Section>
  );
}

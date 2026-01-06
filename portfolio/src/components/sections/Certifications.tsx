import Section from "./Section";
import { CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";
import HoverCard from "@/components/shared/HoverCard";

export default function Certifications({ data }: { data: Resume }) {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-3 md:grid-cols-2">
        {data.certifications.map((c) => (
          <HoverCard key={c}>
            <CardContent className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Certificate
              </p>
              <p className="mt-2 text-sm font-medium">{c}</p>
            </CardContent>
          </HoverCard>
        ))}
      </div>
    </Section>
  );
}

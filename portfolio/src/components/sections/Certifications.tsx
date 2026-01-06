import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";

export default function Certifications({ data }: { data: Resume }) {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-3 md:grid-cols-2">
        {data.certifications.map((c) => (
          <Card
            key={c}
            className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20"
          >
            <CardContent className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Certificate
              </p>
              <p className="mt-2 text-sm font-medium">{c}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

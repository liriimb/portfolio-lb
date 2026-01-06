import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";
import TechBadge from "@/components/shared/TechBadge";

function Group({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-foreground/25">
      <CardContent className="p-6">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((x) => (
            <TechBadge key={x}>{x}</TechBadge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skills({ data }: { data: Resume }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-2">
        <Group title="Backend" items={data.skills.backend} />
        <Group title="Frontend" items={data.skills.frontend} />
        <div className="md:col-span-2">
          <Group title="Tools / Cloud" items={data.skills.tools} />
        </div>
      </div>
    </Section>
  );
}

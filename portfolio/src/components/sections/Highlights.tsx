import { Card, CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";
import Container from "@/components/shared/Container";

export default function Highlights({ data }: { data: Resume }) {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-3">
          {data.highlights.map((h) => (
            <Card
              key={h.label}
              className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20"
            >
              <CardContent className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {h.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

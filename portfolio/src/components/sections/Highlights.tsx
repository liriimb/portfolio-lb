import { CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";
import Container from "@/components/shared/Container";
import HoverCard from "@/components/shared/HoverCard";

export default function Highlights({ data }: { data: Resume }) {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-3">
          {data.highlights.map((h) => (
            <HoverCard key={h.label}>
              <CardContent className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {h.value}
                </p>
              </CardContent>
            </HoverCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

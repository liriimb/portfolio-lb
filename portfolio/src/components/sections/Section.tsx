import Container from "@/components/shared/Container";
import type { SectionId } from "@/content/sections";

export default function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}

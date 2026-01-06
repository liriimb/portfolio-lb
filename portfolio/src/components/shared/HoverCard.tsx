import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Variant = "soft" | "aura";

export default function HoverCard({
  children,
  className,
  variant = "soft",
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  interactive?: boolean;
}) {
  const base =
    "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20";

  const aura =
    "hover:-translate-y-1.5 hover:shadow-2xl hover:ring-1 hover:ring-foreground/30 hover:shadow-[0_0_28px_hsl(var(--foreground)/0.14)]";

  return (
    <Card
      className={cn(
        base,
        variant === "aura" && aura,
        interactive && "cursor-pointer",
        className,
      )}
    >
      {children}
    </Card>
  );
}

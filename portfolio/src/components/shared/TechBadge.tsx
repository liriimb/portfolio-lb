import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "select-none cursor-default transition-all duration-200 hover:scale-[1.06] hover:shadow-md hover:!bg-foreground hover:!text-background",
        className,
      )}
    >
      {children}
    </Badge>
  );
}

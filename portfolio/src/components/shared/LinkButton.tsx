import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export default function LinkButton({
  href,
  children,
  variant = "outline",
  className,
  external,
}: LinkButtonProps) {
  const isExternal = external ?? href.startsWith("http");

  const base =
    "transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-md";

  const outlineExtra = "hover:bg-foreground hover:text-background";

  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : variant}
      className={cn(base, variant === "outline" && outlineExtra, className)}
    >
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </a>
    </Button>
  );
}

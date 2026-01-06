import { cn } from "@/lib/utils";

type FillButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export default function FillButton({
  href,
  children,
  external = false,
  className,
}: FillButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-foreground/25 px-4 py-2 text-sm font-medium",
        "transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:border-foreground/60",
        "cursor-pointer select-none",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 translate-y-full bg-foreground transition-transform duration-200 ease-out group-hover:translate-y-0" />
      <span className="relative text-foreground transition-colors duration-200 group-hover:text-background">
        {children}
      </span>
    </a>
  );
}

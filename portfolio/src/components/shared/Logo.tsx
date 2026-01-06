import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-foreground/20 bg-background",
        "h-9 w-9 font-semibold tracking-tight select-none",
        "transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:border-foreground/40",
        "cursor-pointer",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 translate-y-full bg-foreground transition-transform duration-200 ease-out group-hover:translate-y-0" />

      <span className="relative text-foreground transition-colors duration-200 group-hover:text-background">
        LB
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";

type GlowLinkProps = {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
};

export default function GlowLink({
  href,
  label,
  className,
  external,
}: GlowLinkProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-[1px] active:translate-y-[1px]",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-md border border-foreground/25 opacity-0 scale-[0.96] transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:border-foreground/60" />
      <span className="absolute inset-0 rounded-md ring-0 ring-foreground/10 transition-all duration-200 group-hover:ring-4" />
      <span className="relative">{label}</span>
    </a>
  );
}

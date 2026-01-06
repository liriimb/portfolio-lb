import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function ActionLink({
  href,
  label,
  className,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-md border border-foreground/25 transition-colors duration-200 group-hover:border-foreground/60" />
      <span className="absolute inset-0 rounded-md bg-foreground/0 transition-colors duration-200 group-hover:bg-foreground" />
      <span className="relative text-foreground transition-colors duration-200 group-hover:text-background">
        {label}
      </span>
    </a>
  );
}

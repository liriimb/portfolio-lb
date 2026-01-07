"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";

type Variant = "primary" | "outline" | "ghost" | "radial";

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
  const isExternal = external ?? /^https?:\/\//.test(href);

  const common =
    "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap " +
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring " +
    "disabled:pointer-events-none disabled:opacity-50";

  const lift =
    "transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-md";

  const setOriginFromEvent = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const cx = Math.max(0, Math.min(100, x));
      const cy = Math.max(0, Math.min(100, y));

      el.style.setProperty("--rx", `${cx}%`);
      el.style.setProperty("--ry", `${cy}%`);
    },
    [],
  );

  if (variant === "radial") {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        onPointerEnter={setOriginFromEvent}
        onPointerMove={setOriginFromEvent}
        className={cn(
          "group relative overflow-hidden select-none cursor-pointer",
          common,
          lift,
          "border border-foreground/25 bg-background px-4 py-2",
          "hover:border-foreground/60",
          className,
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-foreground",
            "[clip-path:circle(0%_at_var(--rx,50%)_var(--ry,50%))]",
            "transition-[clip-path] duration-600 ease-out",
            "group-hover:[clip-path:circle(150%_at_var(--rx,50%)_var(--ry,50%))]",
          )}
        />

        <span className="relative text-foreground transition-colors duration-200 group-hover:text-background">
          {children}
        </span>
      </a>
    );
  }

  const variantClass =
    variant === "primary"
      ? "bg-foreground text-background border border-foreground/25 hover:border-foreground/60"
      : variant === "ghost"
        ? "bg-transparent text-foreground hover:bg-muted"
        : "bg-background text-foreground border border-foreground/25 hover:bg-foreground hover:text-background hover:border-foreground/60";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "select-none cursor-pointer",
        common,
        lift,
        "px-4 py-2",
        variantClass,
        className,
      )}
    >
      {children}
    </a>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";

export default function Logo({ className }: { className?: string }) {
  const setOriginFromEvent = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      el.style.setProperty("--rx", `${Math.max(0, Math.min(100, x))}%`);
      el.style.setProperty("--ry", `${Math.max(0, Math.min(100, y))}%`);
    },
    [],
  );

  return (
    <span
      onPointerEnter={setOriginFromEvent}
      onPointerMove={setOriginFromEvent}
      className={cn(
        "group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md",
        "border border-foreground/20 bg-background font-semibold tracking-tight select-none",
        "cursor-pointer",
        "transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:border-foreground/40",
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
        LB
      </span>
    </span>
  );
}

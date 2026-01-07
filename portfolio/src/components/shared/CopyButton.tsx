"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export default function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

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

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      onPointerEnter={setOriginFromEvent}
      onPointerMove={setOriginFromEvent}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-3 py-2 text-sm font-medium",
        "border border-foreground/25 bg-background text-foreground",
        "select-none cursor-pointer",
        "transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:border-foreground/60 hover:shadow-md",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-foreground",
          "[clip-path:circle(0%_at_var(--rx,50%)_var(--ry,50%))]",
          "transition-[clip-path] duration-300 ease-out",
          "group-hover:[clip-path:circle(160%_at_var(--rx,50%)_var(--ry,50%))]",
        )}
      />
      <span className="relative transition-colors duration-200 group-hover:text-background">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  text: string;
  className?: string;
  idleLabel?: string;
  copiedLabel?: string;
  timeoutMs?: number;
};

export default function CopyButton({
  text,
  className,
  idleLabel = "Copy",
  copiedLabel = "Copied",
  timeoutMs = 1200,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), timeoutMs);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "cursor-pointer select-none rounded-md border border-foreground/25 px-3 py-2 text-sm font-medium transition-all hover:-translate-y-[1px] hover:border-foreground/60 hover:bg-foreground hover:text-background hover:shadow-md active:translate-y-[1px]",
        className,
      )}
    >
      {copied ? copiedLabel : idleLabel}
    </button>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  ruleClassName?: string;
  light?: boolean;
};

export function Eyebrow({
  children,
  className,
  ruleClassName,
  light = false,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em]",
        light ? "text-amber-200" : "text-amber-800",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          light ? "bg-amber-200/80" : "bg-amber-800/60",
          ruleClassName
        )}
      />
      {children}
    </p>
  );
}

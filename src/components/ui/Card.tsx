import type React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface ring-1 ring-border shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        className,
      )}
      {...props}
    />
  );
}

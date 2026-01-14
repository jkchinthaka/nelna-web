"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="Nelna Mango"
    >
      {imgError ? (
        <span
          aria-hidden
          className="grid size-10 place-items-center rounded-xl bg-mango-500 shadow-[0_10px_30px_rgba(243,164,0,0.22)]"
        >
          <span className="font-display text-lg font-bold tracking-tight text-black">
            N
          </span>
        </span>
      ) : (
        <span
          aria-hidden
          className="grid size-10 place-items-center rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5"
        >
          <img
            src="/nelna-logo.png"
            alt=""
            width={36}
            height={36}
            className="size-9 object-contain"
            loading="eager"
            decoding="async"
            onError={() => setImgError(true)}
          />
        </span>
      )}
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold tracking-tight">
          Nelna Mango
        </span>
        <span className="block text-xs text-muted">Sri Lanka • Export</span>
      </span>
    </Link>
  );
}

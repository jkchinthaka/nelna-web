"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type Item = {
  id: string;
  title: string;
  category: "Orchard" | "Harvesting" | "Packaging" | "Export Preparation";
  src: string;
};

const items: Item[] = [
  { id: "1", title: "Orchard", category: "Orchard", src: "/gallery-tile.svg" },
  { id: "2", title: "Harvesting", category: "Harvesting", src: "/gallery-tile.svg" },
  { id: "3", title: "Packaging", category: "Packaging", src: "/gallery-tile.svg" },
  {
    id: "4",
    title: "Export Preparation",
    category: "Export Preparation",
    src: "/gallery-tile.svg",
  },
  { id: "5", title: "Orchard", category: "Orchard", src: "/gallery-tile.svg" },
  { id: "6", title: "Packaging", category: "Packaging", src: "/gallery-tile.svg" },
  {
    id: "7",
    title: "Export Preparation",
    category: "Export Preparation",
    src: "/gallery-tile.svg",
  },
  { id: "8", title: "Harvesting", category: "Harvesting", src: "/gallery-tile.svg" },
];

const categories: Array<Item["category"] | "All"> = [
  "All",
  "Orchard",
  "Harvesting",
  "Packaging",
  "Export Preparation",
];

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const visible = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm ring-1 ring-border transition-colors",
              active === c
                ? "bg-mango-500 text-black"
                : "bg-surface text-foreground hover:bg-earth-50",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            className="group mb-4 block w-full overflow-hidden rounded-2xl text-left ring-1 ring-border"
          >
            <div
              className={cn(
                "relative w-full bg-linear-to-br from-mango-100 via-earth-50 to-leaf-100",
                idx % 5 === 0 ? "aspect-4/5" : idx % 3 === 0 ? "aspect-16/10" : "aspect-4/3",
              )}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading={idx < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent p-3">
                <p className="text-sm font-medium text-white">{item.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-60 grid place-items-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-background ring-1 ring-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border p-4">
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">
                  {lightbox.category}
                </p>
                <p className="text-sm text-muted">{lightbox.title}</p>
              </div>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm ring-1 ring-border hover:bg-earth-50"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>
            <div className="relative aspect-16/10 bg-linear-to-br from-mango-100 via-earth-50 to-leaf-100">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

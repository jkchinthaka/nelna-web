"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
    { src: "/hero-mango.svg", alt: "Fresh Harvest", category: "Orchard" },
    { src: "/gallery-tile.svg", alt: "Export Packing", category: "Process" },
    { src: "/mango-card.svg", alt: "Quality Check", category: "Quality" },
    { src: "/hero-mango.svg", alt: "Orchard Morning", category: "Orchard" },
    { src: "/gallery-tile.svg", alt: "Cold Storage", category: "Process" },
    { src: "/mango-card.svg", alt: "Premium Grade", category: "Quality" },
];

export function CinematicGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        layoutId={`image-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl"
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <div className="relative aspect-[4/5] w-full bg-earth-100">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white ring-1 ring-white/30">
                                    <ZoomIn className="size-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-white font-medium text-sm">{img.alt}</p>
                                <p className="text-white/60 text-xs uppercase tracking-wider">{img.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="size-6" />
                        </button>

                        <motion.div
                            layoutId={`image-modal`}
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Fullscreen view"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

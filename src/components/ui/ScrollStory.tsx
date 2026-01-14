"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const storySteps = [
    {
        title: "1. The Origin",
        description: "Grown in the nutrient-rich soils of Sri Lanka's dry zone, where the tropical sun perfects the sweetness.",
        img: "/gallery-tile.svg", // Placeholder, would be a farm image
        color: "bg-mango-50",
    },
    {
        title: "2. Hand Harvest",
        description: "Picked at the precise moment of physiological maturity to ensure they ripen perfectly during transit.",
        img: "/mango-card.svg",
        color: "bg-leaf-50",
    },
    {
        title: "3. Quality Selection",
        description: "Every mango passes through rigorous optical and manual grading. Only the flawless make the cut.",
        img: "/hero-mango.svg",
        color: "bg-mango-100",
    },
    {
        title: "4. Global Journey",
        description: "Packed in protective export cartons and shipped via temperature-controlled logistics to your port.",
        img: "/gallery-tile.svg",
        color: "bg-blue-50",
    },
];

export function ScrollStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-surface-2">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                {/* Dynamic Background Circle */}
                <motion.div
                    style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.5]), opacity: 0.2 }}
                    className="absolute size-[80vh] rounded-full bg-mango-400 blur-3xl"
                />

                <div className="relative w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Visual Side */}
                    <div className="relative aspect-square max-h-[60vh] lg:h-auto w-full rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-2xl bg-white">
                        {storySteps.map((step, index) => {
                            // Calculate range for this specific step
                            const stepStart = index / storySteps.length;
                            const stepEnd = (index + 1) / storySteps.length;

                            // Transform for Image opacity/scale
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const scale = useTransform(scrollYProgress,
                                [stepStart, stepEnd],
                                [1.1, 1]
                            );

                            return (
                                <motion.div
                                    key={step.title}
                                    style={{ opacity }}
                                    className="absolute inset-0 p-8"
                                >
                                    <motion.div style={{ scale }} className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={step.img}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Text Side */}
                    <div className="relative h-64 lg:h-auto flex items-center">
                        {storySteps.map((step, index) => {
                            const stepStart = index / storySteps.length;
                            const stepEnd = (index + 1) / storySteps.length;

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [stepStart, stepStart + 0.05, stepEnd - 0.1, stepEnd],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress,
                                [stepStart, stepEnd],
                                [50, -50]
                            );

                            return (
                                <motion.div
                                    key={step.title}
                                    style={{ opacity, y }}
                                    className="absolute w-full"
                                >
                                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest">
                                        Step 0{index + 1}
                                    </div>
                                    <h3 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

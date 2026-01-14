"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
    const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative group", className)}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 -z-10 rounded-3xl bg-black/5 blur-xl transition-opacity opacity-0 group-hover:opacity-100 duration-500"
            />

            <div className="relative h-full overflow-hidden rounded-3xl bg-surface ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/10">
                <motion.div
                    style={{
                        background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.4), transparent 60%)`,
                    }}
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay"
                />
                {children}
            </div>
        </motion.div>
    );
}

export function FlavorProfile({
    label,
    value, // 0 to 100
    color = "bg-mango-500",
}: {
    label: string;
    value: number;
    color?: string;
}) {
    return (
        <div className="group">
            <div className="flex justify-between text-xs font-medium text-muted mb-1">
                <span>{label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}/10
                </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value * 10}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className={cn("h-full rounded-full", color)}
                />
            </div>
        </div>
    );
}

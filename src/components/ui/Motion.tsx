"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type DelayProps = { delay?: number; duration?: number; className?: string };

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className,
    y = 20,
}: DelayProps & { children: React.ReactNode; y?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({
    children,
    className,
    delay = 0,
    staggerBy = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerBy?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerBy,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Fixed the above Item component to actually work with Stagger
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}


export function ScaleOnHover({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FloatingBlob({
    className,
    color,
    delay = 0,
}: {
    className?: string;
    color: string;
    delay?: number;
}) {
    return (
        <motion.div
            className={cn("absolute rounded-full blur-3xl opacity-60", color, className)}
            animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 15, -15, 0],
                scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay,
            }}
        />
    );
}

export function ParallaxImage({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={cn("overflow-hidden relative", className)}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale: 1.1 }}
                className="object-cover w-full h-full"
            />
        </div>
    );
}

export function FloatingElement({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

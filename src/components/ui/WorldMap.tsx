"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const locations = [
    { id: "sl", x: 680, y: 340, label: "Sri Lanka (Origin)" },
    { id: "eu", x: 480, y: 160, label: "Europe" },
    { id: "me", x: 570, y: 220, label: "Middle East" },
    { id: "as", x: 780, y: 240, label: "Asia Pacific" },
];

const routes = [
    { from: "sl", to: "eu" },
    { from: "sl", to: "me" },
    { from: "sl", to: "as" },
];

export function WorldMap() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="relative w-full aspect-[2/1] bg-earth-50 rounded-3xl overflow-hidden ring-1 ring-border">
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale contrast-50" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
                {routes.map((route, i) => {
                    const start = locations.find((l) => l.id === route.from)!;
                    const end = locations.find((l) => l.id === route.to)!;

                    // Simple quadratic bezier curve
                    const midX = (start.x + end.x) / 2;
                    const midY = Math.min(start.y, end.y) - 50; // Curve upwards

                    const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

                    return (
                        <g key={i}>
                            {/* Base Path */}
                            <motion.path
                                d={pathD}
                                fill="none"
                                stroke="rgba(0,0,0,0.1)"
                                strokeWidth="2"
                            />
                            {/* Animated Path */}
                            <motion.path
                                d={pathD}
                                fill="none"
                                stroke="#F3A400"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                initial={{ strokeDashoffset: 100, opacity: 0 }}
                                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </g>
                    );
                })}

                {locations.map((loc, i) => (
                    <g key={loc.id}>
                        <motion.circle
                            cx={loc.x}
                            cy={loc.y}
                            r={4}
                            fill={loc.id === "sl" ? "#2E7D32" : "#151515"}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.1, type: "spring" }}
                        />
                        <motion.circle
                            cx={loc.x}
                            cy={loc.y}
                            r={12}
                            fill="none"
                            stroke={loc.id === "sl" ? "#2E7D32" : "#151515"}
                            strokeOpacity={0.2}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        />
                        <motion.text
                            x={loc.x}
                            y={loc.y + 20}
                            textAnchor="middle"
                            className="text-[10px] uppercase font-bold fill-black/60 tracking-widest"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 20 }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                        >
                            {loc.label}
                        </motion.text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

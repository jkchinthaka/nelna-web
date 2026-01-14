"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  children,
  delayMs = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delayMs?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: delayMs / 1000, type: "spring", bounce: 0 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

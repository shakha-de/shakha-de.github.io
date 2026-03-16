"use client";

import { motion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

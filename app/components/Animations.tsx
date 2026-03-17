"use client";

import { motion, useReducedMotion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
    <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
    );
};

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
    <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
    );
};

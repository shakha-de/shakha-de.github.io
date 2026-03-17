"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-primary z-[60] origin-left shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_45%,transparent)]"
            style={{ scaleX }}
        />
    );
};

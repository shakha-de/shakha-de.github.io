"use client";

import { useEffect, useState } from "react";

export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
            style={{
                transform: `scaleX(${progress})`,
                background: "var(--nous-blue)",
                boxShadow: "0 0 12px rgba(0, 113, 169, 0.45)",
            }}
        />
    );
};

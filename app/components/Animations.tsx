"use client";

import { useEffect, useRef, ReactNode } from "react";

// IntersectionObserver-based reveal animation
// Replaces framer-motion with CSS .reveal/.reveal.in classes

function useReveal(ref: React.RefObject<HTMLElement | null>, delay: number = 0) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof IntersectionObserver === "undefined") {
            el.classList.add("in");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const timeout = Math.min(delay * 300, 150);
                        if (timeout > 0) {
                            setTimeout(() => {
                                entry.target.classList.add("in");
                            }, timeout);
                        } else {
                            entry.target.classList.add("in");
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px 100px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [ref, delay]);
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    useReveal(ref, delay);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}

export function PageTransition({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

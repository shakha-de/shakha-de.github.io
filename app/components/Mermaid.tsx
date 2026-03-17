"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: resolvedTheme === "dark" ? "dark" : "default",
            securityLevel: "loose",
            fontFamily: "var(--font-inter)",
        });

        const renderDiagram = async () => {
            if (ref.current) {
                try {
                    // Generate a unique ID for this specific render
                    const id = `mermaid-${Math.floor(Math.random() * 1000000)}`;
                    
                    // Render the diagram to an SVG string first
                    const { svg } = await mermaid.render(id, chart);
                    
                    // Set the innerHTML of our ref to the generated SVG
                    if (ref.current) {
                        ref.current.innerHTML = svg;
                    }
                } catch (err) {
                    console.warn("Mermaid render error:", err);
                    // Keep the original text as fallback if rendering fails
                }
            }
        };

        renderDiagram();
    }, [chart, resolvedTheme]);

    return (
        <div 
            ref={ref} 
            className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-surface/30 rounded-3xl border border-border mt-8 overflow-auto min-h-[150px] w-full"
        >
            <pre className="text-xs opacity-30 animate-pulse">Rendering architecture...</pre>
        </div>
    );
};

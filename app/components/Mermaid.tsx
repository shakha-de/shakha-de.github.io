"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            securityLevel: "loose",
            fontFamily: "var(--font-mono)",
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
    }, [chart]);

    return (
        <div 
            ref={ref} 
            className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-[var(--deep-navy)] border border-[var(--border-navy)] mt-8 overflow-x-auto min-h-[150px] w-full max-w-full [&_svg]:max-w-full [&_svg]:h-auto"
        >
            <pre className="text-xs text-[var(--gray)] animate-pulse">Rendering architecture...</pre>
        </div>
    );
};

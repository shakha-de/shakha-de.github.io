"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolio";

interface Line {
    text: string;
    isInput?: boolean;
}

export default function Terminal() {
    const [history, setHistory] = useState<Line[]>([
        { text: "shakha.online [Version 1.0.0]" },
        { text: "(c) 2026 Shakhriyor Kadamboev. Open system console." },
        { text: "" },
        { text: "Type 'help' to see available commands." },
        { text: "" },
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input on click anywhere inside the terminal
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const cmd = input;
            setInput("");
            handleCommand(cmd);
        }
    };

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const response: Line[] = [
            { text: `visitor@shakha:~$ ${cmd}`, isInput: true }
        ];

        switch (cleanCmd) {
            case "help":
                response.push(
                    { text: "Available commands:" },
                    { text: "  about    - Short bio and background" },
                    { text: "  skills   - Technical skills stack" },
                    { text: "  projects - Selected portfolio projects" },
                    { text: "  contact  - Social channels & mail" },
                    { text: "  theme    - Toggle light / dark mode" },
                    { text: "  clear    - Clear console screen" }
                );
                break;
            case "about":
                response.push(
                    { text: `${portfolioData.personalInfo.name} — ${portfolioData.personalInfo.title}.` },
                    { text: "I specialize in constructing reliable microservices, database optimizations, and pipeline architectures." },
                    { text: "Currently academic at Martin Luther University Halle-Wittenberg." }
                );
                break;
            case "skills":
                response.push(
                    { text: "CORE TECH:" },
                    { text: "  • Languages: Go, Python, Java, C++, TypeScript" },
                    { text: "  • Databases: PostgreSQL, Redis, Kafka" },
                    { text: "  • Platform: Docker, Kubernetes, AWS" }
                );
                break;
            case "projects":
                response.push({ text: "PROJECT FILES FOUND:" });
                portfolioData.projects.forEach((proj) => {
                    response.push({ text: `  • ${proj.title.replace(" (In Progress)", "")}` });
                });
                response.push({ text: "Use Navigation Links to view full case studies." });
                break;
            case "contact":
                response.push(
                    { text: "CHANNELS:" },
                    { text: `  • Mail: ${portfolioData.personalInfo.email}` },
                    { text: `  • Git: ${portfolioData.personalInfo.github.replace("https://", "")}` },
                    { text: `  • Link: ${portfolioData.personalInfo.linkedin.replace("https://", "")}` }
                );
                break;
            case "theme":
                const html = document.documentElement;
                const currentTheme = html.getAttribute("data-theme") || 
                    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                const nextTheme = currentTheme === "dark" ? "light" : "dark";
                html.setAttribute("data-theme", nextTheme);
                localStorage.setItem("theme", nextTheme);
                window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
                response.push({ text: `Environment theme toggled to: ${nextTheme}` });
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                if (cleanCmd !== "") {
                    response.push({ text: `command error: '${cmd}' not recognized. Type 'help' for index.` });
                }
        }

        setHistory((prev) => [...prev, ...response]);
    };

    return (
        <div 
            onClick={handleTerminalClick}
            className="w-full max-w-[680px] border border-[var(--border-navy)] bg-[var(--surface)] shadow-2xl font-mono text-[13px] text-[var(--light-blue)] flex flex-col h-[280px] select-none cursor-text transition-all mt-4"
        >
            {/* Terminal Title Bar */}
            <div className="flex justify-between items-center bg-[var(--border-navy)]/30 px-4 py-2 border-b border-[var(--border-navy)] text-xs text-[var(--gray)]">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    <span className="ml-2 font-medium">visitor@shakha: ~</span>
                </div>
                <div className="opacity-60">[bash]</div>
            </div>

            {/* Terminal Logs Area */}
            <div 
                ref={containerRef}
                className="grow p-4 overflow-y-auto space-y-1.5 scrollbar-thin"
            >
                {history.map((line, idx) => (
                    <div 
                        key={idx} 
                        className={line.isInput ? "text-[var(--text-main)]" : "text-[var(--light-blue)]"}
                    >
                        {line.text}
                    </div>
                ))}
                
                {/* Active Input Line */}
                <div className="flex items-center gap-1.5 text-[var(--text-main)] pt-1">
                    <span className="shrink-0 text-[var(--nous-blue)] font-bold">visitor@shakha:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="grow bg-transparent border-none outline-none font-mono text-[13px] text-[var(--text-main)] p-0"
                        autoCapitalize="off"
                        autoComplete="off"
                        spellCheck="false"
                    />
                </div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { portfolioData } from "../data/portfolio";
import { triggerToast } from "./Toast";

interface CommandItem {
    id: string;
    title: string;
    description: string;
    category: "NAVIGATION" | "RESEARCH & WORK" | "ACTIONS";
    badge?: string;
    onSelect: () => void;
}

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [copySuccess, setCopySuccess] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const { personalInfo } = portfolioData;

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopySuccess(true);
            triggerToast(`Copied ${personalInfo.email} to clipboard.`, "STDOUT");
            setTimeout(() => {
                setCopySuccess(false);
                onClose();
            }, 600);
        } catch {
            // fallback
            onClose();
        }
    }, [personalInfo.email, onClose]);

    const toggleTheme = useCallback(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
        onClose();
    }, [onClose]);

    const items: CommandItem[] = useMemo(() => [
        // Navigation
        {
            id: "nav-home",
            title: "Home",
            description: "Engineering Reliable Systems",
            category: "NAVIGATION",
            badge: "[01]",
            onSelect: () => { router.push("/"); onClose(); },
        },
        {
            id: "nav-about",
            title: "About & Heritage",
            description: "Precision, clean systems & Silk Road architecture",
            category: "NAVIGATION",
            badge: "[02]",
            onSelect: () => { router.push("/about"); onClose(); },
        },
        {
            id: "nav-projects",
            title: "Projects & Research",
            description: "Reinforcement learning, similarity checking, and systems",
            category: "NAVIGATION",
            badge: "[03]",
            onSelect: () => { router.push("/projects"); onClose(); },
        },
        {
            id: "nav-skills",
            title: "Technical Profile & Honors",
            description: "Backend, Cloud, Systems & Academic Honors",
            category: "NAVIGATION",
            badge: "[04]",
            onSelect: () => { router.push("/skills"); onClose(); },
        },
        {
            id: "nav-experience",
            title: "Career Timeline",
            description: "Porsche AG, MLU Halle, ]init[ AG",
            category: "NAVIGATION",
            badge: "[05]",
            onSelect: () => { router.push("/experience"); onClose(); },
        },
        {
            id: "nav-contact",
            title: "Contact & Inquiries",
            description: "Send a direct message or find social channels",
            category: "NAVIGATION",
            badge: "[06]",
            onSelect: () => { router.push("/contact"); onClose(); },
        },

        // Research & Work
        {
            id: "work-text2sql",
            title: "Text2SQL LLM via GRPO",
            description: "BIRD Benchmark 59.59% EX · Defense Grade 1.0",
            category: "RESEARCH & WORK",
            badge: "[SOTA 1.0]",
            onSelect: () => { router.push("/projects/text2sql-llm"); onClose(); },
        },
        {
            id: "work-porsche",
            title: "Porsche AG (Stuttgart)",
            description: "AI & Cloud Engineer Intern · Kotlin, AWS, Azure, Strands",
            category: "RESEARCH & WORK",
            badge: "[CURRENT]",
            onSelect: () => { router.push("/experience"); onClose(); },
        },
        {
            id: "work-simity",
            title: "Simity Similarity Checker",
            description: "Semantic embedding analysis for Jupyter Notebooks",
            category: "RESEARCH & WORK",
            badge: "[PROJECT]",
            onSelect: () => { router.push("/projects/simity"); onClose(); },
        },
        {
            id: "work-folia",
            title: "Folia Tree Stewardship",
            description: "Community-driven urban greenery protection",
            category: "RESEARCH & WORK",
            badge: "[PROJECT]",
            onSelect: () => { router.push("/projects/folia"); onClose(); },
        },

        // Quick Actions
        {
            id: "action-copy-email",
            title: copySuccess ? "Copied to Clipboard!" : "Copy Email Address",
            description: personalInfo.email,
            category: "ACTIONS",
            badge: copySuccess ? "[COPIED]" : "[COPY]",
            onSelect: copyEmail,
        },
        {
            id: "action-github",
            title: "Visit GitHub",
            description: personalInfo.github.replace("https://", ""),
            category: "ACTIONS",
            badge: "[EXT ↗]",
            onSelect: () => { window.open(personalInfo.github, "_blank", "noopener,noreferrer"); onClose(); },
        },
        {
            id: "action-linkedin",
            title: "Visit LinkedIn",
            description: personalInfo.linkedin.replace("https://", ""),
            category: "ACTIONS",
            badge: "[EXT ↗]",
            onSelect: () => { window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer"); onClose(); },
        },
        {
            id: "action-theme",
            title: "Toggle Theme",
            description: "Switch between light and dark modes",
            category: "ACTIONS",
            badge: "[THEME]",
            onSelect: toggleTheme,
        },
    ], [router, onClose, personalInfo, copySuccess, copyEmail, toggleTheme]);

    const filteredItems = useMemo(() => {
        if (!query.trim()) return items;
        const q = query.toLowerCase();
        return items.filter(
            item =>
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q)
        );
    }, [items, query]);

    // Reset selected index when filtered list changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [filteredItems.length, query]);

    // Focus input on open & lock scroll
    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Keyboard handlers
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    filteredItems[selectedIndex].onSelect();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, filteredItems, selectedIndex, onClose]);

    // Scroll active item into view
    useEffect(() => {
        if (!listRef.current) return;
        const activeElement = listRef.current.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
        if (activeElement) {
            activeElement.scrollIntoView({ block: "nearest" });
        }
    }, [selectedIndex]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[300] flex items-start justify-center pt-[10vh] sm:pt-[14vh] px-4 bg-black/75 backdrop-blur-[8px] animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[620px] bg-[var(--surface)] border border-[var(--border-navy)] shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
                onClick={e => e.stopPropagation()}
            >
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-navy)] bg-[var(--deep-navy)]/40 font-mono text-[11px] text-[var(--gray)]">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--nous-blue)] inline-block animate-pulse"></span>
                        <span>[COMMAND_PALETTE // SYS.PALETTE]</span>
                    </span>
                    <button
                        onClick={onClose}
                        className="hover:text-[var(--mid-light-blue)] cursor-pointer tracking-wider"
                    >
                        [ESC TO EXIT]
                    </button>
                </div>

                {/* Input row */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)] bg-[var(--background)]">
                    <span className="text-[var(--nous-blue)] font-mono font-bold text-base select-none">
                        &gt;
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Type a command, route, or search..."
                        className="w-full bg-transparent text-[var(--text-main)] font-mono text-sm focus:outline-none placeholder:text-[var(--gray)]"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="font-mono text-[11px] text-[var(--gray)] hover:text-[var(--text-main)] cursor-pointer"
                        >
                            [CLEAR]
                        </button>
                    )}
                </div>

                {/* Results list */}
                <div
                    ref={listRef}
                    className="overflow-y-auto p-2 divide-y divide-[var(--border)]/40 divide-dashed"
                >
                    {filteredItems.length === 0 ? (
                        <div className="py-12 text-center font-mono text-xs text-[var(--gray)]">
                            [NO MATCHING COMMANDS FOUND FOR &quot;{query}&quot;]
                        </div>
                    ) : (
                        filteredItems.map((item, index) => {
                            const isSelected = index === selectedIndex;
                            return (
                                <div
                                    key={item.id}
                                    data-index={index}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    onClick={item.onSelect}
                                    className={`px-3 py-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                                        isSelected
                                            ? "bg-[var(--nous-blue)]/15 border-l-2 border-[var(--nous-blue)] pl-[10px]"
                                            : "hover:bg-[var(--deep-navy)]/20 border-l-2 border-transparent"
                                    }`}
                                >
                                    <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`text-[13.5px] font-semibold tracking-tight truncate ${
                                                    isSelected ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                            <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-wider hidden sm:inline">
                                                · {item.category}
                                            </span>
                                        </div>
                                        <span className="text-xs text-[var(--gray)] truncate mt-0.5 font-mono">
                                            {item.description}
                                        </span>
                                    </div>
                                    {item.badge && (
                                        <span
                                            className={`font-mono text-[11px] shrink-0 tracking-wider ${
                                                isSelected
                                                    ? "text-[var(--nous-blue)] font-bold"
                                                    : "text-[var(--gray)]"
                                            }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer instructions */}
                <div className="px-4 py-2 border-t border-[var(--border-navy)] bg-[var(--deep-navy)]/30 font-mono text-[11px] text-[var(--gray)] flex items-center justify-between">
                    <span className="hidden sm:inline">
                        ↑↓ Navigate · ↵ Select · Esc Close
                    </span>
                    <span className="sm:hidden">
                        Tap item to select
                    </span>
                    <span className="text-[var(--nous-blue)]">
                        {filteredItems.length} {filteredItems.length === 1 ? "RESULT" : "RESULTS"}
                    </span>
                </div>
            </div>
        </div>
    );
}

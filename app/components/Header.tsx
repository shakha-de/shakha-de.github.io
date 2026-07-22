"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    // Initial theme setup
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    // Sync theme toggle across components
    useEffect(() => {
        const handleThemeChange = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail) {
                setTheme(customEvent.detail);
            }
        };
        window.addEventListener("theme-change", handleThemeChange);
        return () => window.removeEventListener("theme-change", handleThemeChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
    };

    // Lock scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
        { name: "Experience", href: "/experience" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <a
                href="#content"
                className="sr-only focus:not-sr-only fixed left-4 top-4 z-[70] bg-[var(--nous-blue)] px-4 py-2 text-sm font-bold text-white shadow-lg"
            >
                Skip to content
            </a>
            <header className="fixed top-0 left-0 right-0 z-100 bg-[var(--header-bg)] backdrop-blur-[10px] border-b border-[var(--border)]">
                <div className="max-w-[1280px] mx-auto px-8 py-3.5 flex items-center justify-between gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 font-bold tracking-tight text-[var(--text-main)]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                            <circle cx="13" cy="13" r="4.2" fill="#0071a9"/>
                            <g stroke="#0071a9" strokeWidth="1.4" strokeLinecap="round">
                                <line x1="13" y1="2" x2="13" y2="6"/><line x1="13" y1="20" x2="13" y2="24"/>
                                <line x1="2" y1="13" x2="6" y2="13"/><line x1="20" y1="13" x2="24" y2="13"/>
                                <line x1="5.2" y1="5.2" x2="8" y2="8"/><line x1="18" y1="18" x2="20.8" y2="20.8"/>
                                <line x1="20.8" y1="5.2" x2="18" y2="8"/><line x1="8" y1="18" x2="5.2" y2="20.8"/>
                            </g>
                        </svg>
                        <span>SKadamboev.</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-7 font-mono text-[12.5px] uppercase tracking-[0.04em] text-[var(--gray)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="transition-colors hover:text-[var(--mid-light-blue)]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="font-mono text-[12.5px] uppercase text-[var(--gray)] hover:text-[var(--mid-light-blue)] cursor-pointer"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? "☼ Light" : "☾ Dark"}
                            </button>
                        )}
                        <Link
                            href="/contact"
                            className="hidden sm:inline-block font-mono text-[12.5px] uppercase tracking-[0.06em] border border-[var(--nous-blue)] text-[var(--text-main)] hover:text-white px-3.5 py-2 transition-all hover:bg-[var(--nous-blue)]"
                        >
                            Hire Me
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden border border-[var(--border-navy)] text-[var(--text-main)] font-mono text-xs px-2.5 py-1.5 cursor-pointer uppercase"
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? "close" : "menu"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] z-40 md:hidden flex flex-col p-8 gap-4 font-mono text-[12.5px] uppercase tracking-[0.04em]"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[var(--gray)] hover:text-[var(--mid-light-blue)]"
                                >
                                    → {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="border border-[var(--nous-blue)] text-[var(--text-main)] hover:text-white py-2 text-center hover:bg-[var(--nous-blue)] mt-2 transition-all"
                            >
                                Hire Me
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

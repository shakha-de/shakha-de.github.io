"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 0);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

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

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <>
        <a
            href="#content"
            className="sr-only focus:not-sr-only fixed left-4 top-4 z-[70] rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20"
        >
            Skip to content
        </a>
        <header className="sticky top-0 z-50 w-full py-4 transition-all duration-300">
            <div className="app-container relative transition-all duration-300">
                <div className={`flex items-center justify-between gap-3 px-5 py-3 transition-all duration-300 rounded-2xl ${
                    scrolled || isMenuOpen
                    ? "glass-panel bg-background/85 backdrop-blur-md shadow-lg border border-border"
                    : "bg-transparent border border-transparent"
                }`}>
                    <Link
                        href="/"
                        className="flex items-center gap-2 group transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                            S
                        </div>
                        <span className="text-lg font-bold tracking-tight text-text-main hidden sm:block">
                            Kadamboev<span className="text-primary">.</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 text-xs font-semibold text-text-muted hover:text-primary transition-all rounded-lg hover:bg-primary/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-3">
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="flex items-center justify-center size-9 text-text-main hover:bg-primary/5 rounded-lg transition-colors border border-border md:border-none"
                                aria-label="Toggle theme"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
                                </span>
                            </button>
                        )}

                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-xs font-bold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                        >
                            Hire Me
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden flex items-center justify-center size-9 text-text-main hover:bg-primary/5 rounded-lg transition-colors"
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <span className="material-symbols-outlined text-[24px]">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    id="mobile-navigation"
                    className={`absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-110px)] bg-background/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 border border-border rounded-2xl shadow-xl overflow-y-auto ${
                        isMenuOpen 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible -translate-y-4 pointer-events-none"
                    }`}
                >
                    <nav className="flex flex-col p-3 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center justify-between py-2.5 px-4 text-sm font-semibold text-text-main hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                            >
                                {link.name}
                                <span className="material-symbols-outlined text-primary opacity-60 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 flex items-center justify-center h-10 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all"
                        >
                            Hire Me
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
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
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || isMenuOpen
                ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-border-light dark:border-zinc-800 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 group transition-all"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        S
                    </div>
                    <span className="text-xl font-bold tracking-tight text-text-main hidden sm:block">
                        Kadamboev<span className="text-primary">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>


                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                        Hire Me
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex items-center justify-center size-10 text-text-main hover:bg-primary/5 rounded-lg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <span className="material-symbols-outlined text-[28px]">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-[65px] h-[calc(100vh-65px)] w-full bg-white dark:bg-zinc-950 z-40 md:hidden transition-all duration-300 border-t border-border-light dark:border-zinc-800 ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    }`}
            >
                <nav className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between p-4 text-lg font-bold text-text-main hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                        >
                            {link.name}
                            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 flex items-center justify-center h-14 rounded-2xl bg-primary text-white text-lg font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        Hire Me
                    </Link>
                </nav>
            </div>
        </header>
    );
}

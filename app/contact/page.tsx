"use client";

import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { FadeIn } from "../components/Animations";
import { triggerToast } from "../components/Toast";
import { useState } from "react";

export default function ContactPage() {
    const { personalInfo } = portfolioData;
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        triggerToast(`Copied ${personalInfo.email} to clipboard.`, "STDOUT");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <section className="app-container section-stack w-full">
                    <div className="w-full max-w-4xl">
                        <FadeIn delay={0.1}>
                            <div className="eyebrow">Get In Touch</div>
                            <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[880px]">
                                Let&apos;s build something<br />reliable together.
                            </h1>
                            <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] text-[var(--text-muted)] mb-12">
                                Currently open to new opportunities and collaborations. Studying at Martin Luther University Halle-Wittenberg and open to relocation for the right opportunity.
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-10 items-start">
                            <div className="md:col-span-7 flex flex-col gap-12">
                                <FadeIn delay={0.2}>
                                    <div className="contact-channels flex flex-col gap-4">
                                        <div className="channel-link justify-between">
                                            <a
                                                className="flex items-center gap-4 text-[var(--text-main)] hover:text-[var(--mid-light-blue)] transition-colors grow"
                                                href={`mailto:${personalInfo.email}`}
                                            >
                                                <span className="text-[var(--nous-blue)] w-[18px]">✉</span>
                                                <span>{personalInfo.email}</span>
                                            </a>
                                            <button
                                                onClick={handleCopyEmail}
                                                className="font-mono text-[11px] uppercase tracking-wider text-[var(--gray)] hover:text-[var(--text-main)] hover:border-[var(--nous-blue)] border border-[var(--border-navy)] bg-[var(--surface)] px-2.5 py-1 transition-all cursor-pointer shrink-0"
                                                title="Copy email to clipboard"
                                            >
                                                {copied ? "[COPIED!]" : "[COPY]"}
                                            </button>
                                        </div>
                                        <a
                                            className="channel-link"
                                            href={personalInfo.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-[var(--nous-blue)] w-[18px]">↗</span>
                                            <span className="text-[var(--text-main)]">linkedin.com/in/shakhade</span>
                                        </a>
                                        <a
                                            className="channel-link"
                                            href={personalInfo.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-[var(--nous-blue)] w-[18px]">⟨⟩</span>
                                            <span className="text-[var(--text-main)]">github.com/shakha-de</span>
                                        </a>
                                        <div className="channel-link cursor-default">
                                            <span className="text-[var(--nous-blue)] w-[18px]">◉</span>
                                            <span className="text-[var(--text-main)]">Halle (Saale), Germany</span>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.3}>
                                    <div>
                                        <div className="sg-title font-mono text-xs tracking-[0.12em] uppercase text-[var(--text-main)] mb-[18px]">
                                            Languages
                                        </div>
                                        <div className="langs font-mono text-[13px] text-[var(--text-muted)] leading-[2.1]">
                                            {personalInfo.languages.map((lang, idx) => (
                                                <span key={lang.language}>
                                                    <strong className="text-[var(--text-main)] font-normal">{lang.language}</strong> — {lang.proficiency}
                                                    {idx < personalInfo.languages.length - 1 && <br />}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Retro Risograph Card */}
                            <div className="md:col-span-5 flex justify-center md:justify-end">
                                <FadeIn delay={0.4}>
                                    <div className="p-3 border border-[var(--border-navy)] bg-[var(--deep-navy)]/30 backdrop-blur-sm max-w-[320px] w-full">
                                        <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--border-navy)]">
                                            <Image
                                                src="/uzbekistan-minaret-arch.webp"
                                                alt="Ancient Minaret framed under historical archway in Uzbekistan"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 320px"
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[var(--gray)]">
                                            <span>[FIG. 04] MINARET & ARCH</span>
                                            <span>SILK ROAD PERSPECTIVE</span>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

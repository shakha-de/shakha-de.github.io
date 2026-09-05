"use client";

import Link from "next/link";
import { FadeIn } from "./Animations";

export default function ResearchSpotlight() {
    const metrics = [
        { label: "BIRD TEST SET (0.8B)", value: "59.59%", unit: "EX", desc: "Official Test Evaluation" },
        { label: "PARAM EFFICIENCY", value: "~10x", unit: "", desc: "vs 9B Parameter Models" },
        { label: "DEV IMPROVEMENT", value: "+5.61", unit: "PP", desc: "Gain over SFT Baseline" },
        { label: "DEFENSE NOTE", value: "1.0", unit: "", desc: "Sehr Gut · MLU Halle" },
    ];

    const tags = ["PyTorch", "GRPO", "Qwen-0.8B", "Unsloth", "SQLite", "sqlglot", "SLURM"];

    return (
        <FadeIn delay={0.15}>
            <div className="w-full my-8 border border-[var(--border-navy)] bg-[var(--deep-navy)]/20 backdrop-blur-sm relative overflow-hidden group">
                {/* Top Accent Line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[var(--nous-blue)] via-[var(--mid-light-blue)] to-transparent" />

                <div className="p-6 sm:p-8 lg:p-10">
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--border-navy)] font-mono text-xs">
                        <div className="flex items-center gap-2 text-[var(--nous-blue)] font-bold tracking-wider uppercase">
                            <span className="w-2 h-2 rounded-full bg-[var(--nous-blue)] animate-pulse" />
                            <span>[FEATURED RESEARCH // B.SC. THESIS · GRADE 1.0]</span>
                        </div>
                        <a
                            href="https://bird-bench.github.io/#:~:text=Jul%2017%2C%202026,59.59"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--mid-light-blue)] hover:text-white transition-colors tracking-wide flex items-center gap-1.5"
                        >
                            <span>BIRD BENCHMARK LEADERBOARD</span>
                            <span className="text-[10px]">↗</span>
                        </a>
                    </div>

                    {/* Main Title & Overview */}
                    <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 flex flex-col gap-4">
                            <div>
                                <h3 className="text-[clamp(24px,3.2vw,36px)] font-bold tracking-tight text-[var(--text-main)] mb-2 leading-tight">
                                    Text2SQL LLM — Reinforcement Learning via GRPO
                                </h3>
                                <p className="text-[15px] sm:text-base text-[var(--light-blue)] leading-relaxed max-w-[620px]">
                                    Engineered an end-to-end RL framework using Group Relative Policy Optimization (GRPO) to train compact 0.8B models directly on database execution feedback. Eliminates Supervised Fine-Tuning limitations (copy-bias and syntax hallucination) on unseen enterprise schemas.
                                </p>
                            </div>

                            <ul className="space-y-2 text-[13.5px] font-mono text-[var(--text-muted)] pt-1">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-[var(--nous-blue)] select-none">›</span>
                                    <span>
                                        <strong className="text-[var(--text-main)] font-semibold">18 Reward Architectures:</strong> Iterated over 4 generations to eradicate reward hacking, establishing Gen 4 strict binary execution feedback.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-[var(--nous-blue)] select-none">›</span>
                                    <span>
                                        <strong className="text-[var(--text-main)] font-semibold">OOD Generalization:</strong> Demonstrated robust transfers on Spider-DK (+4.67 PP) and clinical EHRSQL (+5.55 PP).
                                    </span>
                                </li>
                            </ul>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {tags.map(t => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-[11px] font-mono border border-[var(--border-navy)] bg-[var(--surface)] text-[var(--gray)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Telemetry Metrics Column */}
                        <div className="lg:col-span-5 flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3">
                                {metrics.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 sm:p-4 border border-[var(--border-navy)] bg-[var(--surface)]/70 flex flex-col justify-between"
                                    >
                                        <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--gray)]">
                                            {m.label}
                                        </span>
                                        <div className="my-2 flex items-baseline gap-1">
                                            <span className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                                                {m.value}
                                            </span>
                                            {m.unit && (
                                                <span className="font-mono text-xs font-semibold text-[var(--nous-blue)]">
                                                    {m.unit}
                                                </span>
                                            )}
                                        </div>
                                        <span className="font-mono text-[10.5px] text-[var(--gray)] truncate">
                                            {m.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex gap-3 pt-2">
                                <Link
                                    href="/projects/text2sql-llm"
                                    className="flex-1 text-center font-mono text-xs tracking-wider uppercase border border-[var(--nous-blue)] bg-[var(--nous-blue)] text-white hover:bg-[var(--nous-blue)]/80 py-2.5 px-4 transition-all"
                                >
                                    Read Case Study →
                                </Link>
                                <a
                                    href="https://bird-bench.github.io/#:~:text=Jul%2017%2C%202026,59.59"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-wider uppercase border border-[var(--border-navy)] bg-[var(--surface)] hover:border-[var(--mid-light-blue)] text-[var(--text-muted)] hover:text-white py-2.5 px-4 transition-all text-center"
                                >
                                    Verify SOTA ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

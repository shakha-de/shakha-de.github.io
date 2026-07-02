"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function ProjectsPage() {
    const { projects, personalInfo } = portfolioData;
    const [selectedTech, setSelectedTech] = useState("All");

    const uniqueTechs = ["All", ...new Set(projects.flatMap(p => p.content.techStack))].slice(0, 10);

    const filteredProjects = selectedTech === "All"
        ? projects
        : projects.filter(p => p.content.techStack.includes(selectedTech));

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <section className="app-container section-stack w-full">
                        <div className="w-full">
                            <FadeIn delay={0.1}>
                                <div className="eyebrow">Selected Work</div>
                                <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-5">
                                    Selected works.
                                </h1>
                                <p className="lede text-[var(--mid-light-blue)] mb-8">
                                    A collection of projects focusing on microservices, machine learning, and community impact.
                                    Find more on my{" "}
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--nous-blue)] hover:underline font-bold"
                                    >
                                        GitHub
                                    </a>.
                                </p>
                            </FadeIn>

                            {/* Filters */}
                            <FadeIn delay={0.2}>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {uniqueTechs.map((tech) => {
                                        const isActive = tech === selectedTech;
                                        return (
                                            <button
                                                key={tech}
                                                onClick={() => setSelectedTech(tech)}
                                                className={`px-3 py-1 border text-xs font-mono uppercase tracking-wide transition-all ${
                                                    isActive
                                                        ? "bg-[var(--nous-blue)] text-[var(--off-white)] border-[var(--nous-blue)]"
                                                        : "border-[var(--gray-dim)] text-[var(--gray)] hover:border-[var(--nous-blue)] hover:text-[var(--mid-light-blue)] cursor-pointer"
                                                }`}
                                            >
                                                {tech}
                                            </button>
                                        );
                                    })}
                                </div>
                            </FadeIn>

                            {/* Project Rows */}
                            <div className="proj-list mt-8 border-t border-[var(--border-navy)]">
                                {filteredProjects.map((project, i) => {
                                    const indexStr = String(i + 1).padStart(2, "0");
                                    return (
                                        <FadeIn key={`${project.slug}-${selectedTech}`} delay={i * 0.05}>
                                            <Link href={`/projects/${project.slug}`} className="proj-row">
                                                <div className="font-mono text-[13px] text-[var(--gray)] pt-1">
                                                    {indexStr}
                                                </div>
                                                <div>
                                                    <div className="proj-title text-[22px] font-semibold tracking-tight mb-2 text-[var(--text-main)] transition-colors">
                                                        {project.title.replace(" (In Progress)", "")}
                                                        {project.title.includes("(In Progress)") && (
                                                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--nous-blue)] ml-2.5 vertical-align-[3px]">
                                                                In Progress
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-[var(--light-blue)] text-[15px] max-w-[560px] leading-relaxed">
                                                        {project.description}
                                                    </div>
                                                </div>
                                                <div className="hidden md:flex flex-col gap-1.5 font-mono text-xs text-[var(--gray)] pt-1.5">
                                                    {project.content.techStack.slice(0, 3).map((tech) => (
                                                        <span key={tech}>{"// "}{tech}</span>
                                                    ))}
                                                </div>
                                                <div className="hidden md:block proj-arrow font-mono text-[var(--gray)] transition-all text-right pt-1">
                                                    →
                                                </div>
                                            </Link>
                                        </FadeIn>
                                    );
                                })}
                            </div>

                            <FadeIn delay={0.4}>
                                <div className="log-line">
                                    <span>OUTPUT 317</span>
                                    <span className="seed">SEED: 3396188657</span>
                                </div>
                            </FadeIn>
                        </div>
                    </section>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

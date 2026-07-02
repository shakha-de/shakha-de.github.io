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
        <div className="relative flex flex-col min-h-screen overflow-x-clip bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="w-full max-w-5xl">
                        <header className="mb-10 sm:mb-12">
                            <span className="section-kicker">Selected Work</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Selected Works</h1>
                            <p className="text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
                                A collection of projects focusing on microservices, machine learning, and community impact.
                                Find more on my <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">GitHub</a>.
                            </p>
                        </header>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {uniqueTechs.map((tech) => {
                                const isActive = tech === selectedTech;
                                return (
                                    <button
                                        key={tech}
                                        onClick={() => setSelectedTech(tech)}
                                        className={`px-4 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                                            isActive
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                                            : "border-border bg-surface/30 text-text-muted hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 cursor-pointer"
                                        }`}
                                    >
                                        {tech}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, i) => (
                                <FadeIn key={`${project.slug}-${selectedTech}`} delay={i * 0.05}>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="surface-card surface-card-hover group p-6 rounded-2xl flex flex-col h-full cursor-pointer border border-border"
                                    >
                                        <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-105 transition-transform">
                                            <span className="material-symbols-outlined text-xl">terminal</span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-black mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 grow line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-5">
                                            {project.content.techStack.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-[10px] font-mono bg-accent text-text-muted px-2 py-0.5 rounded border border-border/40">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="pt-4 border-t border-border/60 flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                                            View Case Study
                                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>

                    </div>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

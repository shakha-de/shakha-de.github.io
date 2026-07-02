import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { portfolioData } from "../../data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition, FadeIn } from "../../components/Animations";
import { ScrollProgress } from "../../components/ScrollProgress";
import { Mermaid } from "../../components/Mermaid";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: `${project.title} | Projects`,
        description: project.description,
        keywords: [project.title, ...project.content.techStack],
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            url: `https://shakha.online/projects/${project.slug}`,
        },
    };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { projects } = portfolioData;
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const semanticAnalysis = project.content.semanticAnalysis;

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <ScrollProgress />
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <section className="app-container section-stack w-full">
                        <div className="w-full max-w-4xl">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-[var(--nous-blue)] hover:text-[var(--mid-light-blue)] mb-10 font-mono text-sm group"
                            >
                                <span>← Back to Projects</span>
                            </Link>

                            <header className="mb-12">
                                <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-5">
                                    {project.title}
                                </h1>
                                <p className="lede">
                                    {project.description}
                                </p>
                            </header>

                            <div className="flex flex-wrap gap-4 mb-16">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-nous primary"
                                    >
                                        View Source Code ↗
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-nous"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
                                <div className="lg:col-span-2 space-y-10 sm:space-y-12">
                                    <FadeIn>
                                        <section>
                                            <h2 className="text-[22px] font-semibold text-[var(--text-main)] mb-4">
                                                Overview
                                            </h2>
                                            <p className="text-[var(--text-muted)] text-[15px] leading-relaxed">
                                                {project.content.overview}
                                            </p>
                                        </section>
                                    </FadeIn>

                                    {project.content.challenges && (
                                        <FadeIn delay={0.1}>
                                            <section>
                                                <h2 className="text-[22px] font-semibold text-[var(--text-main)] mb-4">
                                                    Key Challenges
                                                </h2>
                                                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed">
                                                    {project.content.challenges}
                                                </p>
                                            </section>
                                        </FadeIn>
                                    )}

                                    {project.content.outcomes && (
                                        <FadeIn delay={0.2}>
                                            <section>
                                                <h2 className="text-[22px] font-semibold text-[var(--text-main)] mb-4">
                                                    Outcomes & Achievements
                                                </h2>
                                                <ul className="space-y-3">
                                                    {project.content.outcomes.map((outcome, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex gap-2.5 text-[var(--text-muted)] text-[15px] items-start"
                                                        >
                                                            <span className="text-[var(--nous-blue)] font-bold">›</span>
                                                            <span>{outcome}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>
                                        </FadeIn>
                                    )}

                                    {project.content.diagram && (
                                        <FadeIn delay={0.3}>
                                            <section>
                                                <h2 className="text-[22px] font-semibold text-[var(--text-main)] mb-4">
                                                    Architecture
                                                </h2>
                                                <div className="p-6 bg-transparent border border-[var(--border)] overflow-x-auto max-w-full">
                                                    <Mermaid chart={project.content.diagram} />
                                                </div>
                                            </section>
                                        </FadeIn>
                                    )}

                                    {semanticAnalysis && (
                                        <FadeIn delay={0.4}>
                                            <section className="mt-12">
                                                <h2 className="text-[22px] font-semibold text-[var(--text-main)] mb-5">
                                                    Semantic Analysis & Thresholds
                                                </h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="p-5 border border-[var(--border-navy)] bg-[var(--deep-navy)]">
                                                        <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-[var(--text-main)]">
                                                            <span className="text-[var(--nous-blue)] font-bold">◉</span>
                                                            {semanticAnalysis.similarityMetric}
                                                        </h3>
                                                        <p className="text-[var(--light-blue)] text-sm leading-relaxed">
                                                            {semanticAnalysis.description}
                                                        </p>
                                                        <div className="mt-4 flex items-center justify-between gap-2 text-[10px] font-mono bg-black/50 p-2 border border-[var(--border)]">
                                                            <span>{semanticAnalysis.scaleMinLabel}</span>
                                                            <div className="h-1.5 w-20 sm:w-24 bg-[var(--gray-dim)] overflow-hidden shrink-0">
                                                                <div className="h-full bg-[var(--nous-blue)] w-full"></div>
                                                            </div>
                                                            <span>{semanticAnalysis.scaleMaxLabel}</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-5 border border-[var(--border-navy)] bg-[var(--deep-navy)]">
                                                        <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-[var(--text-main)]">
                                                            <span className="text-[var(--nous-blue)] font-bold">◉</span>
                                                            Evaluation Logic
                                                        </h3>
                                                        <ul className="space-y-3 text-xs sm:text-sm text-[var(--light-blue)]">
                                                            <li className="flex justify-between border-b border-[var(--border)] pb-1">
                                                                <span>Plagiarism Threshold</span>
                                                                <span className="font-bold text-[var(--text-main)]">{semanticAnalysis.threshold}</span>
                                                            </li>
                                                            <li className="flex justify-between border-b border-[var(--border)] pb-1">
                                                                <span>Min Text Length</span>
                                                                <span className="font-bold text-[var(--text-main)]">{semanticAnalysis.minLength}</span>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <span>Language Model</span>
                                                                <span className="font-bold text-[var(--text-main)]">{semanticAnalysis.model}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </section>
                                        </FadeIn>
                                    )}
                                </div>

                                <aside className="space-y-8 sm:space-y-10 lg:pl-4">
                                    {project.content.metrics && (
                                        <div>
                                            <h3 className="text-[11px] uppercase tracking-[0.12em] font-mono font-bold text-[var(--gray)] mb-4">
                                                Key Metrics
                                            </h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {project.content.metrics.map((metric, i) => (
                                                    <div
                                                        key={i}
                                                        className="p-4 border border-[var(--border)] relative overflow-hidden"
                                                    >
                                                        <p className="text-xs text-[var(--gray)] mb-1 font-medium">
                                                            {metric.label}
                                                        </p>
                                                        <p className="text-lg font-bold text-[var(--nous-blue)] font-mono">
                                                            {metric.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-[11px] uppercase tracking-[0.12em] font-mono font-bold text-[var(--gray)] mb-4">
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.content.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="skill-tag"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <FadeIn delay={0.5}>
                                <div className="log-line">
                                    <span>OUTPUT 512</span>
                                    <span className="seed">SEED: 4830177295</span>
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

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

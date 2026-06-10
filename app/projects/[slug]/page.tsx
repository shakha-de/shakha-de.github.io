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
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <ScrollProgress />
            <Header />
            <main className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="w-full max-w-4xl">
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 text-primary hover:underline mb-10 sm:mb-12 font-medium group"
                        >
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                            Back to Projects
                        </Link>

                        <header className="mb-12">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">{project.title}</h1>
                            <p className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                                {project.description}
                            </p>
                        </header>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-text-main text-background font-bold hover:scale-105 transition-transform"
                                >
                                    View Source Code
                                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border font-bold hover:bg-border/10 hover:scale-105 transition-transform"
                                >
                                    Live Demo
                                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
                            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
                                <FadeIn>
                                    <section>
                                        <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-5 text-text-main">Overview</h2>
                                        <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                                            {project.content.overview}
                                        </p>
                                    </section>
                                </FadeIn>

                                {project.content.challenges && (
                                    <FadeIn delay={0.1}>
                                        <section>
                                            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-5 text-text-main">Key Challenges</h2>
                                            <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                                                {project.content.challenges}
                                            </p>
                                        </section>
                                    </FadeIn>
                                )}

                                {project.content.outcomes && (
                                    <FadeIn delay={0.2}>
                                        <section>
                                            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-5 text-text-main">Outcomes & Achievements</h2>
                                            <ul className="space-y-3">
                                                {project.content.outcomes.map((outcome, i) => (
                                                    <li key={i} className="flex gap-2.5 text-text-muted text-sm sm:text-base items-start">
                                                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 select-none">check_circle</span>
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
                                            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-5 text-text-main">Architecture</h2>
                                            <div className="p-4 sm:p-6 bg-surface/30 backdrop-blur-xs rounded-2xl border border-border overflow-x-auto shadow-sm">
                                                <Mermaid chart={project.content.diagram} />
                                            </div>
                                        </section>
                                    </FadeIn>
                                )}

                                {semanticAnalysis && (
                                    <FadeIn delay={0.4}>
                                        <section className="mt-12">
                                            <h2 className="text-xl sm:text-2xl font-black mb-5 text-text-main">Semantic Analysis & Thresholds</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                                    <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-text-main">
                                                        <span className="material-symbols-outlined text-primary">psychology</span>
                                                        {semanticAnalysis.similarityMetric}
                                                    </h3>
                                                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                                                        {semanticAnalysis.description}
                                                    </p>
                                                    <div className="mt-4 flex items-center justify-between gap-2 text-[10px] font-mono bg-background/50 p-2 rounded border border-border/40">
                                                        <span>{semanticAnalysis.scaleMinLabel}</span>
                                                        <div className="h-1.5 w-20 sm:w-24 bg-border rounded-full overflow-hidden shrink-0">
                                                            <div className="h-full bg-primary w-full"></div>
                                                        </div>
                                                        <span>{semanticAnalysis.scaleMaxLabel}</span>
                                                    </div>
                                                </div>
                                                <div className="p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                                    <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-text-main">
                                                        <span className="material-symbols-outlined text-primary">gavel</span>
                                                        Evaluation Logic
                                                    </h3>
                                                    <ul className="space-y-3 text-xs sm:text-sm text-text-muted">
                                                        <li className="flex justify-between border-b border-border/50 pb-1">
                                                            <span>Plagiarism Threshold</span>
                                                            <span className="font-bold text-text-main">{semanticAnalysis.threshold}</span>
                                                        </li>
                                                        <li className="flex justify-between border-b border-border/50 pb-1">
                                                            <span>Min Text Length</span>
                                                            <span className="font-bold text-text-main">{semanticAnalysis.minLength}</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Language Model</span>
                                                            <span className="font-bold text-text-main">{semanticAnalysis.model}</span>
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
                                        <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-text-muted mb-4">Key Metrics</h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {project.content.metrics.map((metric, i) => (
                                                <div key={i} className="p-4 rounded-xl bg-surface/40 backdrop-blur-xs border border-border relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
                                                    <p className="text-xs text-text-muted mb-1 font-medium">{metric.label}</p>
                                                    <p className="text-lg font-black text-primary font-mono">{metric.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-text-muted mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.content.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3.5 py-1.5 rounded-lg bg-primary/5 border border-primary/25 text-primary text-xs font-mono font-bold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
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

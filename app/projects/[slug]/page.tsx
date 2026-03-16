import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { portfolioData } from "../../data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition, FadeIn } from "../../components/Animations";
import { ScrollProgress } from "../../components/ScrollProgress";
import { Mermaid } from "../../components/Mermaid";

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
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <PageTransition>
                    <div className="w-full max-w-4xl">
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 text-primary hover:underline mb-12 font-medium group"
                        >
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                            Back to Projects
                        </Link>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">
                                {project.description}
                            </p>
                        </header>

                        <div className="flex flex-wrap gap-4 mb-16">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-main text-background font-bold hover:scale-105 transition-transform"
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
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-bold hover:bg-border/10 hover:scale-105 transition-transform"
                                >
                                    Live Demo
                                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-2 space-y-12">
                                <FadeIn>
                                    <section>
                                        <h2 className="text-2xl font-bold mb-6">Overview</h2>
                                        <p className="text-text-muted leading-relaxed text-lg">
                                            {project.content.overview}
                                        </p>
                                    </section>
                                </FadeIn>

                                {project.content.challenges && (
                                    <FadeIn delay={0.1}>
                                        <section>
                                            <h2 className="text-2xl font-bold mb-6">Key Challenges</h2>
                                            <p className="text-text-muted leading-relaxed text-lg">
                                                {project.content.challenges}
                                            </p>
                                        </section>
                                    </FadeIn>
                                )}

                                {project.content.outcomes && (
                                    <FadeIn delay={0.2}>
                                        <section>
                                            <h2 className="text-2xl font-bold mb-6">Outcomes & Achievements</h2>
                                            <ul className="space-y-4">
                                                {project.content.outcomes.map((outcome, i) => (
                                                    <li key={i} className="flex gap-3 text-text-muted text-lg">
                                                        <span className="text-primary font-bold">•</span>
                                                        {outcome}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </FadeIn>
                                )}

                                {project.content.diagram && (
                                    <FadeIn delay={0.3}>
                                        <section>
                                            <h2 className="text-2xl font-bold mb-6">Architecture</h2>
                                            <div className="p-6 bg-border/5 rounded-2xl border border-border/50">
                                                <Mermaid chart={project.content.diagram} />
                                            </div>
                                        </section>
                                    </FadeIn>
                                )}

                                {semanticAnalysis && (
                                    <FadeIn delay={0.4}>
                                        <section className="mt-12">
                                            <h2 className="text-2xl font-bold mb-6">Semantic Analysis & Thresholds</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-primary">psychology</span>
                                                        {semanticAnalysis.similarityMetric}
                                                    </h3>
                                                    <p className="text-text-muted text-sm leading-relaxed">
                                                        {semanticAnalysis.description}
                                                    </p>
                                                    <div className="mt-4 flex items-center justify-between text-xs font-mono bg-background/50 p-2 rounded">
                                                        <span>{semanticAnalysis.scaleMinLabel}</span>
                                                        <div className="h-1.5 w-24 bg-border rounded-full overflow-hidden">
                                                            <div className="h-full bg-primary w-full"></div>
                                                        </div>
                                                        <span>{semanticAnalysis.scaleMaxLabel}</span>
                                                    </div>
                                                </div>
                                                <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-secondary">gavel</span>
                                                        Evaluation Logic
                                                    </h3>
                                                    <ul className="space-y-3 text-sm text-text-muted">
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

                            <aside className="space-y-10">
                                {project.content.metrics && (
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest font-bold text-text-muted mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {project.content.metrics.map((metric, i) => (
                                                <div key={i} className="p-4 rounded-xl bg-border/5 border border-border/50">
                                                    <p className="text-sm text-text-muted mb-1">{metric.label}</p>
                                                    <p className="text-xl font-bold text-primary">{metric.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest font-bold text-text-muted mb-6">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.content.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-bold"
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

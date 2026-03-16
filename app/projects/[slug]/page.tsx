import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { portfolioData } from "../../data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition, FadeIn } from "../../components/Animations";
import { ScrollProgress } from "../../components/ScrollProgress";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { projects } = portfolioData;
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

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
                            </div>
                        </div>

                        <aside className="space-y-10">
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

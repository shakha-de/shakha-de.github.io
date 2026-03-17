import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function ProjectsPage() {
    const { projects, personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="w-full max-w-5xl">
                        <header className="mb-12 sm:mb-16 lg:mb-20">
                            <span className="section-kicker">Selected Work</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Selected Works</h1>
                            <p className="text-text-muted text-base sm:text-lg max-w-2xl">
                                A collection of projects focusing on microservices, machine learning, and community impact.
                                Find more on my <a href={personalInfo.github} className="text-primary hover:underline font-medium">GitHub</a>.
                            </p>
                        </header>

                        <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
                            {["All", ...new Set(projects.flatMap(p => p.content.techStack))].slice(0, 10).map((tech) => (
                                <button
                                    key={tech}
                                    className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium bg-background"
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                            {projects.map((project, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="surface-card surface-card-hover group p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col h-full cursor-pointer"
                                    >
                                        <div className="size-12 sm:size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-3xl">terminal</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 grow">
                                            {project.description}
                                        </p>
                                        <div className="pt-6 border-t border-border flex flex-wrap gap-6 mt-auto">
                                            <div className="flex items-center gap-2 text-sm font-bold text-text-main group-hover:text-primary transition-colors">
                                                View Case Study
                                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>

                    <div className="surface-card mt-16 sm:mt-20 lg:mt-24 p-6 sm:p-8 lg:p-12 rounded-4xl">
                        <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Portfolio Narrative</h2>
                        <p className="text-text-muted text-base sm:text-lg leading-relaxed italic">
                            &quot;{portfolioData.narrative}&quot;
                        </p>
                    </div>
                </div>
            </PageTransition>
        </main>
        <Footer />
    </div>
);
}

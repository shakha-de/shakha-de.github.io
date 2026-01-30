import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function ProjectsPage() {
    const { projects, personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="w-full max-w-5xl">
                    <header className="mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h1>
                        <p className="text-text-muted text-lg max-w-2xl">
                            A collection of projects focusing on microservices, machine learning, and community impact.
                            Find more on my <a href={personalInfo.github} className="text-primary hover:underline font-medium">GitHub</a>.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <div key={i} className="group bg-background rounded-3xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full">
                                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">terminal</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-text-muted leading-relaxed mb-8 grow">
                                    {project.description}
                                </p>
                                <div className="pt-6 border-t border-border flex flex-wrap gap-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors"
                                    >
                                        Source Code
                                        <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors"
                                        >
                                            Live Demo
                                            <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[2rem] bg-surface border border-border">
                        <h2 className="text-2xl font-bold mb-6">Portfolio Narrative</h2>
                        <p className="text-text-muted text-lg leading-relaxed italic">
                            &quot;{portfolioData.narrative}&quot;
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

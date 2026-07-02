import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Link from "next/link";
import { portfolioData } from "./data/portfolio";
import { PageTransition, FadeIn } from "./components/Animations";

export default function Home() {
    const { projects, personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--black)] text-[var(--off-white)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <Hero />

                    <div className="divider w-full" />

                    {/* Featured Projects Section */}
                    <section className="w-full bg-[var(--black)] border-y border-[var(--border-navy)]">
                        <div className="app-container section-stack">
                            <FadeIn delay={0.1}>
                                <div className="eyebrow">Selected Work</div>
                                <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-5">
                                    Selected works.
                                </h2>
                                <p className="lede">
                                    A selection of my recent technical work. Find more on my{" "}
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

                            <div className="proj-list mt-12 border-t border-[var(--border-navy)]">
                                {projects.slice(0, 3).map((project, i) => {
                                    const indexStr = String(i + 1).padStart(2, "0");
                                    return (
                                        <FadeIn key={project.slug} delay={i * 0.1}>
                                            <Link href={`/projects/${project.slug}`} className="proj-row">
                                                <div className="font-mono text-[13px] text-[var(--gray)] pt-1">
                                                    {indexStr}
                                                </div>
                                                <div>
                                                    <div className="proj-title text-[22px] font-semibold tracking-tight mb-2 text-[var(--off-white)] transition-colors">
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
                                <div className="mt-10">
                                    <Link
                                        href="/projects"
                                        className="font-mono text-sm text-[var(--nous-blue)] hover:text-[var(--mid-light-blue)]"
                                    >
                                        View All Projects →
                                    </Link>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
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

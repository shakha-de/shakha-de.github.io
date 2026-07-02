import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function ExperiencePage() {
    const { experience, education } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-clip bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="w-full max-w-4xl">
                        <section className="mb-20">
                            <span className="section-kicker">Career Timeline</span>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 sm:mb-12 text-text-main">
                                Professional Journey
                            </h1>
                            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-8 pb-4">
                                {experience.map((exp, i) => (
                                    <FadeIn key={i} delay={i * 0.1}>
                                        <div className="relative pl-8 md:pl-12 group">
                                            <div className="absolute -left-[9px] top-6 size-4 rounded-full bg-background border-2 border-primary timeline-node shadow-md transition-all duration-300 group-hover:scale-125 group-hover:border-primary/80"></div>
                                            
                                            <div className="surface-card p-6 rounded-2xl border border-border group-hover:border-primary/20 transition-all duration-300">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                                    <h3 className="text-lg sm:text-xl font-black text-text-main group-hover:text-primary transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="text-xs font-mono text-primary font-bold bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg self-start sm:self-auto shrink-0">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-text-muted mb-4 flex flex-wrap items-center gap-1.5">
                                                    <span className="text-text-main font-bold">{exp.company}</span>
                                                    {exp.location && (
                                                        <>
                                                            <span className="text-border">•</span>
                                                            <span className="flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                                                {exp.location}
                                                            </span>
                                                        </>
                                                    )}
                                                </h4>
                                                <p className="text-sm text-text-muted leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 sm:mb-10 text-text-main">
                                Education
                            </h2>
                            <div className="space-y-6 sm:space-y-8">
                                {education.map((edu, i) => (
                                    <FadeIn key={i} delay={0.2}>
                                        <div className="surface-card p-6 sm:p-8 rounded-2xl border border-border">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-black text-text-main">{edu.degree}</h3>
                                                    <p className="text-sm sm:text-base text-primary font-bold mt-0.5">{edu.institution}</p>
                                                </div>
                                                <span className="text-xs font-mono text-text-muted bg-accent border border-border px-3 py-1 rounded-lg self-start">
                                                    {edu.period}
                                                </span>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-border/60">
                                                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-3">Relevant Coursework</h4>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {edu.coursework.map((course, j) => (
                                                        <span key={j} className="text-xs bg-accent/40 text-text-muted px-2.5 py-1 rounded-md border border-border/30">
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>
                    </div>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

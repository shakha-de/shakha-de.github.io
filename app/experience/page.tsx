import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function ExperiencePage() {
    const { experience, education } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="w-full max-w-4xl">
                    <section className="mb-20">
                        <h1 className="text-4xl font-bold tracking-tight mb-12 text-text-main">
                            Professional Journey
                        </h1>
                        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 pb-4">
                            {experience.map((exp, i) => (
                                <div key={i} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-2.25 top-1.5 size-4.5 rounded-full bg-background border-2 border-primary timeline-node shadow-sm"></div>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-text-main">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm font-mono text-primary font-medium bg-primary/5 px-2 py-1 rounded">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-medium text-text-muted mb-3 flex items-center gap-2">
                                        {exp.company}
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
                                    <p className="text-text-muted leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold tracking-tight mb-10 text-text-main">
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-text-main">{edu.degree}</h3>
                                            <p className="text-lg text-primary font-medium">{edu.institution}</p>
                                        </div>
                                        <span className="text-sm font-mono text-text-muted bg-surface px-3 py-1 rounded-md self-start">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-2">Relevant Coursework</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, j) => (
                                                <span key={j} className="text-sm bg-surface text-text-muted px-2 py-1 rounded border border-border">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

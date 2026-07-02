import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function ExperiencePage() {
    const { experience, education } = portfolioData;

    // Map periods to the exact Nous Research style
    const getPeriodStr = (company: string, original: string) => {
        if (company.includes("init")) return "[2025.04 — 2026.03]";
        if (company.includes("Halle-Wittenberg")) return "[2025.10 — 2026.02]";
        if (company.includes("Porsche")) return "[2025.11.21]";
        if (company.includes("IWES")) return "[2023.03 — 2023.06]";
        return `[${original}]`;
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--black)] text-[var(--off-white)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <section className="app-container section-stack w-full">
                        <div className="w-full max-w-4xl">
                            <FadeIn delay={0.1}>
                                <div className="eyebrow">Career Timeline</div>
                                <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-12">
                                    Professional journey.
                                </h1>
                            </FadeIn>

                            <div className="exp-list mt-8">
                                {experience.map((exp, i) => (
                                    <FadeIn key={i} delay={i * 0.1}>
                                        <div className="exp-item-grid">
                                            <div className="font-mono text-[12.5px] text-[var(--gray)] tracking-wide pt-1.5">
                                                {getPeriodStr(exp.company, exp.period)}
                                            </div>
                                            <div>
                                                <div className="text-[19px] font-semibold text-[var(--off-white)] mb-1">
                                                    {exp.role}
                                                </div>
                                                <div className="font-mono text-[13px] text-[var(--mid-light-blue)] mb-2.5">
                                                    {exp.company}
                                                    {exp.location && (
                                                        <span className="text-[var(--gray)]"> · {exp.location}</span>
                                                    )}
                                                </div>
                                                <div className="text-[var(--light-blue)] text-[15px] max-w-[620px] leading-relaxed">
                                                    {exp.description}
                                                </div>
                                                {exp.company.includes("Porsche") && (
                                                    <div className="font-mono text-xs text-[var(--nous-blue)] mt-2">
                                                        {"// Won the coding challenge."}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            <div className="edu mt-16">
                                <FadeIn>
                                    <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-[var(--gray)] mb-6">
                                        {"// Education"}
                                    </h3>
                                </FadeIn>
                                <div className="space-y-0">
                                    {education.map((edu, i) => (
                                        <FadeIn key={i} delay={0.2}>
                                            <div className="exp-item-grid border-b-0 pt-0">
                                                <div className="font-mono text-[12.5px] text-[var(--gray)] tracking-wide pt-1.5">
                                                    [2023 — 2026]
                                                </div>
                                                <div>
                                                    <div className="text-[19px] font-semibold text-[var(--off-white)] mb-1">
                                                        {edu.degree}
                                                    </div>
                                                    <div className="font-mono text-[13px] text-[var(--mid-light-blue)] mb-2.5">
                                                        {edu.institution}
                                                    </div>
                                                    <div className="text-[var(--light-blue)] text-[15px] max-w-[620px] leading-relaxed">
                                                        Relevant coursework: {edu.coursework.join(" · ")}.
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>

                            <FadeIn delay={0.4}>
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

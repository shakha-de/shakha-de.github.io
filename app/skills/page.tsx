import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function SkillsPage() {
    const { skills, awards } = portfolioData;

    const categories = [
        { name: "Backend", items: skills.backend },
        { name: "Infrastructure", items: skills.infrastructure },
        { name: "Tools", items: skills.tools },
        { name: "Frontend", items: skills.frontend },
        { name: "Data Science", items: skills.data_science },
        { name: "Systems", items: skills.systems },
    ];

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <section className="app-container section-stack w-full">
                        <div className="w-full max-w-4xl">
                            <FadeIn delay={0.1}>
                                <div className="eyebrow">Technical Profile</div>
                                <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-12">
                                    Technical expertise.
                                </h1>
                            </FadeIn>

                            {/* Featured Skills */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                {categories.slice(0, 2).map((cat, i) => (
                                    <FadeIn key={i} delay={i * 0.08}>
                                        <div className="pillar-card">
                                            <div className="sg-head flex items-center gap-2 mb-5">
                                                <span className="font-mono text-xs text-[var(--nous-blue)] font-bold">
                                                    0{i + 1}.
                                                </span>
                                                <span className="sg-title font-mono text-xs tracking-[0.12em] uppercase text-[var(--text-main)]">
                                                    {cat.name}
                                                </span>
                                            </div>
                                            <div className="tag-row flex flex-wrap gap-2.5">
                                                {cat.items.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="skill-tag text-[13.5px] px-3 py-1.5"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            {/* Secondary Skills */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                {categories.slice(2).map((cat, i) => (
                                    <FadeIn key={i} delay={(i + 2) * 0.08}>
                                        <div className="p-5 border border-[var(--border-navy)] h-full">
                                            <div className="sg-head flex items-center gap-2 mb-4">
                                                <span className="font-mono text-xs text-[var(--nous-blue)] font-bold">
                                                    0{i + 3}.
                                                </span>
                                                <span className="sg-title font-mono text-xs tracking-[0.12em] uppercase text-[var(--text-main)]">
                                                    {cat.name}
                                                </span>
                                            </div>
                                            <div className="tag-row flex flex-wrap gap-2">
                                                {cat.items.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="skill-tag"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            <div className="honors mt-[72px] border-t border-[var(--border)] pt-12">
                                <FadeIn>
                                    <div className="eyebrow" style={{ marginBottom: "24px" }}>
                                        Honors & Recognition
                                    </div>
                                </FadeIn>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {awards.map((award, i) => (
                                        <FadeIn key={i} delay={0.3 + i * 0.1}>
                                            <div className="achievement-card">
                                                <span className="font-mono text-[var(--nous-blue)] font-bold text-sm select-none shrink-0 mt-0.5">
                                                    ›
                                                </span>
                                                <span className="text-[var(--text-muted)] text-[15px] leading-relaxed">
                                                    {award}
                                                </span>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

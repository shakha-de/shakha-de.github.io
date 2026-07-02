import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function SkillsPage() {
    const { skills, awards } = portfolioData;

    const categories = [
        { name: "Backend", icon: "⌬", items: skills.backend },
        { name: "Infrastructure", icon: "☁", items: skills.infrastructure },
        { name: "Tools", icon: "⟨⟩", items: skills.tools },
        { name: "Frontend", icon: "▢", items: skills.frontend },
        { name: "Data Science", icon: "∿", items: skills.data_science },
        { name: "Systems", icon: "⌗", items: skills.systems },
    ];

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--black)] text-[var(--off-white)]">
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

                            <div className="skill-grid grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-20 mt-12">
                                {categories.map((cat, i) => (
                                    <FadeIn key={i} delay={i * 0.08}>
                                        <div className="skill-group">
                                            <div className="sg-head flex items-center gap-2.5 mb-[18px]">
                                                <span className="sg-icon font-mono text-[var(--nous-blue)] text-[13px]">
                                                    {cat.icon}
                                                </span>
                                                <span className="sg-title font-mono text-xs tracking-[0.12em] uppercase text-[var(--off-white)]">
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
                                <div className="space-y-0">
                                    {awards.map((award, i) => (
                                        <FadeIn key={i} delay={0.3 + i * 0.1}>
                                            <div className="h-item flex gap-5 py-[18px] border-b border-[var(--border)] items-start">
                                                <span className="h-trophy font-mono text-[var(--nous-blue)]">
                                                    ◇
                                                </span>
                                                <span className="h-text text-[#c9ccd1] text-[15px]">
                                                    {award}
                                                </span>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>

                            <FadeIn delay={0.6}>
                                <div className="log-line">
                                    <span>OUTPUT 404</span>
                                    <span className="seed">SEED: 4119827043</span>
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

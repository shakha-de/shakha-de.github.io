import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function SkillsPage() {
    const { skills, awards } = portfolioData;

    const categories = [
        { name: "Backend", icon: "dns", items: skills.backend },
        { name: "Infrastructure", icon: "cloud", items: skills.infrastructure },
        { name: "Tools", icon: "terminal", items: skills.tools },
        { name: "Frontend", icon: "web", items: skills.frontend },
        { name: "Data Science", icon: "analytics", items: skills.data_science },
        { name: "Systems", icon: "settings_input_component", items: skills.systems },
    ];

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="w-full max-w-4xl">
                        <span className="section-kicker">Technical Profile</span>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">Technical Expertise</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
                            {categories.map((cat, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="surface-card surface-card-hover flex flex-col gap-5 p-6 sm:p-8 rounded-2xl h-full border border-border">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                                            </div>
                                            <h3 className="font-black text-base sm:text-lg text-text-main">{cat.name}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cat.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 bg-accent/40 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-200 text-[11px] text-text-main font-mono border border-border/50 rounded-lg cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <div className="mb-16 sm:mb-20">
                            <h2 className="text-lg sm:text-xl font-black mb-6">All Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.all.map((skill, i) => (
                                    <FadeIn key={i} delay={0.3 + i * 0.02}>
                                        <span className="px-3.5 py-1.5 bg-primary/5 text-primary border border-primary/20 hover:border-primary/45 rounded-full text-xs font-bold transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        <div>
                            <FadeIn>
                                <h2 className="text-lg sm:text-xl font-black mb-6">Honors & Recognition</h2>
                            </FadeIn>
                            <div className="space-y-4">
                                {awards.map((award, i) => (
                                    <FadeIn key={i} delay={0.5 + i * 0.1}>
                                        <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl text-text-main border border-amber-500/20 bg-amber-500/5 shadow-sm relative overflow-hidden group hover:border-amber-500/35 transition-colors">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl"></div>
                                            <span className="material-symbols-outlined text-amber-500 mt-0.5 group-hover:scale-110 transition-transform">emoji_events</span>
                                            <p className="font-medium text-sm sm:text-base relative z-10">{award}</p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
                            {categories.map((cat, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="surface-card surface-card-hover flex flex-col gap-5 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">{cat.icon}</span>
                                            </div>
                                            <h3 className="font-bold text-lg sm:text-xl">{cat.name}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3.5 sm:px-4 py-2 bg-surface text-text-main text-sm font-mono border border-border rounded-lg"
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
                            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">All Skills</h2>
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {skills.all.map((skill, i) => (
                                    <FadeIn key={i} delay={0.3 + i * 0.05}>
                                        <span className="px-4 sm:px-5 py-2.5 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-bold">
                                            {skill}
                                        </span>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        <div>
                            <FadeIn>
                                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Honors & Recognition</h2>
                            </FadeIn>
                            <div className="space-y-4">
                                {awards.map((award, i) => (
                                    <FadeIn key={i} delay={0.5 + i * 0.1}>
                                        <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl text-text-main border border-yellow-500/20 bg-yellow-500/5 shadow-sm">
                                            <span className="material-symbols-outlined text-yellow-500 mt-0.5">emoji_events</span>
                                            <p className="font-medium">{award}</p>
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

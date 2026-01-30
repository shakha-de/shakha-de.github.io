import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

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
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="w-full max-w-4xl">
                    <h1 className="text-4xl font-bold mb-12">Technical Expertise</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-background border border-border shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{cat.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-xl">{cat.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-surface text-text-main text-sm font-mono border border-border rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-20">
                        <h2 className="text-2xl font-bold mb-8">All Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.all.map((skill, i) => (
                                <span key={i} className="px-5 py-2.5 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-bold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-8">Honors & Recognition</h2>
                        <div className="space-y-4">
                            {awards.map((award, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 text-text-main">
                                    <span className="material-symbols-outlined text-yellow-500 mt-0.5">emoji_events</span>
                                    <p className="font-medium">{award}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

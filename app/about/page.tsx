import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function AboutPage() {
    const { about } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full app-container section-stack">
                <PageTransition>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 w-full">
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <div className="flex flex-col gap-4 mb-8 md:mb-10">
                                <span className="section-kicker">Professional Narrative</span>
                                <FadeIn>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-text-main leading-tight">
                                        {about.headline}
                                    </h1>
                                </FadeIn>
                            </div>
                            <div className="prose prose-lg max-w-none text-text-muted leading-relaxed mb-10 md:mb-12">
                                {about.paragraphs.map((p, i) => (
                                    <FadeIn key={i} delay={0.1 + i * 0.1}>
                                        <p className="mb-5 last:mb-0 text-base sm:text-lg md:text-xl">
                                            {p}
                                        </p>
                                    </FadeIn>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                {about.highlights?.map((item, i) => (
                                    <FadeIn key={i} delay={0.4 + i * 0.1}>
                                        <div className="surface-card surface-card-hover flex flex-col gap-3 p-5 sm:p-6 rounded-2xl group h-full">
                                            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                            <h4 className="font-bold text-text-main">{item.title}</h4>
                                            <p className="text-sm text-text-muted leading-snug">{item.description}</p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                            <FadeIn delay={0.2}>
                                <div className="surface-card w-full h-56 sm:h-64 overflow-hidden relative group">
                                    <iframe
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=11.838455200195314%2C51.42858079624508%2C12.100067138671877%2C51.53696147429189&amp;layer=mapnik"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        className="grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                                    ></iframe>
                                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md pointer-events-none">
                                        <div className="flex items-center gap-2 text-sm font-bold text-text-main">
                                            <span className="material-symbols-outlined text-[18px] text-primary">
                                                location_on
                                            </span>
                                            Halle (Saale), Germany
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 md:mb-8">
                                {about.stats.map((stat, i) => (
                                    <FadeIn key={i} delay={0.3 + i * 0.1}>
                                        <div className="surface-card p-5 sm:p-6 rounded-2xl">
                                            <p className="text-text-muted text-sm font-medium">{stat.label}</p>
                                            <p className="text-3xl sm:text-4xl font-bold text-text-main mt-2 font-mono">
                                                {stat.value}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            <FadeIn delay={0.5}>
                                <div className="p-6 sm:p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
                                    <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined">translate</span>
                                        Languages
                                    </h3>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:gap-x-8">
                                        {portfolioData.personalInfo.languages.map((lang, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-xs font-bold uppercase opacity-70 tracking-widest">{lang.language}</span>
                                                <span className="text-lg font-black">{lang.proficiency}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

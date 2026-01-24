import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function AboutPage() {
    const { about } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main transition-colors duration-300">
            <Header />
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
                    <div className="md:col-span-7 flex flex-col justify-center">
                        <div className="flex flex-col gap-4 mb-10">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Professional Narrative</span>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-text-main leading-tight">
                                {about.headline}
                            </h1>
                        </div>
                        <div className="prose prose-lg text-text-muted leading-relaxed mb-12">
                            {about.paragraphs.map((p, i) => (
                                <p key={i} className="mb-6 last:mb-0 text-lg md:text-xl">
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {about.highlights?.map((item, i) => (
                                <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border-light dark:border-zinc-800 shadow-sm transition-all hover:border-primary/30 group">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <h4 className="font-bold text-text-main">{item.title}</h4>
                                    <p className="text-sm text-text-muted leading-snug">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-8">
                        <div className="w-full h-64 bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative border border-border-light dark:border-zinc-700 group">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=11.838455200195314%2C51.42858079624508%2C12.100067138671877%2C51.53696147429189&amp;layer=mapnik"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                className="grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md pointer-events-none">
                                <div className="flex items-center gap-2 text-sm font-bold text-text-main">
                                    <span className="material-symbols-outlined text-[18px] text-primary">
                                        location_on
                                    </span>
                                    Halle (Saale), Germany
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {about.stats.map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-border-light dark:border-zinc-700">
                                    <p className="text-text-muted text-sm font-medium">{stat.label}</p>
                                    <p className="text-4xl font-bold text-text-main mt-2 font-mono">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-3xl bg-primary shadow-xl shadow-primary/20 text-white">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">translate</span>
                                Languages
                            </h3>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {portfolioData.personalInfo.languages.map((lang, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-xs font-bold uppercase opacity-70 tracking-widest">{lang.language}</span>
                                        <span className="text-lg font-black">{lang.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

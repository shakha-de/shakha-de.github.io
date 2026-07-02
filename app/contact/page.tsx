import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function ContactPage() {
    const { personalInfo } = portfolioData;

    const contactMethods = [
        {
            label: "Email",
            value: "kadamboev.sh@gmail.com",
            icon: "mail",
            link: "mailto:kadamboev.sh@gmail.com"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/shakhade",
            icon: "link",
            link: "https://linkedin.com/in/shakhade"
        },
        {
            label: "GitHub",
            value: "github.com/shakha-de",
            icon: "code",
            link: "https://github.com/shakha-de"
        },
    ];

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-clip bg-background text-text-main transition-colors duration-300">
            <Header />
            <main id="content" className="grow flex flex-col items-center justify-center w-full app-container section-stack">
                <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div>
                        <span className="section-kicker">Get In Touch</span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5 sm:mb-6 leading-tight">
                            Let&apos;s build something <span className="text-gradient">Reliable</span> together.
                        </h1>
                        <p className="text-text-muted text-sm sm:text-base mb-8 sm:mb-10 max-w-md">
                            I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-3">
                            {contactMethods.map((method, i) => (
                                <a
                                    key={i}
                                    href={method.link}
                                    className="flex items-center gap-4 text-text-main hover:text-primary transition-all group rounded-xl p-3 border border-transparent hover:border-border hover:bg-surface/40 backdrop-blur-xs duration-200"
                                    target={method.link.startsWith("http") ? "_blank" : undefined}
                                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    <div className="size-11 sm:size-12 bg-accent rounded-xl flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all shrink-0">
                                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">{method.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted mb-0.5">{method.label}</p>
                                        <p className="text-sm sm:text-base font-bold break-all sm:break-normal">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="surface-card relative p-6 sm:p-8 rounded-2xl border border-border overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-black mb-5">Current Location</h3>
                            <div className="flex items-center gap-3 text-base font-bold text-text-main mb-6">
                                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                Halle (Saale), Germany
                            </div>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                Currently studying at Martin Luther University Halle-Wittenberg and open to relocation for the right opportunity, especially in the automotive sector.
                            </p>
                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    {personalInfo.languages.map((lang, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[10px] font-mono font-bold uppercase text-text-muted tracking-wider">{lang.language}</span>
                                            <span className="text-xs sm:text-sm font-extrabold text-primary">{lang.proficiency}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

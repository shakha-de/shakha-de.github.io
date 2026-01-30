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
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main className="grow flex flex-col items-center justify-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl font-black tracking-tight mb-6">
                            Let&apos;s build something <span className="text-primary">Reliable</span> together.
                        </h1>
                        <p className="text-text-muted text-xl mb-12 max-w-lg">
                            I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6">
                            {contactMethods.map((method, i) => (
                                <a
                                    key={i}
                                    href={method.link}
                                    className="flex items-center gap-4 text-text-main hover:text-primary transition-all group"
                                    target={method.link.startsWith("http") ? "_blank" : undefined}
                                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    <div className="size-14 bg-surface rounded-2xl flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">{method.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-0.5">{method.label}</p>
                                        <p className="text-lg font-bold">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative p-12 rounded-[2.5rem] bg-surface border border-border overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Current Location</h3>
                            <div className="flex items-center gap-3 text-lg font-medium text-text-main mb-8">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                Halle (Saale), Germany
                            </div>
                            <p className="text-text-muted leading-relaxed">
                                Currently studying at Martin Luther University Halle-Wittenberg and open to relocation for the right opportunity, especially in the automotive sector.
                            </p>
                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="flex gap-4">
                                    {personalInfo.languages.map((lang, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase text-text-muted">{lang.language}</span>
                                            <span className="text-sm font-bold text-primary">{lang.proficiency}</span>
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

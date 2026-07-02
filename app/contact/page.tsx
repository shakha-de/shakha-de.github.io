import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { FadeIn } from "../components/Animations";

export default function ContactPage() {
    const { personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <section className="app-container section-stack w-full">
                    <div className="w-full max-w-4xl">
                        <FadeIn delay={0.1}>
                            <div className="eyebrow">Get In Touch</div>
                            <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[880px]">
                                Let&apos;s build something<br />reliable together.
                            </h2>
                            <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] text-[var(--text-muted)] mb-12">
                                Currently open to new opportunities and collaborations. Studying at Martin Luther University Halle-Wittenberg and open to relocation for the right opportunity.
                            </p>
                        </FadeIn>

                        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14 max-w-[1080px]">
                            <FadeIn delay={0.2}>
                                <div className="contact-channels flex flex-col gap-5">
                                    <a
                                        className="channel-link"
                                        href={`mailto:${personalInfo.email}`}
                                    >
                                        <span className="text-[var(--nous-blue)] w-[18px]">✉</span>
                                        <span className="text-[var(--text-main)]">{personalInfo.email}</span>
                                    </a>
                                    <a
                                        className="channel-link"
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[var(--nous-blue)] w-[18px]">↗</span>
                                        <span className="text-[var(--text-main)]">linkedin.com/in/shakhade</span>
                                    </a>
                                    <a
                                        className="channel-link"
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[var(--nous-blue)] w-[18px]">⟨⟩</span>
                                        <span className="text-[var(--text-main)]">github.com/shakha-de</span>
                                    </a>
                                    <div className="channel-link cursor-default">
                                        <span className="text-[var(--nous-blue)] w-[18px]">◉</span>
                                        <span className="text-[var(--text-main)]">Halle (Saale), Germany</span>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div>
                                    <div className="sg-title font-mono text-xs tracking-[0.12em] uppercase text-[var(--text-main)] mb-[18px]">
                                        {"// Languages"}
                                    </div>
                                    <div className="langs font-mono text-[13px] text-[var(--text-muted)] leading-[2.1]">
                                        {personalInfo.languages.map((lang, idx) => (
                                            <span key={lang.language}>
                                                <strong className="text-[var(--text-main)] font-normal">{lang.language}</strong> — {lang.proficiency}
                                                {idx < personalInfo.languages.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.4}>
                            <div className="log-line">
                                <span>OUTPUT 640</span>
                                <span className="seed">SEED: 5566120988</span>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

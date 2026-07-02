import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { PageTransition, FadeIn } from "../components/Animations";

export default function AboutPage() {
    const { about } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--background)] text-[var(--text-main)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <PageTransition>
                    <section className="app-container section-stack w-full">
                        <div className="w-full">
                            <FadeIn delay={0.1}>
                                <div className="eyebrow">Commitment to Development</div>
                                <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-8">
                                    {about.headline}
                                </h1>
                            </FadeIn>

                            <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
                                <FadeIn delay={0.2}>
                                    <Image
                                        src="/me.jpg"
                                        alt="Shakhriyor Kadamboev"
                                        width={400}
                                        height={400}
                                        className="w-full max-w-[320px] grayscale hover:grayscale-0 transition-all duration-500 border border-[var(--border-navy)] object-cover"
                                    />
                                </FadeIn>
                                <div className="flex-1">
                                {about.paragraphs.map((p, i) => {
                                    // Highlight the last sentence of first paragraph in italic serif style
                                    if (i === 0) {
                                        const splitIndex = p.indexOf("designing APIs");
                                        if (splitIndex !== -1) {
                                            const normalPart = p.substring(0, splitIndex);
                                            const italicPart = p.substring(splitIndex);
                                            return (
                                                <FadeIn key={i} delay={0.2 + i * 0.1}>
                                                    <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                                                        {normalPart}
                                                        <span className="serif text-[var(--light-blue)]">
                                                            {italicPart}
                                                        </span>
                                                    </p>
                                                </FadeIn>
                                            );
                                        }
                                    }
                                    return (
                                        <FadeIn key={i} delay={0.2 + i * 0.1}>
                                            <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                                                {p}
                                            </p>
                                        </FadeIn>
                                    );
                                })}
                                </div>
                            </div>

                            <div className="divider w-full my-12" />

                            <div className="pillars grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-[980px]">
                                {about.highlights?.map((item, i) => (
                                    <FadeIn key={i} delay={0.4 + i * 0.1}>
                                        <div className="flex flex-col">
                                            <div className="pillar-key">
                                                {"// 0"}{i + 1}{" — "}{item.title}
                                            </div>
                                            <h3 className="text-[20px] font-semibold tracking-tight mb-2">
                                                {item.title === "Efficiency" && "Minimalist architectures"}
                                                {item.title === "Reliability" && "Secure by default"}
                                                {item.title === "Data-Driven" && "Intelligent pipelines"}
                                            </h3>
                                            <p className="text-[var(--gray)] text-[15px] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            <div className="meta-grid mt-16 pt-12 border-t border-[var(--border)] max-w-[980px]">
                                {about.stats.map((stat, i) => (
                                    <FadeIn key={i} delay={0.5 + i * 0.1}>
                                        <div>
                                            <div className="k font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--gray)] mb-2">
                                                {stat.label}
                                            </div>
                                            <div className="v font-mono text-[22px] text-[var(--text-main)]">
                                                {stat.value}
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                                <FadeIn delay={0.7}>
                                    <div>
                                        <div className="k font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--gray)] mb-2">
                                            Location
                                        </div>
                                        <div className="v font-mono text-[22px] text-[var(--text-main)]">
                                            Halle (Saale), DE
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            <FadeIn delay={0.8}>
                                <div className="log-line">
                                    <span>OUTPUT 288</span>
                                    <span className="seed">SEED: 2226809351</span>
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

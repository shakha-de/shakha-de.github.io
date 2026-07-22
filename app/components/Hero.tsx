import Link from "next/link";
import { portfolioData } from "../data/portfolio";
import { FadeIn } from "./Animations";

export default function Hero() {
    const { hero, personalInfo } = portfolioData;

    return (
        <section
            id="home"
            className="app-container section-stack w-full min-h-screen flex flex-col justify-center pt-[140px]"
        >
            <div className="flex flex-col gap-6 text-left max-w-[800px] w-full grow justify-center">
                <FadeIn delay={0.2}>
                    <h1 className="font-heading text-[clamp(36px,5vw,76px)] font-bold leading-[1.02] mb-2">
                        Engineering<br />
                        Reliable <span className="text-[var(--nous-blue)]">Systems</span><span className="cursor-blink" />
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="lede">
                        {hero.subheadline}
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex gap-4 flex-wrap mt-4">
                        <Link
                            href="/projects"
                            className="btn-nous primary"
                        >
                            ⟨⟩ View Projects
                        </Link>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-nous"
                        >
                            ↗ LinkedIn
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Status & Log Bar */}
            <FadeIn delay={0.6}>
                <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                    <div className="log-line !mt-0">
                        <span>OUTPUT 96</span>
                        <span className="seed">SEED: 3573860127</span>
                    </div>
                    <div className="status-row flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.08em] text-[var(--gray)]">
                        <span className="status-dot"></span>
                        System Status: Available For Hire · Halle (Saale), DE
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

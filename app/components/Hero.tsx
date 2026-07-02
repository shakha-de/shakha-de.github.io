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
            <div className="flex flex-col gap-6 text-left">

                <FadeIn delay={0.2}>
                    <h1 className="font-heading text-[clamp(40px,7vw,96px)] font-bold leading-[1.02] mb-6">
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
                    <div className="flex gap-4 flex-wrap mt-9">
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

                <FadeIn delay={0.5}>
                    <div className="status-row mt-14 flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.08em] text-[var(--gray)]">
                        <span className="status-dot"></span>
                        System Status: Available For Hire · Halle (Saale), DE
                    </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="log-line">
                        <span>OUTPUT 96</span>
                        <span className="seed">SEED: 3573860127</span>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

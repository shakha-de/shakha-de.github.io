import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "../data/portfolio";
import { FadeIn } from "./Animations";

export default function Hero() {
    const { hero, personalInfo } = portfolioData;

    return (
        <section
            id="home"
            className="app-container section-stack w-full min-h-screen flex flex-col justify-center pt-[140px]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full grow justify-center">
                <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
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

                {/* Retro Risograph Card */}
                <div className="lg:col-span-5 hidden lg:flex justify-end">
                    <FadeIn delay={0.5}>
                        <div className="p-3 border border-[var(--border-navy)] bg-[var(--deep-navy)]/30 backdrop-blur-sm max-w-[320px]">
                            <div className="relative aspect-[3/4] w-[290px] overflow-hidden border border-[var(--border-navy)]">
                                <Image
                                    src="/uzbekistan-kalta-minor.png"
                                    alt="Kalta Minor Minaret, Khiva, Uzbekistan"
                                    fill
                                    sizes="290px"
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[var(--gray)]">
                                <span>[FIG. 01] KALTA MINOR</span>
                                <span>41.378° N, 60.364° E</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <FadeIn delay={0.6}>
                <div className="mt-16 pt-8 border-t border-[var(--border)] flex justify-between items-center gap-4 w-full">
                    <div className="status-row flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.08em] text-[var(--gray)]">
                        <span className="status-dot"></span>
                        Available For Hire · Halle (Saale), DE
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

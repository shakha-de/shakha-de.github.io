import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
    const { hero, personalInfo } = portfolioData;

    return (
        <section
            id="home"
            className="app-container section-stack w-full"
        >
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">

                <div className="flex-1 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <span className="section-kicker">Portfolio Overview</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-text-main">
                            {hero.headline.split(' ').slice(0, 1).join(' ')} <br />
                            <span className="text-gradient font-extrabold">{hero.headline.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-text-muted font-normal max-w-lg mx-auto md:mx-0 mt-1">
                            {hero.subheadline}
                        </p>
                    </div>
                    <div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 mt-2 max-w-lg">
                        <Link
                            href="/projects"
                            className="flex w-full sm:w-auto items-center justify-center h-11 px-5 rounded-xl bg-primary text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 active:translate-y-0"
                        >
                            <span className="material-symbols-outlined text-[18px] mr-1.5">
                                code
                            </span>
                            View Projects
                        </Link>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full sm:w-auto items-center justify-center h-11 px-5 rounded-xl border border-border bg-surface/40 backdrop-blur-sm text-text-main text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-surface active:translate-y-0"
                        >
                            <span className="material-symbols-outlined text-[18px] mr-1.5">
                                link
                            </span>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex-1 w-full flex justify-center md:justify-end relative overflow-hidden py-4 px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-radial from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
                    
                    <div className="absolute -top-4 -left-4 w-24 h-24 text-primary/10 hidden sm:block -z-10">
                        <svg width="100%" height="100%" fill="currentColor">
                            <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                        </svg>
                    </div>

                    <div className="relative group p-1.5 rounded-3xl border border-border bg-surface/30 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 rotate-2">
                        <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-[1.25rem] overflow-hidden bg-surface">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("/me.jpg")' }}
                            >
                            </div>
                        </div>
                        <div className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none group-hover:border-primary/40 transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

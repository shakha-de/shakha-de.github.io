import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
    const { hero, personalInfo } = portfolioData;

    return (
        <section
            id="home"
            className="w-full px-4 md:px-10 lg:px-40 py-16 md:py-24 max-w-360"
        >
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

                <div className="flex-1 flex flex-col items-start gap-6 text-left">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main">
                            {hero.headline.split(' ').slice(0, 1).join(' ')} <br />
                            <span className="text-primary">{hero.headline.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-muted font-normal max-w-lg mt-2">
                            {hero.subheadline}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                        <Link
                            href="/projects"
                            className="flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-[20px] mr-2">
                                code
                            </span>
                            View Projects
                        </Link>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-12 px-6 rounded-lg border border-border bg-background text-text-main text-base font-bold transition-all hover:bg-surface"
                        >
                            <span className="material-symbols-outlined text-[20px] mr-2">
                                link
                            </span>
                            LinkedIn
                        </a>
                    </div>
                </div>


                <div className="flex-1 w-full flex justify-center md:justify-end relative">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-primary/5 to-primary/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 hidden md:block"></div>


                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500 border-4 border-background bg-surface">

                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("/me.jpg")' }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

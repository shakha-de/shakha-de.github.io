import { portfolioData } from "../data/portfolio";

export default function Footer() {
    const { personalInfo } = portfolioData;

    return (
        <footer className="bg-[var(--dark-blue)] py-20 px-8 mt-20 border-t border-[var(--border)]">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-center gap-3.5 mb-2">
                    <svg width="30" height="30" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                        <circle cx="13" cy="13" r="4.2" fill="#0071a9"/>
                        <g stroke="#0071a9" strokeWidth="1.4" strokeLinecap="round">
                            <line x1="13" y1="2" x2="13" y2="6"/><line x1="13" y1="20" x2="13" y2="24"/>
                            <line x1="2" y1="13" x2="6" y2="13"/><line x1="20" y1="13" x2="24" y2="13"/>
                            <line x1="5.2" y1="5.2" x2="8" y2="8"/><line x1="18" y1="18" x2="20.8" y2="20.8"/>
                            <line x1="20.8" y1="5.2" x2="18" y2="8"/><line x1="8" y1="18" x2="5.2" y2="20.8"/>
                        </g>
                    </svg>
                    <span className="text-[22px] font-bold tracking-wide text-[var(--off-white)]">SKadamboev.</span>
                </div>
                <div className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--light-blue)] mb-12">
                    The Backend Engineer
                </div>

                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--mid-light-blue)] mb-5">
                    Nodes
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3.5 font-mono text-sm mb-16 text-[var(--light-blue)]">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--off-white)]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--off-white)]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>LinkedIn
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="transition-colors hover:text-[var(--off-white)]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>Email
                    </a>
                    <span className="cursor-default text-[var(--gray)]">
                        <span className="text-[var(--nous-blue)]">→ </span>Halle (Saale), DE
                    </span>
                </div>

                <div className="flex justify-between flex-wrap gap-4 font-mono text-[11.5px] text-[var(--mid-light-blue)] border-t border-[#13405a] pt-6">
                    <span>© {new Date().getFullYear()} Shakhriyor Kadamboev. All rights reserved.</span>
                    <span>Built in the spirit of open systems · v1.0</span>
                </div>
            </div>
        </footer>
    );
}

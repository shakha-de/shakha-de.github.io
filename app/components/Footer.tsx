import { portfolioData } from "../data/portfolio";
import packageInfo from "../../package.json";

export default function Footer() {
    const { personalInfo } = portfolioData;

    return (
        <footer className="bg-[var(--dark-blue)] py-8 px-8 mt-8 border-t border-[var(--border)]">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-center gap-3 mb-1">
                    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                        <circle cx="13" cy="13" r="4.2" fill="#0071a9"/>
                        <g stroke="#0071a9" strokeWidth="1.4" strokeLinecap="round">
                            <line x1="13" y1="2" x2="13" y2="6"/><line x1="13" y1="20" x2="13" y2="24"/>
                            <line x1="2" y1="13" x2="6" y2="13"/><line x1="20" y1="13" x2="24" y2="13"/>
                            <line x1="5.2" y1="5.2" x2="8" y2="8"/><line x1="18" y1="18" x2="20.8" y2="20.8"/>
                            <line x1="20.8" y1="5.2" x2="18" y2="8"/><line x1="8" y1="18" x2="5.2" y2="20.8"/>
                        </g>
                    </svg>
                    <span className="text-base font-bold tracking-wide text-[#fbfcfe]">SKadamboev.</span>
                </div>
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#bcd7e5] mb-4">
                    The Backend Engineer
                </div>

                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#83b2ce] mb-2">
                    Nodes
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs mb-6 text-[#bcd7e5]">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#fbfcfe]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#fbfcfe]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>LinkedIn
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="transition-colors hover:text-[#fbfcfe]"
                    >
                        <span className="text-[var(--nous-blue)]">→ </span>Email
                    </a>
                    <span className="cursor-default text-[#707171]">
                        <span className="text-[var(--nous-blue)]">→ </span>Halle (Saale), DE
                    </span>
                </div>

                <div className="flex justify-between flex-wrap gap-3 font-mono text-[10.5px] text-[#83b2ce] border-t border-[#1c3a4e] pt-4">
                    <span>© {new Date().getFullYear()} Shakhriyor Kadamboev. All rights reserved.</span>
                    <span>Built in the spirit of open systems · v{packageInfo.version}-{process.env.NEXT_PUBLIC_COMMIT_HASH}</span>
                </div>
            </div>
        </footer>
    );
}

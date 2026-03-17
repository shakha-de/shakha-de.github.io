import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
    const { personalInfo } = portfolioData;

    return (
        <footer className="app-container w-full py-8 sm:py-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-sm text-text-muted text-center sm:text-left">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-6 sm:gap-8">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    );
}

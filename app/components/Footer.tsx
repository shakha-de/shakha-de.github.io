import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
    const { personalInfo } = portfolioData;

    return (
        <footer className="w-full px-4 md:px-10 lg:px-40 py-10 max-w-[1440px] mx-auto border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    );
}

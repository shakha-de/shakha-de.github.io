import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";
import { FadeIn } from "../components/Animations";

export default function PrivacyPage() {
    const { personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--black)] text-[var(--off-white)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center w-full">
                <section className="app-container section-stack w-full max-w-3xl">
                    <div className="w-full">
                        <FadeIn delay={0.1}>
                            <div className="eyebrow">Legal</div>
                            <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-12">
                                Privacy Policy
                            </h1>
                        </FadeIn>

                        <div className="space-y-8 text-[#c9ccd1] text-[15px] leading-relaxed">
                            <FadeIn delay={0.2}>
                                <div>
                                    <h2 className="text-lg font-semibold text-[var(--off-white)] mb-4">
                                        1. An overview of data protection
                                    </h2>
                                    <p>
                                        Generally, you can use our website without providing any personal information (Anyway i don&apos;t collect any data, this is static site). However, different rules may apply to certain services on our site, and these are explained separately below.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div>
                                    <h2 className="text-lg font-semibold text-[var(--off-white)] mb-4">
                                        2. Responsible Party
                                    </h2>
                                    <p className="font-mono text-sm text-[var(--light-blue)]">
                                        {personalInfo.name}<br />
                                        Email: {personalInfo.email}
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div>
                                    <h2 className="text-lg font-semibold text-[var(--off-white)] mb-4">
                                        3. Data collection on our website
                                    </h2>
                                    <h3 className="text-base font-bold text-[var(--off-white)] mt-4 mb-2">
                                        Server log files
                                    </h3>
                                    <p className="mb-4">
                                        The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
                                    </p>
                                    <ul className="list-none space-y-1 text-sm text-[var(--gray)] font-mono pl-4">
                                        <li>[x] Browser type and browser version</li>
                                        <li>[x] Operating system used</li>
                                        <li>[x] Referrer URL</li>
                                        <li>[x] Host name of the accessing computer</li>
                                        <li>[x] Time of the server request</li>
                                        <li>[x] IP address</li>
                                    </ul>
                                    <p className="mt-4">
                                        The legal basis for data processing is Art. 6 para. 1 lit. f GDPR (Legitimate Interest). These logs are necessary for the security and stability of the website.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <div>
                                    <h2 className="text-lg font-semibold text-[var(--off-white)] mb-4">
                                        4. Your Rights
                                    </h2>
                                    <p>
                                        You have the right at any time to receive information free of charge about your stored personal data, its origin and recipient and the purpose of the data processing. You also have a right to correction, blocking or deletion of this data.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.6}>
                                <div className="pt-8 border-t border-[var(--border)] text-sm italic text-[var(--gray)]">
                                    <p>Generated for educational/portfolio purposes. I&apos;m not a lawyer, so this is not legal advice. And this thing is not even DSGVO-compliant.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

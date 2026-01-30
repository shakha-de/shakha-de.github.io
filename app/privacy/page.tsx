import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function PrivacyPage() {
    const { personalInfo } = portfolioData;

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
            <Header />
            <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
                <div className="w-full max-w-3xl">
                    <h1 className="text-4xl font-bold mb-12">Privacy Policy, <span className="text-text-muted">hopefully</span></h1>

                    <section className="max-w-none space-y-8 text-text-muted leading-relaxed">
                        <div>
                            <h2 className="text-xl font-bold text-text-main mb-4">1. An overview of data protection</h2>
                            <p>Generally, you can use our website without providing any personal information (Anyway i don&apos;t collect any data, this is static site). However, different rules may apply to certain services on our site, and these are explained separately below.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-text-main mb-4">2. Responsible Party</h2>
                            <p>
                                {personalInfo.name}<br />
                                Email: {personalInfo.email}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-text-main mb-4">3. Data collection on our website</h2>
                            <h3 className="text-lg font-bold text-text-main mt-4 mb-2">Server log files</h3>
                            <p>The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Browser type and browser version</li>
                                <li>Operating system used</li>
                                <li>Referrer URL</li>
                                <li>Host name of the accessing computer</li>
                                <li>Time of the server request</li>
                                <li>IP address</li>
                            </ul>
                            <p className="mt-4">The legal basis for data processing is Art. 6 para. 1 lit. f GDPR (Legitimate Interest). These logs are necessary for the security and stability of the website.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-text-main mb-4">4. Your Rights</h2>
                            <p>You have the right at any time to receive information free of charge about your stored personal data, its origin and recipient and the purpose of the data processing. You also have a right to correction, blocking or deletion of this data.</p>
                        </div>

                        <div className="pt-8 border-t border-border text-sm italic">
                            <p>Generated for educational/portfolio purposes. I&apos;m not a lawyer, so this is not legal advice. And this thing is not even DSGVO-compliant.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

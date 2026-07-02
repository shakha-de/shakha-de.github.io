import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--black)] text-[var(--off-white)]">
            <Header />
            <main id="content" className="grow flex flex-col items-center justify-center w-full app-container section-stack">
                <section className="w-full max-w-3xl text-left">
                    <p className="eyebrow mb-4">
                        Error 404
                    </p>

                    <h1 className="text-[clamp(40px,7vw,96px)] font-bold leading-[1.02] tracking-tight mb-6">
                        Page Not Found
                    </h1>

                    <p className="body-text text-base sm:text-lg leading-relaxed text-[#c9ccd1] mb-10 max-w-xl">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="btn-nous primary"
                        >
                            Take Me Home
                        </Link>
                        <Link
                            href="/projects"
                            className="btn-nous"
                        >
                            Browse Projects
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

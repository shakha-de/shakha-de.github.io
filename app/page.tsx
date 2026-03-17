import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Link from "next/link";
import { portfolioData } from "./data/portfolio";
import { PageTransition, FadeIn } from "./components/Animations";

export default function Home() {
  const { projects } = portfolioData;

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
      <Header />
      <main id="content" className="grow flex flex-col items-center w-full">
        <PageTransition>
          <Hero />

          {/* Featured Projects Snapshots */}
          <section className="app-container section-stack w-full">
            <div className="w-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
                <FadeIn>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Projects</h2>
                    <p className="text-sm sm:text-base text-text-muted max-w-xl">A selection of my recent technical work.</p>
                  </div>
                </FadeIn>
                <Link href="/projects" className="text-primary font-bold hover:underline flex items-center gap-1 group self-start sm:self-auto">
                  All Projects <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {projects.slice(0, 2).map((project, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="surface-card surface-card-hover p-6 sm:p-8 rounded-2xl sm:rounded-3xl group flex flex-col h-full cursor-pointer"
                    >
                      <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-text-muted text-sm sm:text-base mb-6 line-clamp-2 grow">{project.description}</p>
                      <div className="text-sm font-bold text-primary hover:underline flex items-center gap-1 mt-auto">
                        View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

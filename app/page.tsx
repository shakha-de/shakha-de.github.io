import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Link from "next/link";
import { portfolioData } from "./data/portfolio";

export default function Home() {
  const { projects } = portfolioData;

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background text-text-main transition-colors duration-300">
      <Header />
      <main className="grow flex flex-col items-center w-full">
        <Hero />

        {/* Featured Projects Snapshots */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-20 bg-surface border-y border-border">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-text-muted">A selection of my recent technical work.</p>
              </div>
              <Link href="/projects" className="text-primary font-bold hover:underline flex items-center gap-1 group">
                All Projects <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project, i) => (
                <div key={i} className="p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-text-muted text-sm mb-6 line-clamp-2">{project.description}</p>
                  <Link href="/projects" className="text-sm font-bold text-primary hover:underline">View Details</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

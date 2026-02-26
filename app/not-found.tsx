import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grow flex flex-col items-center justify-center w-full px-4 md:px-10 lg:px-40 py-20 max-w-[1440px] mx-auto">
      <section className="w-full max-w-3xl rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-sm">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
          Error 404
        </p>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-text-main leading-tight">
          Nyaa... Page Not Found
        </h1>

        <p className="mt-4 text-text-muted text-lg leading-relaxed">
          Your anime cats searched every rooftop in this universe, but this page
          vanished like a ninja.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-background p-5 text-center">
            <p className="text-5xl">🐾</p>
            <p className="mt-2 text-sm font-bold text-text-main">Scout Cat</p>
            <p className="text-xs text-text-muted">Tracking missing pages</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5 text-center">
            <p className="text-5xl">🐱</p>
            <p className="mt-2 text-sm font-bold text-text-main">Hero Cat</p>
            <p className="text-xs text-text-muted">Ready to guide you back</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5 text-center">
            <p className="text-5xl">🌙</p>
            <p className="mt-2 text-sm font-bold text-text-main">Night Cat</p>
            <p className="text-xs text-text-muted">Guarding your next route</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90"
          >
            Take Me Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-text-main text-sm font-bold hover:text-primary hover:border-primary/40 transition-colors"
          >
            Browse Projects
          </Link>
        </div>

        <p className="mt-6 text-xs text-text-muted">にゃー (Nyaa) = meow</p>
      </section>
    </main>
  );
}

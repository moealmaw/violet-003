import Link from "next/link";

export default function Home() {
  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_40%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-between gap-10">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-foreground/60">
              British artist archive
            </p>
            <h1 className="text-5xl font-semibold tracking-[0.18em] text-foreground sm:text-7xl lg:text-8xl">
              <span className="block opacity-35">Violet</span>
              <span className="block -mt-2 text-foreground/85">M.</span>
              <span className="block -mt-2 text-foreground">Digby</span>
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-foreground/70 sm:text-base">
              British Artist · 1900–1960 · St Ives · Kashmir
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-foreground/75 sm:text-xl">
              She painted from shikaras on Kashmir&apos;s canals, from the cliffs of Cornwall, and from the salons of Paris.
            </p>

            <div className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              Scroll ↓
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/life" className="group rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/10">
              <div className="text-xs uppercase tracking-[0.35em] text-foreground/60">01</div>
              <div className="mt-16 text-2xl font-medium text-foreground">Life</div>
            </Link>
            <Link href="/gallery" className="group rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/10">
              <div className="text-xs uppercase tracking-[0.35em] text-foreground/60">02</div>
              <div className="mt-16 text-2xl font-medium text-foreground">Gallery</div>
            </Link>
            <Link href="/world" className="group rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/10">
              <div className="text-xs uppercase tracking-[0.35em] text-foreground/60">03</div>
              <div className="mt-16 text-2xl font-medium text-foreground">World</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

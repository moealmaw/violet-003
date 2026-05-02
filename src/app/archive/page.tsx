import data from "@/data/data";

export default function ArchivePage() {
  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Archive</p>
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-foreground sm:text-5xl">
            Archive & legacy record
          </h1>
          <p className="text-base leading-7 text-foreground/70">A quiet record of care, custody, and continued access.</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <article className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Archive description</p>
            <div className="mt-5 space-y-4 text-foreground/70">
              {data.archive.description.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] px-5 py-6 text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-6">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Catalogue entry</p>
            <div className="mt-5 flex min-h-[22rem] flex-col justify-between rounded-2xl border border-foreground/10 bg-background/60 p-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">Simon Digby Memorial Charity</p>
                <div className="space-y-3">
                  <h2 className="text-3xl font-medium tracking-[0.08em]">{data.archive.featuredCatalogue.title}</h2>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">Edited by {data.archive.featuredCatalogue.editor}</p>
                </div>
                <p className="max-w-sm text-sm leading-7 text-foreground/70">{data.archive.featuredCatalogue.description}</p>
              </div>

              <dl className="mt-8 grid gap-3 border-t border-foreground/10 pt-4 text-sm text-foreground/70">
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/50">Year</dt>
                  <dd>{data.archive.featuredCatalogue.year}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/50">Publisher</dt>
                  <dd className="text-right">{data.archive.featuredCatalogue.publisher}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/50">ISBN</dt>
                  <dd>{data.archive.featuredCatalogue.isbn}</dd>
                </div>
              </dl>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Simon Digby note</p>
            <p className="mt-4 max-w-2xl leading-7 text-foreground/70">{data.archive.simonDigbyNote}</p>
          </article>

          <article className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Quote</p>
            <blockquote className="mt-4 border-l border-foreground/15 pl-4 leading-7 text-foreground/85">
              {data.archive.nehruCentreNote}
            </blockquote>
          </article>
        </section>

        <section className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">External links</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.archive.externalLinks.map((link) => (
              <li key={link.href} className="rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 underline decoration-foreground/40 underline-offset-4 transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

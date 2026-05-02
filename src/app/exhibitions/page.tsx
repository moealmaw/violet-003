import data from "@/data/data";

export default function ExhibitionsPage() {
  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 lg:px-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Exhibitions</p>
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-foreground sm:text-5xl">
            Record of exhibitions
          </h1>
          <p className="text-base leading-7 text-foreground/70">
            A chronological archive of public showings from 1946 to 2016.
          </p>
        </header>

        <section className="relative pl-6">
          <div className="absolute left-[0.55rem] top-0 h-full w-px bg-foreground/10" />
          <div className="space-y-4">
            {data.exhibitions.entries.map((entry) => (
              <article
                key={`${entry.year}-${entry.exhibitionName}`}
                className="relative rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-5 sm:p-6"
              >
                <span
                  className={`absolute -left-[1.05rem] top-6 h-3 w-3 rounded-full border ${entry.highlight ? "border-foreground bg-foreground shadow-[0_0_0_6px_rgba(255,255,255,0.05)]" : "border-foreground/40 bg-background"}`}
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl space-y-2">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
                      <span>{entry.year}</span>
                      {entry.highlight ? (
                        <span className="border border-foreground/10 bg-foreground/5 px-2 py-1 text-foreground/80">
                          Major
                        </span>
                      ) : null}
                    </div>

                    <h2 className={`text-lg sm:text-xl ${entry.highlight ? "font-medium text-foreground" : "text-foreground/80"}`}>
                      {entry.exhibitionName}
                    </h2>
                  </div>

                  <div className="text-sm leading-6 text-foreground/60 sm:text-right">
                    <p>{entry.venue}</p>
                    <p>{entry.city}</p>
                  </div>
                </div>

                {entry.worksShown ? (
                  <p className="mt-4 text-sm leading-7 text-foreground/60">
                    <span className="text-foreground/50">Works shown:</span> {entry.worksShown}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

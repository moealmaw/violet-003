import data from "@/data/data";

export default function WorldPage() {
  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">World</p>
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-foreground sm:text-5xl">
            Violet M. Digby
          </h1>
          <p className="text-base leading-7 text-foreground/70">
            An immersive map of the places that shaped her painting.
          </p>
        </header>

        <section className="space-y-5">
          {data.world.locations.map((location, index) => (
            <article
              key={location.id}
              className="overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                      0{index + 1}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                      {location.subtitle}
                    </p>
                  </div>

                  <h2 className="mt-4 text-2xl font-medium text-foreground sm:text-3xl">
                    {location.title}
                  </h2>

                  <div className="mt-6 space-y-4 text-foreground/70">
                    {location.description.map((paragraph) => (
                      <p key={paragraph} className="leading-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {location.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground/60"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-foreground/10 bg-foreground/5 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <div className="flex h-full min-h-[18rem] flex-col justify-between rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_42%),linear-gradient(145deg,_rgba(120,113,108,0.28),_rgba(28,25,23,0.92))] p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">
                        Painting notes
                      </p>
                      <ul className="mt-4 space-y-3 text-foreground/80">
                        {location.paintingNotes.map((note) => (
                          <li key={note} className="border-l border-foreground/15 pl-3 text-sm leading-6">
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

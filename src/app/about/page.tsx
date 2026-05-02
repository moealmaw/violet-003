import data from "@/data/data";

export default function AboutPage() {
  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 lg:px-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">About</p>
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-foreground">Transparency & attribution</h1>
        </header>

        <section className="space-y-6 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
          <div className="space-y-3 text-foreground/70">
            {data.about.purpose.map((paragraph) => (
              <p key={paragraph} className="leading-7">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-5 border-t border-foreground/10 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Credits</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{data.about.contactPointer}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Sources</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{data.about.sources.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Rights</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{data.about.imageRightsNote}</p>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-5">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Inquiry</p>
            <a
              href="https://www.simon-digby-memorial-charity.org.uk"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm leading-6 text-foreground/80 underline decoration-foreground/40 underline-offset-4 transition hover:text-foreground"
            >
              Simon Digby Memorial Charity
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

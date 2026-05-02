"use client";

import { useState } from "react";
import data from "@/data/data";

export default function LifePage() {
  const chapters = data.biography.chapters;
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  const activeChapter = chapters.find((c) => c.id === activeId) ?? chapters[0];

  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:px-10">

        <div className="lg:hidden">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-foreground/60">Biography</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => setActiveId(chapter.id)}
                className={`shrink-0 rounded-lg border px-4 py-2 text-sm transition ${
                  activeId === chapter.id
                    ? "border-foreground/30 bg-foreground/15 text-foreground"
                    : "border-foreground/10 bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>

        <aside className="hidden lg:sticky lg:top-6 lg:block lg:h-[calc(100vh-3rem)] lg:w-56 lg:self-start">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">Biography</p>
            <nav className="mt-5 space-y-2">
              {chapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition hover:bg-foreground/10 hover:text-foreground"
                >
                  {chapter.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <section className="flex-1 space-y-6">
          <header className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">Life</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[0.12em] text-foreground sm:text-5xl">
              Violet M. Digby
            </h1>
            <p className="mt-4 text-base leading-7 text-foreground/70">
              Five chapters, from origins to end.
            </p>
          </header>

          <div className="lg:hidden space-y-6">
            {activeChapter && <ChapterArticle chapter={activeChapter} />}
          </div>

          <div className="hidden lg:block space-y-6">
            {chapters.map((chapter) => (
              <ChapterArticle key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ChapterArticle({ chapter }: { chapter: (typeof data.biography.chapters)[number] }) {
  return (
    <article
      id={chapter.id}
      className="scroll-mt-8 rounded-3xl border border-foreground/10 bg-foreground/5 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">{chapter.yearRange}</p>
          <h2 className="mt-2 text-2xl font-medium text-foreground">{chapter.title}</h2>
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">{chapter.placeLabel}</p>
      </div>

      <div className="mt-6 space-y-4 text-foreground/70">
        {chapter.narrativeParagraphs.map((paragraph) => (
          <p key={paragraph} className="leading-7">
            {paragraph}
          </p>
        ))}
      </div>

      {chapter.quote ? (
        <p className="mt-6 border-l border-foreground/15 pl-4 text-foreground/85">{chapter.quote}</p>
      ) : null}

      {chapter.callout ? (
        <p className="mt-6 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground/70">
          {chapter.callout}
        </p>
      ) : null}

      {chapter.highlights?.length ? (
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {chapter.highlights.map((highlight) => (
            <li key={highlight} className="rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm text-foreground/70">
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      {chapter.timelineEntries?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {chapter.timelineEntries.map((entry) => (
            <span key={entry} className="rounded-full border border-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-foreground/60">
              {entry}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

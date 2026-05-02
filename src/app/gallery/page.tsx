"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/data";

const seriesTabs = data.gallery.series.map((series) => series.id);

export default function GalleryPage() {
  const [activeSeries, setActiveSeries] = useState(seriesTabs[0]);
  const [selectedPaintingId, setSelectedPaintingId] = useState<string | null>(null);

  const currentSeries = useMemo(
    () => data.gallery.series.find((series) => series.id === activeSeries) ?? data.gallery.series[0],
    [activeSeries],
  );

  const selectedPainting = useMemo(() => {
    if (!selectedPaintingId) return null;
    return currentSeries.paintings.find((painting) => painting.id === selectedPaintingId) ?? null;
  }, [currentSeries, selectedPaintingId]);

  useEffect(() => {
    if (!selectedPaintingId) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPaintingId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPaintingId]);

  useEffect(() => {
    if (!selectedPaintingId) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPaintingId]);

  return (
    <div data-testid="page-content" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">Gallery</p>
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-foreground sm:text-5xl">
            Violet M. Digby
          </h1>
          <p className="text-base leading-7 text-foreground/70">
            Paintings arranged by series, with a simple column masonry layout.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          {data.gallery.series.map((series) => (
            <button
              key={series.id}
              type="button"
              onClick={() => {
                setActiveSeries(series.id);
                setSelectedPaintingId(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeSeries === series.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/10 bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {series.title}
            </button>
          ))}
        </div>

        <section className="space-y-4">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-medium text-foreground">{currentSeries.title}</h2>
            <p className="text-sm leading-6 text-foreground/60">{currentSeries.intro}</p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
            {currentSeries.paintings.map((painting, index) => {
              const title = painting.title ?? "Untitled";
              const year = painting.approximateYear ?? "Undated";
              const aspectClass = index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[1/1]" : "aspect-[3/4]";

              return (
                <button
                  key={painting.id}
                  type="button"
                  onClick={() => setSelectedPaintingId(painting.id)}
                  className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 text-left"
                >
                  <div className={`relative ${aspectClass} bg-foreground/10`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%),linear-gradient(135deg,_rgba(120,113,108,0.7),_rgba(28,25,23,0.95))] opacity-80 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                      <p className="text-lg font-medium text-foreground">{title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/70">
                        {year} · {painting.medium}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {selectedPainting ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 px-4 py-8" role="dialog" aria-modal="true" aria-label="Painting lightbox">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox"
            onClick={() => setSelectedPaintingId(null)}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-2xl">
            <div className="grid gap-0 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="bg-foreground/5 p-4 sm:p-6">
                <div className="aspect-[4/5] rounded-2xl bg-foreground/10">
                  <div className="h-full rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_48%),linear-gradient(135deg,_rgba(120,113,108,0.8),_rgba(28,25,23,0.98))]" />
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Lightbox</p>
                    <h3 className="mt-2 text-2xl font-medium text-foreground">
                      {selectedPainting.title ?? "Untitled"}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPaintingId(null)}
                    className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/70 transition hover:bg-foreground/10 hover:text-foreground"
                  >
                    Close
                  </button>
                </div>

                <dl className="space-y-4 text-sm text-foreground/70">
                  <div>
                    <dt className="text-foreground/50">Year</dt>
                    <dd className="mt-1 text-foreground">{selectedPainting.approximateYear ?? "Undated"}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/50">Medium</dt>
                    <dd className="mt-1 text-foreground capitalize">{selectedPainting.medium}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/50">Note</dt>
                    <dd className="mt-1 leading-6 text-foreground/70">{selectedPainting.contextualNote}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

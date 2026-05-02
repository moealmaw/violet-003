Created: 2026-04-30 10:30:42 BST
- Initialized CONTEXT.md, SITEMAP.md, TASKS.json, and progress.md based on project requirements.
- Established a clear implementation roadmap in TASKS.json.
- Defined the site structure in SITEMAP.md.
Created: 2026-04-30 10:31:22 BST
- Added strict data contracts in src/data/types.ts for navigation, biography, gallery, world, exhibitions, archive, and about content.
- Centralized prompt-derived content in src/data/data.ts with typed mock data for all requested pages.
Created: 2026-04-30 12:03:57 BST

- App Router layout wired with client ThemeProvider wrapper and minimal chrome.
- Stone-only dark baseline works cleanly with Tailwind v4 via globals.css variables.
Created: 2026-04-30 13:08:58 BST

- Biography page can be built directly from src/data/data.ts chapters with simple anchor nav.
- `vinext build` succeeds with the new /life route and lsp diagnostics stay clean.

Created: 2026-04-30 13:42:24 BST

- Gallery page can read directly from src/data/data.ts and filter by series id without extra data shaping.
- Tailwind columns work well for the masonry grid here, and a simple fixed overlay is enough for the lightbox.
Created: 2026-04-30 14:15:45 BST

- World page can map src/data/data.ts world.locations directly into stacked location panels.
- Simple gradient placeholders and detail pills are enough for a clean immersive geography layout.

Created: 2026-04-30 14:49:13 BST
- Exhibitions page can map src/data/data.ts exhibitions.entries directly into a vertical timeline.
- Major exhibitions read well with a brighter marker and a subtle badge in the stone/neutral palette.

Created: 2026-04-30 14:51:35 BST
- Archive page can read directly from src/data/data.ts archive content with a book-cover style catalogue block.
- Stone palette works well for the archival record, with clean text links for external references.

Created: 2026-04-30 14:54:11 BST
- About page can render directly from src/data/data.ts about content with a compact stone palette layout.
- A single data-testid on the main container is sufficient for this short transparency page.
Created: 2026-04-30 15:38:05 BST

- Pages now use `bg-background text-foreground` and `data-testid="page-content"` wrappers so the root layout can keep the single `main` landmark.
- Theme switching relies on CSS variables from `globals.css`; page-level hardcoded neutral/stone colors were removed.

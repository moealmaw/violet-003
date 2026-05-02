# Frontend Agent Prompt: Violet M. Digby — Artist Website

---

## Project Brief

Build a **multi-page commemorative website** for **Violet M. Digby (née Kidd, 1900–1960)**, a British artist who painted across colonial India, Kashmir, Cornwall's St Ives School, and the salons of Paris and Delhi. The site functions as both a biographical archive and a gallery — it should feel like stepping into a personal, intimate exhibition catalogue: considered, still, and quietly luminous.

The subject's life spans eras and geographies: Edwardian colonial India, the Roaring Twenties, wartime Britain, post-independence Kashmir, and the creative colony of St Ives. Let the site's mood shift across those layers. You have full artistic freedom over palette, typography, motion, layout rhythm, and visual identity — but ground every decision in the feeling of **oil paint, pastel dust, still water, and fading light.**

---

## Sitemap

```
violet-digby.com
│
├── /                          [Home — Landing / Hero]
│   └── → links to all major pages
│
├── /life                      [Biography — Her Story]
│   ├── /life#origins          Plymouth & Bombay (1900–1914)
│   ├── /life#youth            Roaring Twenties & Art School (1920s)
│   ├── /life#india            The Raj Years & Marriage (1926–1944)
│   ├── /life#st-ives          St Ives Colony (1946–1960)
│   └── /life#end              Final Chapter (1960)
│
├── /gallery                   [Paintings — The Work]
│   ├── /gallery#kashmir       Kashmir Series
│   ├── /gallery#cornwall      Cornwall & St Ives
│   ├── /gallery#india         Central Provinces & South of France
│   └── /gallery#portraits     Pastels & Oils
│
├── /world                     [The Places — Her Geographies]
│   ├── /world#kashmir         Kashmir & Dal Lake
│   ├── /world#st-ives         St Ives, Cornwall
│   ├── /world#india           Bombay & Delhi
│   └── /world#europe          France, Norway, Jersey
│
├── /exhibitions               [Exhibition Record]
│
├── /archive                   [Legacy & Catalogue]
│
└── /about                     [About the Site / Simon Digby Memorial Charity]
```

---

## Page-by-Page Element Descriptions

---

### `/` — Home (Landing / Hero)

**Purpose:** Establish tone. Draw the visitor into Violet's world before they know her name.

**Elements:**

- **Full-viewport hero area** — occupies 100vh on load. No immediate text overload. The dominant element is a large, painterly image placeholder (Kashmir landscape or St Ives coastal scene). The image should feel like it's emerging — consider a slow reveal or a soft entrance animation that mimics paint washing onto canvas.

- **Layered name reveal** — "Violet M. Digby" appears typographically as a primary statement, but not aggressively. It should feel like a signature, not a headline. Positioned in a way that interacts with the image compositionally.

- **Subtitle line** — a single evocative descriptor: *"British Artist · 1900–1960 · St Ives · Kashmir"* — small, restrained, beneath the name. Functions as orientation, not branding.

- **Scroll invitation** — a minimal indicator (could be a faint downward motion, a single word, or a line) that invites the visitor to scroll. Not a loud CTA button.

- **Navigation bar** — appears either pinned at top or fades in after the hero scroll. Sparse: Home, Life, Gallery, World, Exhibitions, Archive. No hamburger menus on desktop.

- **Introductory paragraph section** (below hero) — a short, poetic 2–3 sentence biography fragment. Something that captures: *"She painted from shikaras on Kashmir's canals, from the cliffs of Cornwall, and from the salons of Paris."* Not a factual dump — a doorway.

- **Three featured tiles** — horizontal or card-based row that links to Life, Gallery, and World. Each tile should have a dominant image area, a label, and a short one-line descriptor. They behave as visual anchors for the site's three main pillars.

- **Footer strip** — minimal: site name, a link to the Simon Digby Memorial Charity, and a note about the archive in Jersey.

---

### `/life` — Biography

**Purpose:** Tell her story as a scrollable narrative journey, not a list of facts.

**Elements:**

- **Chapter navigation** — a sticky or fixed side rail (desktop) or a horizontal scrollable tab row (mobile) that marks the five life chapters. Chapters are: *Origins, Youth, India, St Ives, The End.* The active chapter should be visually distinguished without being jarring.

- **Chapter: Origins (Plymouth & Bombay, 1900–1914)**
  - Section header with year range and place name as a secondary typographic layer
  - Narrative paragraph: father William Kidd, a Scottish draftsman-engineer; Bombay from age 5; the engineering company "Lowther and Kidd"; the family's European interlude with the Carnell family in Brittany (1907); the aircraft factory years in England (1914)
  - Pull quote or callout: *"Painting had been a leisure pursuit in her family for many generations."*
  - Optional: a small map or geographic annotation showing Plymouth → Bombay → Brittany

- **Chapter: Youth (Roaring Twenties & Art School, 1920s)**
  - Narrative: studies at Hastings College of Art (under Leslie Badham and Philip Cole), the Slade School of Fine Art; the social world of golf, tennis, skiing, dancing; suitors and letters
  - Tone here should feel slightly warmer, more playful — she was alive, social, sought-after
  - A small typographic highlight: *"She was the object of a number of suitors in her busy schedule of art school, golf, tennis, skiing, and dancing."*

- **Chapter: India — The Raj Years & Marriage (1926–1944)**
  - Narrative: Kenelm George Digby proposing multiple times, finally accepted in 1926; return to India as a senior Memsahib of the Raj; dozen-or-so surviving paintings from Central Provinces and South of France; daughter Venetia (born 1930, died in infancy); son Simon (born 1932); studies with André Strauss at École des Beaux-Arts, Fontainebleau summer school (1939); the Hospitality League during WW2; Kenelm's sudden death from apoplexy, 1944
  - Tone: more formal, tinged with loss
  - Callout: *"Many paintings were lost on her return from India after World War Two."*

- **Chapter: St Ives (1946–1960)**
  - Narrative: drawn to the colony of artists in St Ives, Cornwall; joined St Ives Society of Artists (StISA) in 1946; a cottage she owned; painting trip to Norway with Simon, 1950; her letter to Prime Minister Jawaharlal Nehru requesting access to Kashmir; the reply arriving within a fortnight; long stays on a houseboat on Dal Lake (1952/3 and 1957/8); painting from a shikara on rivers and canals; Kashmir paintings appearing on the cover of *Kashmir* magazine; exhibitions at StISA, Paris Salon (accepted every year 1950–1960 except 1955), Pastel Society, Royal Institute of Oil Painters, Delhi, Nehru Centre (2016 posthumous retrospective); plans to move to Jersey with brother Lewis and sister-in-law Enid Carnell
  - This is the richest chapter — let it breathe and expand
  - An inline timeline or exhibition log could live inside this section
  - Pull quote: *"She often avoided unwanted attention by painting from a shikara on the rivers and canals."*

- **Chapter: The End (September 1960)**
  - Tone: quiet, unflinching, respectful
  - Narrative: financially stretched from Kashmir expeditions; a minor traffic incident in London (August 13, 1960) — a child grazed a knee on her car; police summons days later; doctor's prescription of barbiturates; September 2, 1960 — took most of the pills, left a note to Simon, switched on the gas
  - This section should not be dramatised or sensationalised. Let the facts speak in measured prose. White space is your ally here.
  - A closing line or epitaph — something that returns to the paintings, not the death.

- **Transition effects between chapters** — consider a fade or a brief pause; the scroll rhythm should feel intentional, not frantic.

---

### `/gallery` — Paintings

**Purpose:** Present her work in four thematic series. The gallery should feel like rooms in a small, personal exhibition.

**Elements:**

- **Gallery selector / tabs** — four series: Kashmir, Cornwall & St Ives, Central Provinces & France, Pastels & Oils. The active series is visually separated; switching series could involve a gentle cross-fade of the grid.

- **Image grid** — use a masonry or variable-proportion grid that respects each painting's natural aspect ratio. Paintings should not be cropped into uniform squares; they are artworks, not thumbnails.

- **Hover / focus state on each painting** — on hover or focus, a painting reveals: its title (if known), the approximate year, and the medium (oil, pastel). This information should appear as a soft overlay, not a tooltip. The painting should feel gently illuminated, not obscured.

- **Lightbox / expanded view** — clicking a painting opens a full-screen or near-full-screen view. The lightbox should have: a large image, the title/year/medium, a short contextual note (e.g., *"Painted from a shikara on Dal Lake, 1952"*), and navigation arrows to move through the series. The background behind the lightbox should be dark but not pure black — a deep, warm neutral.

- **Kashmir Series section** — note that 40 Kashmir paintings were exhibited at the Nehru Centre, London, in April 2016. These include covers of *Kashmir* magazine. This context should be woven in as an introductory paragraph above the grid.

- **No painting count pressure** — if images are placeholders, maintain elegant placeholder behaviour (subtle texture or gradient, not grey boxes).

---

### `/world` — Her Geographies

**Purpose:** An immersive, map-driven or location-driven exploration of the places that shaped her painting.

**Elements:**

- **Location cards or geographic panels** — each of four places gets a dedicated section: Kashmir & Dal Lake, St Ives Cornwall, Bombay & Delhi, France & Norway & Jersey. Each panel contains: a dominant image, a short atmospheric paragraph, and a list of paintings made there (or approximate count).

- **Kashmir & Dal Lake panel** — her houseboat on Dal Lake; the shikara painting method; Srinagar's canals and rivers; special permission from PM Nehru; two long visits (1952/3, 1957/8). This is the emotional and artistic heart of the site.

- **St Ives, Cornwall panel** — the artist colony; the cottage she owned; StISA membership 1946–1960; the rival factions between traditional and modern painters that grew toxic by the late 1950s; the cliff light; the harbour.

- **Bombay & Delhi panel** — her father's engineering company; the Raj years; the Hospitality League; her solo exhibition in Delhi (1958) opened by Supreme Court Justice Vivian Bose; President Rajendra Prasad's Republic Day reception.

- **France, Norway & Jersey panel** — St Jacut de la Mer, Brittany (childhood interlude 1907); École des Beaux-Arts Fontainebleau (1939 with André Strauss); the Paris Salon (annual submissions 1950–1960); the Norway painting trip with Simon (1950); the planned but never-completed move to Jersey.

- **Atmospheric transitions** — moving between place panels should feel like a slow journey, not a tab switch. Consider a horizontal scroll, a parallax shift, or a reveal that mimics turning a page.

---

### `/exhibitions` — Exhibition Record

**Purpose:** A clean, archival record of her exhibition history. Functional but not sterile.

**Elements:**

- **Chronological exhibition list** — entries from 1946 to 2016 (posthumous). Each entry contains: year, exhibition name, venue, city, and number of works shown (if known).

- **Key entries to include:**
  - St Ives Society of Artists (StISA) exhibitions: 1946–1960
  - StISA Festival of Britain Exhibition, May–September 1951 (toured)
  - Royal Institute of Oil Painters: 1950 (1 piece), 1951 (3 pieces)
  - Joint exhibition with Simon Digby, Piazza Studios, St Ives, 1951
  - The Pastel Society: 1951 (3 pieces, toured northern England), 1952 (4 pieces), 1953 (1 piece)
  - Joint exhibition with Serbjeet Singh, Delhi, 1953
  - Paris Salon (Société des Artistes Français): annually 1950–1960, except 1955 (all accepted)
  - Kashmir magazine covers: March 1953, June 1953
  - Solo exhibition, Delhi, 1958 (opened by Justice Vivian Bose)
  - Posthumous retrospective: Nehru Centre, London, April 2016 (40 Kashmir paintings)

- **Visual rhythm** — entries could be presented as a vertical timeline with year markers, or as a structured table with light row differentiation. Avoid dense walls of text.

- **Highlight state** — major exhibitions (Paris Salon run, Festival of Britain, Nehru Centre 2016) should be visually distinguished — perhaps a slightly larger treatment or a marker.

---

### `/archive` — Legacy & Catalogue

**Purpose:** Acknowledge the archival record and the posthumous care of her work.

**Elements:**

- **Archive description block** — describes the Simon Digby Memorial Charity in Jersey, Channel Islands, which holds her papers and works. Access to the archive is by appointment.

- **Catalogue entry** — the 2015 biographical catalogue: *"Violet M. Digby: A St Ives Painter in Kashmir"* edited by Antiochus Omissi, published by the Simon Digby Memorial Charity (ISBN 978-0-9929615-0-3). This should be presented as a featured item — a book-like visual block with title, editor, year, publisher, and a brief description.

- **Simon Digby note** — her son Simon Digby (1932–) became an oriental scholar. The charity is named in his memory. A short paragraph.

- **Quote from the 2016 Nehru Centre exhibition** — reference to the first major posthumous show since 1960.

- **External link block** — links to: The Pastel Society, Royal Institute of Oil Painters, St Ives Society of Artists, Nehru Centre. Presented as a clean link list, not buttons.

---

### `/about` — About the Site

**Purpose:** Transparency and attribution. Short page.

**Elements:**

- A short paragraph explaining the site's purpose: to commemorate Violet M. Digby's life and work.
- Credit to the Simon Digby Memorial Charity as the source of biographical and archival information.
- Reference to the Wikipedia article and the 2014 catalogue as primary sources.
- A note about image rights and the archive.
- Contact or inquiry pointer (link to the SDMC).

---

## UX & Interaction Principles

- **Scroll is the primary navigation mechanism** on biography and world pages. Respect that rhythm.
- **Images lead.** Text supports. Never let text visually dominate over paintings.
- **Silence as design.** Generous whitespace is not empty — it is the pause between brushstrokes.
- **No pop-ups, no newsletter modals, no cookie banners beyond what is legally necessary.** This is an artist's memorial, not a product site.
- **Accessibility:** All images need descriptive alt text. Text contrast must be legible. Navigation must be keyboard-traversable.
- **Mobile first in layout decisions**, but the desktop version should feel expansive — a painting deserves a wide canvas.
- **Typographic hierarchy** must be clear but not mechanical. There are at least three levels: section titles, body narrative, and captions/metadata. A fourth level — pull quotes — may appear within biography chapters.
- **Loading states** should be graceful. Images fade in; they do not pop.

---

## Tonal References (for inspiration only — not literal)

- The stillness of a houseboat at dawn on Dal Lake
- The texture of pastel dust on laid paper
- A colonial-era letter, handwritten and faded at the edges
- The light at St Ives in October — cool, slanted, clear
- A museum room at closing time — quiet, attentive, reverent

---

*All artistic decisions — palette, typography, motion language, grid system, decorative elements — are yours to make. Trust your instincts. Make it beautiful. Make it feel like her.*

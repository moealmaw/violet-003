export type SitePath =
  | "/"
  | "/life"
  | "/gallery"
  | "/world"
  | "/exhibitions"
  | "/archive"
  | "/about";

export interface NavLink {
  label: string;
  href: SitePath;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface FeatureTile {
  id: string;
  label: string;
  description: string;
  href: SitePath;
  imageAlt: string;
}

export interface HomeContent {
  heroImageAlt: string;
  name: string;
  subtitle: string;
  scrollInvitation: string;
  introParagraphs: string[];
  featureTiles: FeatureTile[];
  footerNote: string;
  footerLinks: ExternalLink[];
}

export interface BiographyChapter {
  id: string;
  title: string;
  yearRange: string;
  placeLabel: string;
  narrativeParagraphs: string[];
  quote?: string;
  callout?: string;
  highlights?: string[];
  timelineEntries?: string[];
}

export interface BiographyContent {
  chapters: BiographyChapter[];
}

export type PaintingMedium = "oil" | "pastel" | "oil and pastel" | "mixed";

export interface Painting {
  id: string;
  title: string | null;
  approximateYear: string | null;
  medium: PaintingMedium;
  contextualNote: string;
  imageAlt: string;
}

export interface PaintingSeries {
  id: string;
  title: string;
  intro: string;
  paintings: Painting[];
}

export interface GalleryContent {
  series: PaintingSeries[];
}

export interface WorldLocation {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  details: string[];
  paintingNotes: string[];
}

export interface WorldContent {
  locations: WorldLocation[];
}

export interface ExhibitionEntry {
  year: string;
  exhibitionName: string;
  venue: string;
  city: string;
  worksShown: string | null;
  highlight?: boolean;
}

export interface ExhibitionsContent {
  entries: ExhibitionEntry[];
}

export interface ArchiveContent {
  description: string[];
  featuredCatalogue: {
    title: string;
    editor: string;
    year: string;
    publisher: string;
    isbn: string;
    description: string;
  };
  simonDigbyNote: string;
  nehruCentreNote: string;
  externalLinks: ExternalLink[];
}

export interface AboutContent {
  purpose: string[];
  sources: string[];
  imageRightsNote: string;
  contactPointer: string;
}

export interface SiteData {
  navigation: NavLink[];
  home: HomeContent;
  biography: BiographyContent;
  gallery: GalleryContent;
  world: WorldContent;
  exhibitions: ExhibitionsContent;
  archive: ArchiveContent;
  about: AboutContent;
}

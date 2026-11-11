/** Shapes of everything in site.content.ts. */

export interface Portrait {
  /** Path inside /public, e.g. "media/portrait.jpg". */
  src: string;
  alt: string;
}

export interface Clock {
  label: string;
  /** IANA time zone, e.g. "Europe/Istanbul". */
  timeZone: string;
}

export interface NavLink {
  label: string;
  /** Id of the section to jump to, without the "#". */
  target: string;
}

/** One row in a section: a job, a product, a client, a film. */
export interface Entry {
  /** Small label on the left, e.g. "Airline platform · Angular". */
  kind: string;
  /** Rows with an empty title stay hidden, so you can prepare them in advance. */
  title: string;
  description: string;
  /** Optional link (repo, live site, video). */
  url?: string;
  /** Optional picture: a path inside /public, e.g. "media/freelance/client-1.jpg". */
  image?: string;
  imageAlt?: string;
}

export interface Section {
  /** Used for the nav link and the address, e.g. "freelance" gives #freelance. */
  id: string;
  title: { plain: string; accent: string };
  intro?: string;
  entries: Entry[];
}

export interface PathEntry {
  when: string;
  title: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  /** Leave empty until you have the address: the label then shows without a link. */
  url: string;
}

export interface SiteContent {
  name: { first: string; last: string };
  eyebrow: string;
  intro: string;
  portrait: Portrait;
  clocks: Clock[];
  nav: NavLink[];
  crossing: { west: string; east: string };
  about: { text: string; skills: string[] };
  sections: Section[];
  path: PathEntry[];
  contact: {
    greeting: { plain: string; accent: string };
    note: string;
    links: SocialLink[];
    /** The form needs the Java backend to be running. Keep false on static hosting. */
    showForm: boolean;
  };
  footer: { left: string; right: string; sourceUrl: string };
}

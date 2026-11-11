import { SiteContent } from './site.model';

/**
 * Every word, link and project on the site lives in this one file.
 * Change the text here and the page updates; no component needs touching.
 *
 * Pictures go in frontend/public/media/ and are referenced as "media/your-file.jpg".
 */
export const SITE: SiteContent = {
  name: { first: 'Denizhan', last: 'Kalkan' },
  eyebrow: 'Senior Frontend Engineer · Istanbul',
  intro:
    'Seven years of Angular and TypeScript. I build the booking platforms that travellers of Lufthansa, SWISS, Austrian and Brussels Airlines use, currently for Amadeus.',

  portrait: {
    src: 'media/portrait.jpg',
    alt: 'Portrait of Denizhan Kalkan',
  },

  clocks: [
    { label: 'IST', timeZone: 'Europe/Istanbul' },
    { label: 'LON', timeZone: 'Europe/London' },
  ],

  nav: [
    { label: 'About', target: 'about' },
    { label: 'Work', target: 'work' },
    { label: 'Freelance', target: 'freelance' },
    { label: 'Outside work', target: 'outside' },
    { label: 'Contact', target: 'hello' },
  ],

  crossing: { west: 'West · grid', east: 'East · star' },

  about: {
    text: 'I build the front end of large products: typed, tested, and shared across several airline brands at once. I also train other engineers to work with GitHub Copilot, and I hold a postgraduate degree from the University of Exeter Business School, earned on a scholarship.',
    skills: ['TypeScript', 'Angular', 'NgRx', 'React', 'Playwright', 'GitHub Copilot'],
  },

  sections: [
    {
      id: 'work',
      title: { plain: 'Professional', accent: 'work' },
      entries: [
        {
          kind: 'Airline platform · Angular',
          title: 'Lufthansa Group',
          description:
            'Booking management for Lufthansa, SWISS, Austrian and Brussels Airlines on one multi-tenant platform: baggage, seats, meals and upgrades.',
        },
        {
          kind: 'Loyalty',
          title: 'Miles & More',
          description: 'Front-end engineering for the loyalty programme of the Lufthansa Group.',
        },
        {
          kind: 'Training',
          title: 'GitHub Copilot training',
          description:
            'Trainer in the train-the-trainer programme. I teach engineering teams to work with Copilot: agent mode, custom instructions, skills and MCP servers.',
        },
      ],
    },
    {
      id: 'products',
      title: { plain: 'Own', accent: 'products' },
      entries: [
        {
          kind: 'Product · React',
          title: 'SignMyShirt',
          description:
            'The last-day-of-school shirt, moved online. Share a link, friends sign your shirt with a note, and you keep it for good.',
        },
        {
          kind: 'Product · Fashion',
          title: 'PERSONA',
          description:
            'A fashion app that starts with a character. Pick a persona or an era and see what they would wear, piece by piece.',
        },
      ],
    },
    {
      id: 'freelance',
      title: { plain: 'Freelance', accent: 'clients' },
      intro: 'Software delivered for eight companies so far.',
      // TODO: one row per client. A row appears on the site as soon as its title is filled in.
      // For a picture, save it under frontend/public/media/freelance/ and set `image`.
      entries: [
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Client', title: '', description: '', url: '', image: '', imageAlt: '' },
      ],
    },
    {
      id: 'outside',
      title: { plain: 'Outside of', accent: 'professional life' },
      intro: 'Filmmaking, cinema and marketing projects.',
      entries: [
        {
          kind: 'Short film',
          title: 'One More Day in Istanbul',
          description:
            'A short film about staying one day longer in the city that sits on two continents.',
          url: '',
          image: '',
          imageAlt: '',
        },
        // TODO: more films and marketing projects. Fill in a title to show a row.
        { kind: 'Film', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Marketing', title: '', description: '', url: '', image: '', imageAlt: '' },
        { kind: 'Marketing', title: '', description: '', url: '', image: '', imageAlt: '' },
      ],
    },
  ],

  path: [
    { when: 'Now', title: 'Amadeus', detail: 'Software engineer, Istanbul' },
    {
      when: 'Before',
      title: 'Lufthansa Group · Miles & More',
      detail: 'Airline booking and loyalty products',
    },
    {
      when: 'Study',
      title: 'University of Exeter',
      detail: 'Postgraduate degree, Business School · scholarship',
    },
    { when: 'In total', title: 'Seven years', detail: 'of professional software engineering' },
  ],

  contact: {
    greeting: { plain: 'Merhaba,', accent: 'hello.' },
    note: 'For work, freelance projects or film, find me here.',
    // TODO: paste your profile addresses between the quotes.
    links: [
      { label: 'GitHub', url: '' },
      { label: 'LinkedIn', url: '' },
      { label: 'YouTube', url: '' },
    ],
    showForm: false,
  },

  footer: {
    left: '© 2026 Denizhan Kalkan',
    right: 'Built with Angular and TypeScript',
    // TODO: address of this project on GitHub. Shows a "View source" link when filled in.
    sourceUrl: '',
  },
};

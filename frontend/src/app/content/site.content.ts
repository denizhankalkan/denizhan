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
          url: 'https://github.com/denizhankalkan/signmyshirt',
          description:
            'The last-day-of-school shirt, moved online. Share a link, friends sign your shirt with a note, and you keep it for good.',
        },
        {
          kind: 'Product · Fashion',
          title: 'PERSONA',
          url: 'https://github.com/denizhankalkan/persona',
          description:
            'A fashion app that starts with a character. Pick a persona or an era and see what they would wear, piece by piece.',
        },
      ],
    },
    {
      id: 'freelance',
      title: { plain: 'Freelance &', accent: 'consulting' },
      intro: 'Freelance, consulting and part-time engineering for companies in Turkey and abroad.',
      // Each row is one client or project. Extend `description` with what you built and the result.
      // For a picture, save it under frontend/public/media/freelance/ and set `image`.
      // To hide a client's name, change `title` (for example "Technology company in Austria").
      entries: [
        {
          kind: 'Enterprise software',
          title: 'Şişecam',
          description:
            'Enterprise software work for Şişecam, the Turkish glass and chemicals group.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'E-commerce · Web',
          title: 'Knitology Fashion',
          description: 'Web development for the online store of a fashion brand.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Automation',
          title: 'Textile automation',
          description: 'Software that automates the business processes of a textile company.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Automation',
          title: 'Restaurant automation',
          description: 'Software that automates the day-to-day operations of a restaurant.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Refactoring · Performance',
          title: 'Austrian company',
          description:
            'Refactoring and performance improvements on an existing codebase for a company in Austria.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Web',
          title: 'Wamda Studio',
          description: 'Web development and optimisation for Wamda Studio.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Part-time engineering',
          title: 'Russian technology company',
          description: 'Part-time software engineering for a technology company based in Russia.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Part-time engineering',
          title: 'Turkish company',
          description: 'Part-time software engineering for a company in Turkey.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Freelance development',
          title: 'French marketing company',
          description: 'Freelance development for a marketing company in France.',
          url: '',
          image: '',
          imageAlt: '',
        },
        {
          kind: 'Open source · AI',
          title: 'Quivr',
          description: 'Contribution to Quivr, an open-source AI project.',
          url: '',
          image: '',
          imageAlt: '',
        },
        // TODO: British company. Hidden until the title and the scope of the work are filled in.
        { kind: 'Freelance', title: '', description: '', url: '', image: '', imageAlt: '' },
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
      { label: 'GitHub', url: 'https://github.com/denizhankalkan' },
      { label: 'LinkedIn', url: '' },
      { label: 'YouTube', url: '' },
    ],
    showForm: false,
  },

  footer: {
    left: '© 2026 Denizhan Kalkan',
    right: 'Built with Angular and TypeScript',
    // TODO: address of this project on GitHub. Shows a "View source" link when filled in.
    sourceUrl: 'https://github.com/denizhankalkan/denizhan',
  },
};

import { SiteContent } from './site.model';

/**
 * Central content file for denizhankalkan.com.
 *
 * Images should be placed in frontend/public/media/ and referenced as
 * "media/filename.jpg". Leave image as an empty string until the asset exists.
 *
 * Editorial checklist before publication:
 * - Confirm permission to publicly name each freelance client.
 * - Confirm the exact scope of each engagement; do not add invented metrics.
 * - Replace empty links and image fields once real assets are ready.
 * - University of Exeter qualification is described as postgraduate studies,
 *   not a conferred degree, until the final award is confirmed.
 */
export const SITE: SiteContent = {
  name: { first: 'Denizhan', last: 'Kalkan' },
  nameNote: 'Goes by Deniz · pronounced “deh-NEEZ”',
  eyebrow: 'Senior Software Engineer · London',
  intro:
    "Seven years of software engineering across finance, IoT and aviation. I've worked on high-stakes financial systems, location-based technologies and digital experiences for Lufthansa Group airlines. Beyond engineering, I train developers, contribute to open-source projects and build products of my own.",

  portrait: {
    src: 'media/portrait.jpg',
    alt: 'Portrait of Denizhan Kalkan',
  },

  clocks: [
    { label: 'LON', timeZone: 'Europe/London' },
    { label: 'IST', timeZone: 'Europe/Istanbul' },
  ],

  nav: [
    { label: 'About', target: 'about' },
    { label: 'Engineering', target: 'work' },
    { label: 'Products', target: 'products' },
    { label: 'Client Work', target: 'freelance' },
    { label: 'Beyond Code', target: 'outside' },
    { label: 'Contact', target: 'hello' },
  ],

  crossing: { west: 'West · grid', east: 'East · star' },

  about: {
    text: "I'm Denizhan, a Senior Software Engineer based in London, with seven years of experience across banking, IoT and aviation. I began by building full-stack financial applications with React and .NET, then developed IoT and location-based systems using Python. Today, at Amadeus, I work on booking, loyalty and post-booking journeys for Lufthansa Group airlines using Angular and TypeScript. I enjoy the parts of engineering that go beyond writing code: working with international teams, making complex systems easier to use, sharing knowledge and turning independent ideas into working products. I studied Computer Science and Engineering at Namık Kemal University, and later pursued postgraduate studies in International Business Management at the University of Exeter, supported by a scholarship.",
    skills: [
      'TypeScript',
      'Angular',
      'React',
      'C# / .NET',
      'Python',
      'Java',
      'NgRx',
      'RxJS',
      'Playwright',
      'CI/CD',
      'GitHub Copilot',
    ],
  },

  sections: [
    {
      id: 'work',
      title: { plain: 'Professional', accent: 'experience' },
      entries: [
        {
          kind: 'Aviation technology · Amadeus',
          title: 'Lufthansa Group',
          description:
            'Building and improving digital travel experiences across Lufthansa, SWISS, Austrian Airlines and Brussels Airlines. My work covers booking management, post-booking flows, seats, baggage, upgrades and shared front-end functionality across airline brands.',
        },
        {
          kind: 'Loyalty · Digital products',
          title: 'Miles & More',
          description:
            'Front-end engineering for loyalty and upgrade experiences in the Lufthansa Group ecosystem, connecting customer journeys with booking management and airline services.',
        },
        {
          kind: 'AI education · Engineering enablement',
          title: 'GitHub Copilot Training',
          image: 'media/copilot-training.jpg',
          imageAlt: 'Deniz presenting a GitHub Copilot training session in a video call',
          description:
            'Delivered practical training for fellow engineers on AI-assisted development with GitHub Copilot, including agent workflows, custom instructions, skills and MCP-based tooling. I enjoy helping teams turn unfamiliar tools into useful everyday practices.',
        },
        {
          kind: 'International engineering · Collaboration',
          title: 'Engineering Beyond Borders',
          description:
            'Represented engineering work in international customer discussions and European PI Planning events, collaborating with product stakeholders and distributed teams to align technical delivery with business needs.',
        },
        {
          kind: 'Banking · Full-stack engineering',
          title: 'Fibabank',
          description:
            'Developed full-stack functionality for financial applications handling sensitive, high-value debt records. Worked with React, C# and .NET, including application access and authentication flows.',
        },
        {
          kind: 'IoT · Location-based technology',
          title: 'Boni Global',
          description:
            'Developed software for location-based tracking and mapping products in an IoT environment, working with Python and enterprise-facing use cases.',
        },
      ],
    },
    {
      id: 'products',
      title: { plain: 'Independent', accent: 'products' },
      entries: [
        {
          kind: 'Independent product · React',
          title: 'SignMyShirt',
          url: 'https://github.com/denizhankalkan/signmyshirt',
          description:
            'A digital take on the last-day-of-school tradition. Share a shirt, invite friends to leave notes and signatures, and keep the messages long after graduation. Designed as a playful, interactive product people can experience themselves.',
        },
        {
          kind: 'Independent product · Fashion technology',
          title: 'PERSONA',
          url: 'https://github.com/denizhankalkan/persona',
          description:
            'An exploration of fashion through characters, eras and personal identity. Start with a persona, discover the pieces behind their style, and turn cultural inspiration into a more interactive way of browsing fashion.',
        },
      ],
    },
    {
      id: 'freelance',
      title: { plain: 'Freelance &', accent: 'consulting' },
      intro:
        'Independent engineering and collaborations across Europe and beyond: web products, business automation, code modernisation and performance-focused improvements.',
      entries: [
        {
          kind: 'Germany · Backend optimisation',
          title: 'GVB GmbH',
          description:
            'Backend memory optimisation for software supporting glass-production workflows. Focused on resource efficiency and improving the maintainability of memory-intensive application code.',
          url: 'https://g-v-b.de/en/',
          image: '', // media/freelance/gvb.jpg
          imageAlt: 'GVB GmbH special-glass project',
        },
        {
          kind: 'Turkey · Fashion e-commerce',
          title: 'Knitology (KNTLGY)',
          description:
            'Website development for a contemporary fashion brand, bringing product presentation, responsive web experience and visual identity together in an online storefront.',
          url: 'https://knitology.com.tr/',
          image: '', // media/freelance/knitology.jpg
          imageAlt: 'Knitology fashion website',
        },
        {
          kind: 'France · B2B marketing technology',
          title: 'Abiléo',
          description:
            'Freelance web-development collaboration with a French B2B marketing consultancy, supporting digital experiences for marketing and business communication.',
          url: 'https://www.abileo.com/',
          image: '', // media/freelance/abileo.jpg
          imageAlt: 'Abiléo marketing website',
        },
        {
          kind: 'Turkey · Business automation',
          title: 'İlgisoft',
          description:
            'Work on software automation for hospital and restaurant operations, translating day-to-day business processes into practical application workflows.',
          url: 'https://ilgisoft.com/',
          image: '', // media/freelance/ilgisoft.jpg
          imageAlt: 'İlgisoft business automation software',
        },
        {
          kind: 'Egypt · Web development',
          title: 'Wamda Studio',
          description:
            'Web development and optimisation for an Egyptian creative client, with attention to responsive presentation, usability and website performance.',
          url: '', // Add the exact client's website; several businesses use this name.
          image: '', // media/freelance/wamda.jpg
          imageAlt: 'Wamda Studio website project',
        },
        {
          kind: 'Turkey · Enterprise applications',
          title: 'Şişecam',
          description:
            'Enterprise software collaboration within an industrial business environment, contributing to application development and business-facing software workflows.',
          url: '', // Add only a relevant, approved public project link.
          image: '',
          imageAlt: 'Şişecam enterprise software collaboration',
        },
        {
          kind: 'Turkey · Process automation',
          title: 'Textile Operations Automation',
          description:
            'Software work around repetitive textile-business processes, exploring ways to make operational workflows easier to manage through automation.',
          url: '',
          image: '',
          imageAlt: 'Textile business automation project',
        },
        {
          kind: 'Russia · Part-time engineering',
          title: 'YCLIENTS',
          description:
            'Part-time engineering collaboration with the YCLIENTS product team, contributing to application development and ongoing product work.',
          url: 'https://www.yclients.ru/',
          image: '',
          imageAlt: 'YCLIENTS engineering collaboration',
        },
        // Future entries: UK client and Halil Ibrahim's company.
        // Add them only when the project scope and naming permission are confirmed.
      ],
    },
    {
      id: 'outside',
      title: { plain: 'Beyond', accent: 'code' },
      intro:
        'Curiosity does not stop at work: coding meetups, open-source AI, photography, filmmaking, academic communities and writing.',
      entries: [
        {
          kind: 'Coding community · Istanbul',
          title: 'CodeHub Kadıköy',
          description:
            'An informal international coding circle in Kadıköy. Friends from different countries met to solve LeetCode challenges, compare approaches and keep learning together over coffee.',
          url: '',
          image: 'media/codehub-kadikoy.jpg',
          imageAlt: 'CodeHub Kadıköy members around a table with laptops and a projector',
          images: ['media/codehub-kadikoy-session.jpg', 'media/codehub-kadikoy-friends.jpg'],
        },
        {
          kind: 'Open source · Artificial intelligence',
          title: 'Quivr',
          description:
            'Open-source contributions to an AI project, connecting my interest in intelligent systems with collaborative software development.',
          url: 'https://github.com/The-Vibe-Company/quivr',
          image: '',
          imageAlt: 'Quivr open-source AI contribution',
        },
        {
          kind: 'Academic community · United Kingdom',
          title: 'University of Exeter · Data Science Society',
          description:
            'Technology-focused community activities alongside postgraduate studies in International Business Management, continuing my interest in learning across disciplines.',
          url: '',
          image: '', // media/exeter-tech.jpg
          imageAlt: 'University of Exeter data science community',
        },
        {
          kind: 'Filmmaking · Istanbul',
          title: 'One More Day in Istanbul',
          description:
            'A short-film project exploring the city between two continents through everyday moments, movement and a personal sense of place.',
          url: '',
          image: '', // media/one-more-day-istanbul.jpg
          imageAlt: 'One More Day in Istanbul short-film project',
        },
        {
          kind: 'Photography · Writing · Culture',
          title: 'Stories Beyond Software',
          description:
            'Photography, history, cinema and essays about culture, identity and the small details of everyday life. I am interested in how technology and the humanities shape the way we see the world.',
          url: '', // Add Substack or portfolio-of-photography URL when ready.
          image: '',
          imageAlt: 'Photography and cultural writing projects',
        },
      ],
    },
  ],

  contact: {
    greeting: { plain: 'Merhaba,', accent: 'hello.' },
    note: 'For software engineering opportunities, independent projects, technical collaboration or creative work, get in touch.',
    links: [
      { label: 'GitHub', url: 'https://github.com/denizhankalkan' },
      { label: 'LinkedIn', url: '' }, // TODO: Add verified profile URL.
      { label: 'YouTube', url: '' }, // TODO: Add when ready.
    ],
    showForm: false,
  },

  footer: {
    left: '© 2026 Denizhan Kalkan',
    right: 'Built with Angular and TypeScript',
    sourceUrl: 'https://github.com/denizhankalkan/denizhan',
  },
};

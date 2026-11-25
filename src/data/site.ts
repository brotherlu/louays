// Edit this file to manage site-wide content. Projects live in projects.ts.

export const site = {
  name: 'Louay Cheikh',
  email: 'louay.cheikh@gmail.com',
  location: 'Montréal',
  tagline: 'Developer, Designer, Engineer and all-round Wizard!',
  status: 'Open to projects',
  links: [
    { label: 'GitHub', url: 'https://github.com/brotherlu', handle: 'github.com/brotherlu' },
    { label: 'X', url: 'https://x.com/brotherlu', handle: '@brotherlu' },
  ],
  // Add { label, url } here when a CV exists, then show it on /about.
  cv: null as null | { label: string; url: string },
};

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/contact/', label: 'Contact' },
];

export const titleBlock = [
  { label: 'Disciplines', value: 'Aerospace, web' },
  { label: 'Languages', value: 'C++, Python, PHP, JS' },
  { label: 'CAD', value: 'CATIA, SolidWorks' },
];

export const services = [
  {
    title: 'Web & app engineering',
    summary:
      'End-to-end development of fast, maintainable web applications and APIs, from Angular and Laravel platforms to WordPress sites.',
  },
  {
    title: 'UI & frontend craft',
    summary:
      'Responsive, accessible interfaces built with modern CSS, clear typography and smooth interactions.',
  },
  {
    title: 'Engineering & consulting',
    summary:
      'Codebase modernization, system design and pragmatic engineering guidance, including aerospace modelling and simulation tooling.',
  },
];

export const skillGroups = [
  { group: 'Web', items: ['HTML5 & CSS3', 'Sass / SCSS', 'JavaScript', 'PHP & Laravel', 'RESTful APIs', 'WordPress', 'Git'] },
  { group: 'Software', items: ['Python', 'C++'] },
  { group: 'Design & CAD', items: ['CATIA', 'SolidWorks', 'Blender'] },
];

export const bio = [
  "I'm Louay Cheikh, an engineer, developer and designer based in Montréal. I enjoy having a hand in many diverse projects, from web applications and open-source modelling tools to autonomous aircraft.",
  'I enjoy the process of exploration that goes into every project. It is fun to create and to build, be it software or physibles.',
];

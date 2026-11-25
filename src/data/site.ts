// Site-wide settings. Projects, services and the About text are markdown in src/content/.

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

export const skillGroups = [
  { group: 'Web', items: ['HTML5 & CSS3', 'Sass / SCSS', 'JavaScript', 'PHP & Laravel', 'RESTful APIs', 'WordPress', 'Git'] },
  { group: 'Software', items: ['Python', 'C++'] },
  { group: 'Design & CAD', items: ['CATIA', 'SolidWorks', 'Blender'] },
];

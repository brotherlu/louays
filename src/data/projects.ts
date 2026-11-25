import type { ImageMetadata } from 'astro';
import capstoneImg from '../assets/projects/capstone.jpg';
import bpyfoilImg from '../assets/projects/bpyfoil.png';
import quiprImg from '../assets/projects/quipr.png';
import pqmsImg from '../assets/projects/pqms.png';
import caciImg from '../assets/projects/caci.png';
import sautrelleImg from '../assets/projects/sautrelle.png';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  kind: 'aerospace' | 'software';
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  features: string[];
  link?: {
    url: string;
    label: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'autonomous-uav',
    title: 'Autonomous UAV',
    subtitle: 'Tandem Wing Autonomous UAV — Capstone Project',
    category: 'Aerospace & Embedded',
    kind: 'aerospace',
    summary:
      "Capstone tandem-wing aircraft that flies fully autonomously, with flight paths generated using Hermite interpolation. Winner of the Richard Cheng Design Award.",
    image: capstoneImg,
    imageAlt: 'Tandem Wing Autonomous UAV capstone project',
    features: [
      'C++',
      'Fully Autonomous',
      'Hermite Interpolation',
      'Richard Cheng Design Award',
      'Selig 1223',
      'Tandem Wings',
    ],
    link: {
      url: 'https://youtu.be/YVHRGaPxaqo',
      label: 'Watch Flight Video',
    },
  },
  {
    slug: 'bpyfoil',
    title: 'BPyFoil',
    subtitle: 'Blender Airfoil Importer and Modeling Aid',
    category: 'Open Source Tool',
    kind: 'aerospace',
    summary:
      "Blender add-on that imports airfoil profiles as editable geometry, aimed at aircraft and wing modelling. Open source under GPLv3.",
    image: bpyfoilImg,
    imageAlt: 'BPyFoil Blender airfoil importer add-on',
    features: ['Blender', 'GPLv3', 'Python'],
    link: {
      url: 'https://github.com/brotherlu/BPyAirfoil',
      label: 'View on GitHub',
    },
  },
  {
    slug: 'event-manager',
    title: 'Event Management',
    subtitle: 'Event Management and Organization Platform',
    category: 'Web Application',
    kind: 'software',
    summary:
      "Platform for organising and managing events, with an Angular front end talking to a Laravel RESTful API.",
    image: quiprImg,
    imageAlt: 'Event Management web application screenshot',
    features: ['Angular', 'Laravel', 'Responsive Design', 'RESTful API', 'SASS'],
  },
  {
    slug: 'qms',
    title: 'QMS',
    subtitle: 'Time Management & Invoicing App with CRM',
    category: 'Web Application',
    kind: 'software',
    summary:
      "Time management, invoicing and CRM in one application, built with Angular and Laravel.",
    image: pqmsImg,
    imageAlt: 'QMS time management, invoicing, and CRM application',
    features: ['Angular', 'jQuery', 'Kendo UI', 'Laravel', 'Responsive Design', 'SASS'],
  },
  {
    slug: 'centre-dappui-aux-communautes-immigrantes',
    title: 'CACI',
    subtitle: "Centre d'Appui aux Communautés Immigrantes",
    category: 'Web Design & Dev',
    kind: 'software',
    summary:
      "WordPress website for a community centre supporting immigrant communities.",
    image: caciImg,
    imageAlt: "Centre d'Appui aux Communautés Immigrantes website",
    features: ['jQuery', 'Responsive Design', 'SASS', 'WordPress'],
    link: {
      url: 'https://caci-bc.org/',
      label: 'Visit Website',
    },
  },
  {
    slug: 'sautrelle-design',
    title: 'Sautrelle Design',
    subtitle: 'Saint-Léonard Montreal Design Studio',
    category: 'Web Design & Dev',
    kind: 'software',
    summary:
      "WordPress website for a design studio in Saint-Léonard, Montréal.",
    image: sautrelleImg,
    imageAlt: 'Sautrelle Design studio website',
    features: ['Responsive Design', 'WordPress'],
    link: {
      url: 'https://sauterelledesign.com/',
      label: 'Visit Website',
    },
  },
];

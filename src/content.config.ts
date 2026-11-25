import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a folder: src/content/projects/<slug>/index.md + cover image.
// The markdown body is optional and shown on the project page.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      category: z.string(),
      kind: z.enum(['aerospace', 'software']),
      order: z.number(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      features: z.array(z.string()),
      link: z.object({ url: z.url(), label: z.string() }).optional(),
    }),
});

// One markdown file per service. Frontmatter holds the title and order,
// the body is the description.
const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({ title: z.string(), order: z.number() }),
});

// Long-form page copy, e.g. src/content/pages/about.md
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string().optional() }),
});

export const collections = { projects, services, pages };

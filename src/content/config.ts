import { z, defineCollection } from 'astro:content'

const Seo = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  noindex: z.boolean().optional(),
  canonical: z.string().optional(),
})

const legalCollection = defineCollection({
  schema: z.object({
    seo: Seo,
  }),
})

export const collections = {
  legal: legalCollection,
}

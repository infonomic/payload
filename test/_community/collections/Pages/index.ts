import { type CollectionConfig } from 'payload'

import { PhotoBlock } from '../../blocks/photo/index.js'
import { RichTextBlock } from '../../blocks/richtext/index.js'
import { editor } from '../../fields/editor/index.js'
import { publishedOn } from '../../fields/published-on/index.js'
import { slugField } from '../../fields/slug/index.js'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    enableRichTextLink: true,
    defaultColumns: ['title', 'publishedOn', '_status'],
    useAsTitle: 'title',
    group: 'Content',
    preview: (doc, { locale }) => {
      if (doc?.slug != null) {
        return `http://localhost:3000/${doc.slug as string}?locale=${locale}`
      }
      return null
    },
  },
  defaultSort: '-publishedOn',
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    create: () => true,
    read: () => true,
    readVersions: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'sub',
              type: 'textarea',
              localized: true,
              admin: {
                description: "Optionally enter a sub-title, sub-tag, or 'lead' for this page.",
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: [RichTextBlock, PhotoBlock],
              required: true,
            },
          ],
        },
      ],
    },
    slugField(),
    publishedOn(),
    editor(),
  ],
}

import type { CollectionConfig } from 'payload'

import { isAdminOrEditor } from '../access/auth'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        'Orchard',
        'Harvesting',
        'Packaging',
        'Export Preparation',
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

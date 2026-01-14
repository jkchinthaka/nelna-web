import type { CollectionConfig } from 'payload'

import { isAdminOrEditor } from '../access/auth'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'featured', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'nutritionalBenefits',
      type: 'array',
      fields: [{ name: 'benefit', type: 'text', required: true }],
    },
    {
      name: 'packagingFormats',
      type: 'array',
      fields: [{ name: 'format', type: 'text', required: true }],
    },
  ],
}

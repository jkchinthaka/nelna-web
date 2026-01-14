import type { CollectionConfig } from 'payload'

import { isAdminOrEditor } from '../access/auth'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    read: isAdminOrEditor,
    create: () => true,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'company', 'email', 'country', 'status', 'createdAt'],
  },
  fields: [
    { name: 'company', type: 'text' },
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'country', type: 'text' },
    { name: 'interest', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In progress', value: 'in_progress' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      access: {
        read: ({ req }) => {
          const user = req.user as { roles?: Array<'admin' | 'editor'> } | null | undefined
          return Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'))
        },
      },
    },
  ],
}

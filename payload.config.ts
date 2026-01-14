import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Gallery } from './src/payload/collections/Gallery'
import { Inquiries } from './src/payload/collections/Inquiries'
import { Media } from './src/payload/collections/Media'
import { Pages } from './src/payload/collections/Pages'
import { Posts } from './src/payload/collections/Posts'
import { Products } from './src/payload/collections/Products'
import { Users } from './src/payload/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Products, Posts, Gallery, Inquiries],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  cors: [process.env.NEXT_PUBLIC_SITE_URL || ''].filter(Boolean),
  csrf: [process.env.NEXT_PUBLIC_SITE_URL || ''].filter(Boolean),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
})

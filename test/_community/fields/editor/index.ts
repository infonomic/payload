import type { Field } from 'payload'
import type { User } from 'payload-types'

import deepMerge from '../../utilities/deepMerge.js'

type Editor = (overrides?: Partial<Field>) => Field

export const editor: Editor = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'editor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ locale, user }: { locale: string; user: User }) => {
        return user.id
      },
      admin: {
        position: 'sidebar',
      },
    },
    overrides,
  )

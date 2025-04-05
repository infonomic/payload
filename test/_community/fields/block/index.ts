import type { Field, GroupField } from 'payload'

import deepMerge from '../../utilities/deepMerge.js'

interface Args {
  fields: Field[]
  name: string
  overrides?: Partial<GroupField>
}

export const blockFields = ({ name, fields, overrides }: Args): Field =>
  deepMerge(
    {
      name,
      label: false,
      type: 'group',
      admin: {
        hideGutter: true,
        style: {
          margin: 0,
          padding: 0,
        },
      },
      fields,
    },
    overrides as object,
  )

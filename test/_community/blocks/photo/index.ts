import type { Block } from 'payload'

import { blockFields } from '../../fields/block/index.js'

export const PhotoBlock: Block = {
  slug: 'photoBlock',
  labels: {
    singular: 'Photo',
    plural: 'Photos',
  },
  interfaceName: 'PhotoBlock',
  fields: [
    blockFields({
      name: 'photoBlockFields',
      fields: [
        {
          name: 'position',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Wide',
              value: 'wide',
            },
            {
              label: 'Full Width',
              value: 'full_width',
            },
          ],
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'useSourcePhotoCaption',
          label: 'Use Source Photo Caption',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    }),
  ],
}

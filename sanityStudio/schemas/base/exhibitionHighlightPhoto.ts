/** @format */

export const exhibitionHighlightPhoto = {
  name: 'exhibitionHighlightPhoto',
  type: 'document',
  title: 'Exhibition Highlights',
  fields: [
    {
      title: 'Photo Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Photo',
      name: 'photoContent',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Show on site?',
      name: 'isShown',
      type: 'boolean',
    },
  ],
}

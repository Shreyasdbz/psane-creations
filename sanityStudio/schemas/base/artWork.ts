export const artWork = {
  name: 'artWork',
  type: 'document',
  title: 'Art Work',
  fields: [
    {
      title: 'Art Work Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Etsy Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Show on site?',
      name: 'isShown',
      type: 'boolean',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'richText',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artWorkCategory' }],
        },
      ],
    },
  ],
}

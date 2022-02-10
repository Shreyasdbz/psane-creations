export const artWork = {
  name: 'artWork',
  type: 'document',
  title: 'Art Work',
  fields: [
    {
      title: 'Art Piece Title',
      name: 'title',
      type: 'string',
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
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Quantity in stock',
      name: 'stockQuantity',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
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
      title: 'Primary Photo',
      name: 'primaryPhoto',
      type: 'image',
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'richText',
    },
  ],
}

export const artWorkCategory = {
  name: 'artWorkCategory',
  type: 'document',
  title: 'Art Work Categories',
  fields: [
    {
      title: 'Category Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Category Logo/Photo',
      name: 'categoryPhoto',
      type: 'image',
    },
    {
      title: 'Display Category?',
      name: 'categoryShown',
      type: 'boolean',
    },
  ],
}

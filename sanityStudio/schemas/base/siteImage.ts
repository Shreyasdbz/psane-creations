/** @format */

export const siteImage = {
  name: 'siteImage',
  type: 'document',
  title: 'Site Images',
  fields: [
    {
      title: 'Image Name',
      name: 'imageName',
      type: 'string',
    },
    {
      title: 'Image Content',
      name: 'imageContent',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

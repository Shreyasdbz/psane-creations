export const exhibition = {
  name: 'exhibition',
  type: 'document',
  title: 'Exhibitions',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Caption / Subtitle',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Date Start',
      name: 'dateStart',
      type: 'date',
      // Default: YYYY-MM-DD
    },
    {
      title: 'Date End',
      name: 'dateEnd',
      type: 'date',
      // Default: YYYY-MM-DD
    },
    {
      title: 'Google Maps Photo',
      name: 'mapsPhoto',
      type: 'image',
    },
    {
      title: 'Google Maps Link',
      name: 'mapsLink',
      type: 'url',
    },
    {
      title: 'Exhibition Booth',
      name: 'booth',
      type: 'string',
    },
  ],
}

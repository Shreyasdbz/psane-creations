type SanityImageType = {
  asset: {
    url: string
  }
}

export type SiteTextType = {
  _id: string
  textName: string
  textContentRaw: any // Portable Text
}

export type SiteImageType = {
  _id: string
  imageName: string
  imageContent: SanityImageType
  link: string
}

export type ArtWorkCategoryType = {
  _id: string
  name: string
  categoryShown: boolean
  selected: boolean
}

export type ArtWorkType = {
  _id: string
  _createdAt: string
  title: string
  category: ArtWorkCategoryType[]
  price: number
  stockQuantity: number
  sku: string
  link: string
  isShown: boolean
  primaryPhoto: SanityImageType
  photos: SanityImageType[]
  descRaw: any
}

export type ExhibitionType = {
  _id: string
  title: string
  caption: string
  dateStart: string
  dateEnd: string
  mapsPhoto: SanityImageType
  mapsLink: string
  booth: string
}

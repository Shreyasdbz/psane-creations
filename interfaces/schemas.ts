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
  categoryShow: boolean
}
export type SectionArtWorkCategoryType = {
  selected: boolean
  _id: string
  name: string
}

export const ART_WORK_CATEGORY_ANY: ArtWorkCategoryType = {
  _id: '__any__',
  name: 'Any',
  categoryShow: true,
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

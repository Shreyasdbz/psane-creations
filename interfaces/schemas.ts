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
}

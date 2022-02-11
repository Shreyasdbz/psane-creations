import { useState, createContext, useEffect } from 'react'

import {
  SiteImageType,
  ArtWorkCategoryType,
  ArtWorkType,
} from '../interfaces/schemas'
import { apolloClient } from '../graphql/apolloClient'
import {
  GET_LANDING_IMAGE_LEFT,
  GET_LANDING_IMAGE_MIDDLE,
  GET_LANDING_IMAGE_RIGHT,
} from '../graphql/queries/siteImage'
import {
  GET_ART_WORK_CATEGORIES,
  GET_ALL_ART_WORK,
} from '../graphql/queries/art'

type SanityContextType = {
  landingImageLeft: SiteImageType | null
  landingImageMiddle: SiteImageType | null
  landingImageRight: SiteImageType | null
  artWorkCategories: ArtWorkCategoryType[] | null
  artWork: ArtWorkType[] | null
}
export const SanityContext = createContext({} as SanityContextType)

type SanityContextProviderProps = {
  children: React.ReactElement | React.ReactElement[]
}

export const SanityContextProvider = ({
  children,
}: SanityContextProviderProps) => {
  const [landingImageLeft, setLandingImageLeft] =
    useState<SiteImageType | null>(null)
  const [landingImageMiddle, setLandingImageMiddle] =
    useState<SiteImageType | null>(null)
  const [landingImageRight, setLandingImageRight] =
    useState<SiteImageType | null>(null)
  const [artWorkCategories, setArtWorkCategories] = useState<
    ArtWorkCategoryType[] | null
  >(null)
  const [artWork, setArtWork] = useState<ArtWorkType[] | null>(null)

  async function _get_cms_data() {
    //
    //   GET Landing Images
    await apolloClient
      .query({
        query: GET_LANDING_IMAGE_LEFT,
      })
      .then((res) => {
        setLandingImageLeft(res.data.allSiteImage[0])
      })
    await apolloClient
      .query({
        query: GET_LANDING_IMAGE_MIDDLE,
      })
      .then((res) => {
        setLandingImageMiddle(res.data.allSiteImage[0])
      })
    await apolloClient
      .query({
        query: GET_LANDING_IMAGE_RIGHT,
      })
      .then((res) => {
        setLandingImageRight(res.data.allSiteImage[0])
      })
    //
    // Get Art Data
    await apolloClient
      .query({
        query: GET_ART_WORK_CATEGORIES,
      })
      .then((res) => {
        setArtWorkCategories(res.data.allArtWorkCategory)
      })
    await apolloClient
      .query({
        query: GET_ALL_ART_WORK,
      })
      .then((res) => {
        setArtWork(res.data.allArtWork)
      })
  }

  useEffect(() => {
    _get_cms_data()
  }, [])

  return (
    <SanityContext.Provider
      value={{
        landingImageLeft,
        landingImageMiddle,
        landingImageRight,
        artWorkCategories,
        artWork,
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

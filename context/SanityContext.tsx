import { useState, createContext, useEffect } from 'react'

import { SiteImageType } from '../interfaces/schemas'
import { apolloClient } from '../graphql/apolloClient'
import {
  GET_LANDING_IMAGE_LEFT,
  GET_LANDING_IMAGE_MIDDLE,
  GET_LANDING_IMAGE_RIGHT,
} from '../graphql/queries/siteImage'

type SanityContextType = {
  landingImageLeft: SiteImageType | null
  landingImageMiddle: SiteImageType | null
  landingImageRight: SiteImageType | null
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

  async function _get_cms_data() {
    //
    //   GET Landing Images
    const _landing_image_left = await apolloClient.query({
      query: GET_LANDING_IMAGE_LEFT,
    })
    setLandingImageLeft(_landing_image_left.data.allSiteImage[0])
    const _landing_image_middle = await apolloClient.query({
      query: GET_LANDING_IMAGE_MIDDLE,
    })
    setLandingImageMiddle(_landing_image_middle.data.allSiteImage[0])
    const _landing_image_right = await apolloClient.query({
      query: GET_LANDING_IMAGE_RIGHT,
    })
    setLandingImageRight(_landing_image_right.data.allSiteImage[0])
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
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

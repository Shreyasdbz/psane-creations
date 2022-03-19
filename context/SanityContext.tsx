import { useState, createContext, useEffect } from 'react'

import {
  SiteImageType,
  ArtWorkCategoryType,
  ArtWorkType,
  TestimonialType,
  ExhibitionType,
  SiteTextType,
  ExhibitionHighlightPhotoType,
} from '../interfaces/schemas'
import { CATEGORY_ANY_ID } from '../lib/constants'
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
import {
  GET_EXHIBITIONS,
  GET_EXHIBITION_HIGHLIGHT_PHOTOS,
} from '../graphql/queries/exhibition'
import { GET_PROFILE_PICTURE } from '../graphql/queries/siteImage'
import { GET_BIO, GET_BANNER } from '../graphql/queries/siteText'
import { GET_TESTIMONIALS } from '../graphql/queries/testimonial'
import {
  sortArtWorkCategoriesByName,
  sortArtWorkByDate,
  mapArtWorkCategories,
  displayArtByCategory,
} from '../lib/art'
import { sortTestimonialsByDate } from '../lib/about'
import {
  sortExhibitionsByStartDate,
  getNextExhibition,
  getFutureExhibitions,
} from '../lib/exhibitions'

type SanityContextType = {
  bannerText: SiteTextType | null
  landingImageLeft: SiteImageType | null
  landingImageMiddle: SiteImageType | null
  landingImageRight: SiteImageType | null
  artWorkCategories: ArtWorkCategoryType[] | null
  artWork: ArtWorkType[] | null
  nextExhibition: ExhibitionType | null
  futureExhibitions: ExhibitionType[] | null
  exhibitionHighlightsPhotos: ExhibitionHighlightPhotoType[] | null
  profilePicture: SiteImageType | null
  bio: SiteTextType | null
  testimonials: TestimonialType[] | null
  categoryChangeListener: boolean
  getCategorySelectionStatus: (categoryId: string) => boolean
  handleCategoryToggle: (categoryId: string) => void
}
export const SanityContext = createContext({} as SanityContextType)

type SanityContextProviderProps = {
  children: React.ReactElement | React.ReactElement[]
}

export const SanityContextProvider = ({
  children,
}: SanityContextProviderProps) => {
  const [bannerText, setBannerText] = useState<SiteTextType | null>(null)

  const [landingImageLeft, setLandingImageLeft] =
    useState<SiteImageType | null>(null)

  const [landingImageMiddle, setLandingImageMiddle] =
    useState<SiteImageType | null>(null)

  const [landingImageRight, setLandingImageRight] =
    useState<SiteImageType | null>(null)

  const [artWorkCategories, setArtWorkCategories] = useState<
    ArtWorkCategoryType[] | null
  >(null)

  const [_unfilteredArtWork, _setUnfilteredArtWork] = useState<
    ArtWorkType[] | null
  >(null)

  const [artWork, setArtWork] = useState<ArtWorkType[] | null>(null)

  const [_unfilteredExhibitions, _setUnfilteredExhibitions] = useState<
    ExhibitionType[] | null
  >(null)

  const [nextExhibition, setNextExhibition] = useState<ExhibitionType | null>(
    null
  )

  const [futureExhibitions, setFutureExhibitions] = useState<
    ExhibitionType[] | null
  >(null)

  const [exhibitionHighlightsPhotos, setExhibitionHighlightsPhotos] = useState<
    ExhibitionHighlightPhotoType[] | null
  >(null)

  const [profilePicture, setProfilePicture] = useState<SiteImageType | null>(
    null
  )

  const [bio, setBio] = useState<SiteTextType | null>(null)

  const [testimonials, setTestimonials] = useState<TestimonialType[] | null>(
    null
  )

  const [categoryChangeListener, setCategoryChangeListener] =
    useState<boolean>(false)

  async function _get_cms_data() {
    await apolloClient
      .query({
        query: GET_BANNER,
      })
      .then((res) => {
        setBannerText(res.data.allSiteText[0])
      })
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
    await apolloClient
      .query({
        query: GET_ART_WORK_CATEGORIES,
      })
      .then((res) => {
        setArtWorkCategories(
          mapArtWorkCategories(
            sortArtWorkCategoriesByName(res.data.allArtWorkCategory)
          )
        )
      })
    await apolloClient
      .query({
        query: GET_ALL_ART_WORK,
      })
      .then((res) => {
        _setUnfilteredArtWork(sortArtWorkByDate(res.data.allArtWork))
        setArtWork(sortArtWorkByDate(res.data.allArtWork))
      })
    await apolloClient
      .query({
        query: GET_EXHIBITIONS,
      })
      .then((res) => {
        _setUnfilteredExhibitions(
          sortExhibitionsByStartDate(res.data.allExhibition)
        )
        setNextExhibition(
          getNextExhibition(sortExhibitionsByStartDate(res.data.allExhibition))
        )
        setFutureExhibitions(
          getFutureExhibitions(
            sortExhibitionsByStartDate(res.data.allExhibition)
          )
        )
      })
    await apolloClient
      .query({
        query: GET_EXHIBITION_HIGHLIGHT_PHOTOS,
      })
      .then((res) => {
        setExhibitionHighlightsPhotos(res.data.allExhibitionHighlightPhoto)
      })
    await apolloClient
      .query({
        query: GET_PROFILE_PICTURE,
      })
      .then((res) => {
        setProfilePicture(res.data.allSiteImage[0])
      })
    await apolloClient
      .query({
        query: GET_BIO,
      })
      .then((res) => {
        setBio(res.data.allSiteText[0])
      })
    await apolloClient
      .query({
        query: GET_TESTIMONIALS,
      })
      .then((res) => {
        setTestimonials(sortTestimonialsByDate(res.data.allTestimonial))
      })
  }

  function handleCategoryToggle(categoryId: string) {
    let _artWorkCategories = artWorkCategories

    if (_artWorkCategories) {
      // Case 1: [some category] gets selected
      if (categoryId !== CATEGORY_ANY_ID) {
        for (let c of _artWorkCategories) {
          if (c._id === CATEGORY_ANY_ID) c.selected = false
          if (c._id === categoryId) c.selected = !c.selected
        }
      }

      // Case 2: `Any` gets selected
      else {
        for (let c of _artWorkCategories) {
          if (c._id === CATEGORY_ANY_ID) c.selected = true
          c.selected = false
        }
      }

      // Check if all are now unselected
      let allUnselected = true
      for (let c of _artWorkCategories) {
        if (c.selected) {
          allUnselected = false
          break
        }
      }
      if (allUnselected === true) {
        for (let c of _artWorkCategories) {
          if (c._id === CATEGORY_ANY_ID) c.selected = true
        }
      }
    }

    setArtWorkCategories(_artWorkCategories)
    setCategoryChangeListener(!categoryChangeListener)
    if (_unfilteredArtWork && artWorkCategories)
      setArtWork(displayArtByCategory(_unfilteredArtWork, artWorkCategories))
  }

  function getCategorySelectionStatus(categoryId: string): boolean {
    if (!artWorkCategories) return false

    for (let i of artWorkCategories) {
      if (i._id === categoryId) return i.selected
    }

    return false
  }

  useEffect(() => {
    _get_cms_data()
  }, [])

  return (
    <SanityContext.Provider
      value={{
        bannerText,
        landingImageLeft,
        landingImageMiddle,
        landingImageRight,
        artWorkCategories,
        artWork,
        nextExhibition,
        futureExhibitions,
        exhibitionHighlightsPhotos,
        profilePicture,
        bio,
        testimonials,
        categoryChangeListener,
        getCategorySelectionStatus,
        handleCategoryToggle,
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

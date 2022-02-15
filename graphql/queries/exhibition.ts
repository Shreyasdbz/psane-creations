import { gql } from '@apollo/client'

export const GET_EXHIBITIONS = gql`
  query {
    allExhibition {
      _id
      title
      caption
      dateStart
      dateEnd
      mapsPhoto {
        asset {
          url
        }
      }
      mapsLink
      booth
    }
  }
`

export const GET_EXHIBITION_HIGHLIGHT_PHOTOS = gql`
  query {
    allExhibitionHighlightPhoto {
      _id
      title
      photoContent {
        _key
        asset {
          url
        }
      }
      isShown
    }
  }
`

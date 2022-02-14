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

import { gql } from '@apollo/client'

export const GET_ART_WORK_CATEGORIES = gql`
  query {
    allArtWorkCategory {
      _id
      name
      categoryShown
    }
  }
`

export const GET_ALL_ART_WORK = gql`
  query {
    allArtWork {
      _id
      title
      category {
        _id
        name
      }
      price
      stockQuantity
      sku
      link
      isShown
      primaryPhoto {
        asset {
          url
        }
      }
      photos {
        _key
        asset {
          url
        }
      }
      descRaw
    }
  }
`

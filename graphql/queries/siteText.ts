import { gql } from '@apollo/client'

export const GET_BIO = gql`
  query {
    allSiteText(where: { textName: { eq: "bio" } }) {
      _id
      textName
      textContentRaw
    }
  }
`
export const GET_BANNER = gql`
  query {
    allSiteText(where: { textName: { eq: "landingPageBanner" } }) {
      _id
      textName
      textContentRaw
    }
  }
`

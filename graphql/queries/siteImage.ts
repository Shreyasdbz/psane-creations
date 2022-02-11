import { gql } from '@apollo/client'

export const GET_PROFILE_PICTURE = gql`
  query {
    allSiteImage(where: { imageName: { eq: "profilePicture" } }) {
      _id
      imageName
      imageContent {
        _key
        asset {
          url
        }
      }
    }
  }
`

export const GET_LANDING_IMAGE_LEFT = gql`
  query {
    allSiteImage(where: { imageName: { eq: "landingImageLeft" } }) {
      _id
      imageName
      imageContent {
        _key
        asset {
          url
        }
      }
      link
    }
  }
`

export const GET_LANDING_IMAGE_MIDDLE = gql`
  query {
    allSiteImage(where: { imageName: { eq: "landingImageMiddle" } }) {
      _id
      imageName
      imageContent {
        _key
        asset {
          url
        }
      }
      link
    }
  }
`

export const GET_LANDING_IMAGE_RIGHT = gql`
  query {
    allSiteImage(where: { imageName: { eq: "landingImageRight" } }) {
      _id
      imageName
      imageContent {
        _key
        asset {
          url
        }
      }
      link
    }
  }
`

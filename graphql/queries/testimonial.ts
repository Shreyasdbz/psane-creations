import { gql } from '@apollo/client'

export const GET_TESTIMONIALS = gql`
  query {
    allTestimonial {
      _id
      text
      date
      user
    }
  }
`

import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URI,
  cache: new InMemoryCache(),
})

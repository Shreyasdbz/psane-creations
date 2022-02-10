import '../styles/main.css'

import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '../graphql/apolloClient'
import { UiContextProvider } from '../context/UiContext'
import { SanityContextProvider } from '../context/SanityContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <UiContextProvider>
        <SanityContextProvider>
          <Component {...pageProps} />
        </SanityContextProvider>
      </UiContextProvider>
    </ApolloProvider>
  )
}

export default MyApp

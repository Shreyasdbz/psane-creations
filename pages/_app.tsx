import '../styles/main.css'
import type { AppProps } from 'next/app'
import { UiContextProvider } from '../context/UiContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <Component {...pageProps} />
    </UiContextProvider>
  )
}

export default MyApp

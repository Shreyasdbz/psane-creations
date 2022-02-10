import Head from 'next/head'

import About from '../components/views/About'
import ArtWork from '../components/views/ArtWork'
import Exhibitions from '../components/views/Exhibitions'
import Landing from '../components/views/Landing'

import PageContainer from '../components/base/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>PSane Creations</title>
      </Head>
      <PageContainer>
        <Landing />
        <ArtWork />
        <Exhibitions />
        <About />
      </PageContainer>
    </>
  )
}

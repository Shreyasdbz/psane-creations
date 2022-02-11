import { useContext } from 'react'

import { SanityContext } from '../../context/SanityContext'

import SectionContainer from '../base/SectionContainer'
import SectionTitle from '../base/SectionTitle'
import ArtWorkCategories from '../base/ArtWorkCategories'

const ArtWork = () => {
  const artWorkCategories = useContext(SanityContext).artWorkCategories
  const artWork = useContext(SanityContext).artWork

  return (
    <SectionContainer sectionId="section-artWork">
      <SectionTitle>Art Work</SectionTitle>
      <ArtWorkCategories />
    </SectionContainer>
  )
}

export default ArtWork

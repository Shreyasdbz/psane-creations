import SectionContainer from '../base/SectionContainer'
import SectionTitle from '../base/SectionTitle'
import ArtWorkCategories from '../util/ArtWorkCategories'
import ArtWorkGrid from '../util/ArtWorkGrid'

const ArtWork = () => {
  return (
    <SectionContainer sectionId="section-artWork">
      <SectionTitle>Art Work</SectionTitle>
      <ArtWorkCategories />
      <ArtWorkGrid />
    </SectionContainer>
  )
}

export default ArtWork

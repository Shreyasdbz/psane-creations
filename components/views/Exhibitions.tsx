import CaptionText from '../base/CaptionText'
import SectionContainer from '../base/SectionContainer'
import SectionTitle from '../base/SectionTitle'
import NextExhibition from '../util/NextExhibition'
import FutureExhibitions from '../util/FutureExhibitions'
import ExhibitionHighlights from '../util/ExhibitionHighlights'

const Exhibtions = () => {
  return (
    <SectionContainer sectionId="section-exhibitions">
      <SectionTitle>Exhibitions</SectionTitle>
      <CaptionText align="start">UP NEXT</CaptionText>
      <NextExhibition />
      <CaptionText align="start">IN THE FUTURE</CaptionText>
      <FutureExhibitions />
      <CaptionText align="start">EXHIBITION HIGHLIGHTS</CaptionText>
      <ExhibitionHighlights />
    </SectionContainer>
  )
}

export default Exhibtions

import CaptionText from '../base/CaptionText'
import SectionContainer from '../base/SectionContainer'
import SectionTitle from '../base/SectionTitle'
import NextExhibition from '../util/NextExhibition'
import FutureExhibitions from '../util/FutureExhibitions'

const Exhibtions = () => {
  return (
    <SectionContainer sectionId="section-exhibitions">
      <SectionTitle>Exhibitions</SectionTitle>
      <CaptionText align="start">UP NEXT</CaptionText>
      <NextExhibition />
      <CaptionText align="start">IN THE FUTURE</CaptionText>
      <FutureExhibitions />
    </SectionContainer>
  )
}

export default Exhibtions

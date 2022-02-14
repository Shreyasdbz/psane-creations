import CaptionText from '../base/CaptionText'
import SectionContainer from '../base/SectionContainer'
import SectionTitle from '../base/SectionTitle'
import Bio from '../util/Bio'
import Testimonials from '../util/Testimonials'

const About = () => {
  return (
    <SectionContainer sectionId="section-about">
      <SectionTitle>About</SectionTitle>
      <CaptionText align="start">ABOUT ME</CaptionText>
      <Bio />
      <CaptionText align="start">CUSTOMER TESTIMONIALS</CaptionText>
      <Testimonials />
    </SectionContainer>
  )
}

export default About

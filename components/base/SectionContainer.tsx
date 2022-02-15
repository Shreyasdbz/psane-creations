import { useContext } from 'react'

import { UiContext } from '../../context/UiContext'

import BlurLayer from './BlurLayer'

type SectionContainerProps = {
  sectionId:
    | 'section-landing'
    | 'section-artWork'
    | 'section-exhibitions'
    | 'section-about'
    | 'section-error'
  children: React.ReactElement | React.ReactElement[]
}
const SectionContainer = ({ sectionId, children }: SectionContainerProps) => {
  const mobileNavMenuActive = useContext(UiContext).mobileNavMenuActive
  const modalActive = useContext(UiContext).modalActive

  return (
    <div
      id={sectionId}
      className="relative flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-cover pt-24 lg:pt-32"
    >
      {/* {sectionId === 'section-landing' && <Blobs_A />} */}
      {(mobileNavMenuActive || modalActive) && <BlurLayer />}
      <div className="z-10 flex w-screen flex-col items-center justify-center overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}

export default SectionContainer

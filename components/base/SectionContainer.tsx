import { useContext } from 'react'

import { UiContext } from '../../context/UiContext'

import BlurLayer from './BlurLayer'

type SectionContainerProps = {
  sectionId: string
  children: React.ReactElement | React.ReactElement[]
}
const SectionContainer = ({ sectionId, children }: SectionContainerProps) => {
  const mobileNavMenuActive = useContext(UiContext).mobileNavMenuActive
  const modalActive = useContext(UiContext).modalActive
  return (
    <div
      id={sectionId}
      className="z-0 flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden"
    >
      {(mobileNavMenuActive || modalActive) && <BlurLayer />}
      {children}
    </div>
  )
}

export default SectionContainer

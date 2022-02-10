import { useContext } from 'react'

import { UiContext } from '../../context/UiContext'

import BlurLayer from './BlurLayer'

const Blobs_A = () => {
  return (
    <>
      <div className="absolute bottom-1/3 z-0 h-48 w-48 rounded-full bg-red-400 opacity-70 mix-blend-multiply blur-2xl filter lg:h-72 lg:w-72" />
      <div className="absolute top-1/3 left-1/2 z-0 h-48 w-48 rounded-full bg-lime-400 opacity-70 mix-blend-multiply blur-2xl filter lg:h-72 lg:w-72" />
      <div className="absolute top-1/2 right-1/2 z-0 h-48 w-48 rounded-full bg-amber-400 opacity-70 mix-blend-multiply blur-2xl filter lg:h-72 lg:w-72" />
    </>
  )
}

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
      className="relative flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden pt-24 lg:pt-32"
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

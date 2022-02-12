import { useContext } from 'react'
import { HiStar, HiShoppingBag } from 'react-icons/hi'
import { Link } from 'react-scroll'

import { SanityContext } from '../../context/SanityContext'

import ErrorSection from '../base/ErrorSection'
import SectionContainer from '../base/SectionContainer'
import EtsyStars from '../util/EtsyStars'

const Landing = () => {
  const landingImageLeft = useContext(SanityContext).landingImageLeft
  const landingImageMiddle = useContext(SanityContext).landingImageMiddle
  const landingImageRight = useContext(SanityContext).landingImageRight

  if (!landingImageLeft || !landingImageMiddle || !landingImageRight)
    return <ErrorSection />

  return (
    <SectionContainer sectionId="section-landing">
      {/* Landing Images */}
      <div className="banner-images flex w-full items-center justify-center overflow-x-hidden lg:gap-1">
        {landingImageLeft && (
          <a
            href={landingImageLeft.link}
            target="_blank"
            rel="noreferrer"
            className="hover-bounce"
          >
            <img
              src={landingImageLeft.imageContent.asset.url}
              alt={landingImageLeft.imageName}
              className="hidden h-32 w-auto object-cover opacity-80 shadow-xl lg:block lg:h-104 lg:w-128"
            />
          </a>
        )}
        {landingImageMiddle && (
          <a
            href={landingImageMiddle.link}
            target="_blank"
            rel="noreferrer"
            className="hover-bounce "
          >
            <img
              src={landingImageMiddle.imageContent.asset.url}
              alt={landingImageMiddle.imageName}
              className="h-auto w-full shadow-xl lg:h-104 lg:w-auto"
            />
          </a>
        )}
        {landingImageRight && (
          <a
            href={landingImageRight.link}
            target="_blank"
            rel="noreferrer"
            className="hover-bounce"
          >
            <img
              src={landingImageRight.imageContent.asset.url}
              alt={landingImageRight.imageName}
              className="hidden h-32 w-auto object-cover opacity-80 shadow-xl lg:block lg:h-104 lg:w-128"
            />
          </a>
        )}
      </div>

      {/* Caption */}
      <main>
        <span className="py-6 text-2xl font-light italic text-gray-500">
          passion and inspiration at work
        </span>
      </main>

      {/* Etsy Store Rating */}
      <EtsyStars />

      {/* Actions */}
      <main className="mb-10 flex-col gap-4 py-4 lg:flex-row">
        <a
          href="https://www.etsy.com/shop/PsaneCreations"
          target={'_blank'}
          rel="noreferrer"
        >
          <button className="hover-bounce flex flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 font-semibold text-white shadow-lg shadow-orange-500/25">
            <HiShoppingBag className="text-xl" />
            <span className="text-xl">Etsy Store</span>
          </button>
        </a>
        <Link to="section-artWork" smooth={true}>
          <button className="hover-bounce rounded-xl bg-red-100 px-6 py-2 text-xl font-semibold text-red-800 shadow-lg shadow-red-200/25">
            Browse
          </button>
        </Link>
      </main>
    </SectionContainer>
  )
}

export default Landing

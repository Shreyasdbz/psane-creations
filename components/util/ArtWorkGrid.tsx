import { useContext } from 'react'
import { HiLink } from 'react-icons/hi'

import { ArtWorkType } from '../../interfaces/schemas'
import { SanityContext } from '../../context/SanityContext'
import { ETSY_SHOP_URL } from '../../lib/constants'
import { trackArtWorkClick } from '../../lib/analytics'

type ArtWorkGridTileProps = {
  art: ArtWorkType
}
const ArtWorkGridTile = ({ art }: ArtWorkGridTileProps) => {
  return (
    <a
      // href={art.link}
      href={ETSY_SHOP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackArtWorkClick(art.title)
      }}
      className="flex h-full w-full items-center justify-center px-1 py-4 md:px-2 md:py-6"
    >
      <div className="hover-bounce flex h-full w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="top w-full">
          <img
            src={art.primaryPhoto.asset.url}
            alt={`${art.title} photo`}
            className="h-48 w-full object-cover md:h-56 lg:h-64"
          />
        </div>
        <div className="bottom flex h-full flex-col items-start justify-between gap-8 px-4 py-2">
          <div className="info flex flex-col items-start justify-center gap-2">
            <span className="float-left text-lg font-semibold">
              {art.title}
            </span>
            {/* <span className="text-md font-semibold text-gray-600">
              $ {art.price}
            </span> */}
          </div>
          <div className="link">
            <div className="text-md flex w-full items-center justify-start gap-1 font-bold text-orange-500">
              <HiLink /> ETSY
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

const ArtWorkGrid = () => {
  const artWork = useContext(SanityContext).artWork

  if (!artWork) return <span>Couldn't load art work :(</span>

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {artWork.map((a) => {
        if (a.stockQuantity > 0) return <ArtWorkGridTile key={a._id} art={a} />
      })}
    </main>
  )
}

export default ArtWorkGrid

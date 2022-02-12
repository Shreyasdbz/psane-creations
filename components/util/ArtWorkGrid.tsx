import { useContext } from 'react'

import { ArtWorkType } from '../../interfaces/schemas'
import { SanityContext } from '../../context/SanityContext'

type ArtWorkGridTileProps = {
  art: ArtWorkType
}
const ArtWorkGridTile = ({ art }: ArtWorkGridTileProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center px-1 py-4 md:px-2 md:py-6">
      <div className="hover-bounce flex h-full w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-white shadow-md">
        <div className="top w-full">
          <img
            src={art.primaryPhoto.asset.url}
            alt={`${art.title} photo`}
            className="h-48 w-full object-cover md:h-56 lg:h-64"
          />
        </div>
        <div className="bottom flex h-full flex-col items-start justify-between gap-8 px-4 py-2">
          <div className="info flex flex-col gap-2">
            <span>{art.title}</span>
            <span>{art.price}</span>
          </div>
          <div className="link">
            <a href={art.link}>
              {' '}
              <span>ETSY</span>{' '}
            </a>
          </div>
        </div>
      </div>{' '}
    </div>
  )
}

const ArtWorkGrid = () => {
  const artWork = useContext(SanityContext).artWork

  if (!artWork) return <span>Couldn't load art work :(</span>

  console.log(artWork)

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {artWork.map((a) => {
        return <ArtWorkGridTile key={a._id} art={a} />
      })}
    </main>
  )
}

export default ArtWorkGrid

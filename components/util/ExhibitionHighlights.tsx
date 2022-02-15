import { useContext } from 'react'
import { SanityContext } from '../../context/SanityContext'
const ExhibitionHighlights = () => {
  const highlights = useContext(SanityContext).exhibitionHighlightsPhotos

  if (!highlights)
    return <span>Couldn't load exhibition highlight photos </span>

  return (
    <div className="mt-2 mb-4 flex w-full flex-row items-center justify-start gap-2 overflow-x-scroll px-4">
      {highlights.map((p) => {
        if (!p.isShown) return <></>
        return (
          <div
            key={p._id}
            className="mt-2 mb-4 flex w-full flex-col items-center justify-center gap-2"
          >
            <img
              src={p.photoContent.asset.url}
              alt={p.title}
              title={p.title}
              className="h-80 w-full min-w-56 rounded-lg object-cover shadow-lg lg:w-auto lg:max-w-md"
            />
            <span className="flex items-center justify-center font-semibold italic text-gray-500">
              {p.title}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default ExhibitionHighlights

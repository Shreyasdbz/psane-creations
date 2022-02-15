import { useContext } from 'react'

import { SanityContext } from '../../context/SanityContext'
import { getFancyDateString } from '../../lib/exhibitions'

const FutureExhibitions = () => {
  const exhibitions = useContext(SanityContext).futureExhibitions

  if (!exhibitions)
    return (
      <div>
        <span className="my-8 text-xl font-semibold">
          No upcoming exhibitions as of now :()
        </span>
      </div>
    )

  return (
    <main className="mt-4 mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {exhibitions.map((e) => {
        let boothExists = false
        try {
          if (e.booth) boothExists = true
        } catch (err) {}

        return (
          <a
            href={e.mapsLink}
            target="_blank"
            rel="noreferrer"
            key={e._id}
            className="hover-bounce flex h-72 w-full flex-col items-center justify-start overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <img
              src={e.mapsPhoto.asset.url}
              alt={`${e.title} maps photo`}
              className="h-40 w-full object-cover"
            />
            <div className="flex w-full flex-col items-start justify-between px-4 py-2">
              <div className="flex w-full flex-col items-start justify-center">
                <span className="text-xl font-semibold">{e.title}</span>
                <span className="text-md font-semibold text-gray-500">
                  {e.caption}
                </span>
                <span className="text-lg font-light text-gray-500">
                  {getFancyDateString(e.dateStart)} -{' '}
                  {getFancyDateString(e.dateEnd)}
                </span>
              </div>
              <div className="flex w-full justify-end">
                {boothExists && (
                  <span className="font-lg font-semibold text-gray-500">
                    BOOTH {e.booth}
                  </span>
                )}
              </div>
            </div>
          </a>
        )
      })}
    </main>
  )
}

export default FutureExhibitions

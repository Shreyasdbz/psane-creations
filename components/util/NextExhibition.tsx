import { useContext } from 'react'

import { SanityContext } from '../../context/SanityContext'
import { getFancyDateString } from '../../lib/exhibitions'
import { trackMapClick } from '../../lib/analytics'

const NextExhibition = () => {
  const exhibition = useContext(SanityContext).nextExhibition

  if (!exhibition)
    return (
      <div>
        <span className="my-8 text-xl font-semibold">
          No upcoming exhibitions as of now :()
        </span>
      </div>
    )

  let boothExists = false
  try {
    if (exhibition.booth) boothExists = true
  } catch (err) {}
  let captionExists = false
  try {
    if (exhibition.caption) captionExists = true
  } catch (err) {}

  return (
    <main className="mt-4 mb-10">
      <a
        href={exhibition.mapsLink}
        target="_blank"
        rel="noreferrer"
        key={exhibition._id}
        onClick={() => {
          trackMapClick(exhibition.title)
        }}
        className="hover-bounce lg:items-between flex h-72 w-full flex-col items-center justify-start overflow-hidden rounded-xl bg-white shadow-lg lg:h-60 lg:flex-row-reverse"
      >
        <img
          src={exhibition.mapsPhoto.asset.url}
          alt={`${exhibition.title} maps photo`}
          className="h-40 w-full object-cover lg:h-full lg:w-auto lg:max-w-lg"
        />
        <div className="flex w-full flex-col items-start justify-between px-4 py-2 lg:h-full">
          <div className="flex w-full flex-col items-start justify-center">
            <span className="text-xl font-semibold lg:text-2xl">
              {exhibition.title}
            </span>
            {captionExists && (
              <span className="text-md font-semibold text-gray-500 lg:text-lg">
                {exhibition.caption}
              </span>
            )}
            <span className="text-lg font-light text-gray-500 lg:text-xl">
              {getFancyDateString(exhibition.dateStart)} -{' '}
              {getFancyDateString(exhibition.dateEnd)}
            </span>
          </div>
          <div className="flex w-full justify-end">
            {boothExists && (
              <span className="font-lg font-semibold text-gray-500 lg:text-xl">
                BOOTH {exhibition.booth}
              </span>
            )}
          </div>
        </div>
      </a>{' '}
    </main>
  )
}

export default NextExhibition

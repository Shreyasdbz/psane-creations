import { useContext } from 'react'
import { PortableText } from '@portabletext/react'

import { SanityContext } from '../../context/SanityContext'

const Bio = () => {
  const profilePicture = useContext(SanityContext).profilePicture
  const bio = useContext(SanityContext).bio

  if (!profilePicture || !bio)
    return <span>Couldn't fetch the bio or profile picture</span>

  return (
    <main>
      <div className="mt-8 mb-10 flex w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-4 shadow-xl lg:flex-row">
        <img
          src={profilePicture.imageContent.asset.url}
          alt="profile picture"
          className="h-42 w-42 h-60 w-60 rounded-full object-cover"
        />
        <PortableText value={bio.textContentRaw} />
      </div>
    </main>
  )
}

export default Bio

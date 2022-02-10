import { HiStar } from 'react-icons/hi'

import CaptionText from '../base/CaptionText'

const EtsyStars = () => {
  const etsyRating = 5
  return (
    <main>
      <CaptionText align="center">ETSY STORE RATING</CaptionText>
      <div className="flex flex-row gap-0">
        {[...Array(etsyRating)].map((s, i) => {
          return <HiStar key={i} className="h-8 w-8 text-amber-400" />
        })}
      </div>
    </main>
  )
}

export default EtsyStars

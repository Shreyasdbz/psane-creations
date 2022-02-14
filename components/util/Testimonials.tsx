import { useContext } from 'react'

import { SanityContext } from '../../context/SanityContext'
import { getFancyDateString } from '../../lib/exhibitions'

const Testimonials = () => {
  const testimonials = useContext(SanityContext).testimonials

  if (!testimonials) return <span>Couldn't fetch testimonials</span>

  return (
    <main className="mt-8 mb-20 gap-6">
      {testimonials.map((t) => {
        return (
          <div
            key={t._id}
            className="flex w-full flex-col items-start justify-center gap-4 rounded-xl  px-4 py-4 shadow-md"
          >
            <p className="px-4 text-lg font-semibold italic text-gray-500">
              {t.text}
            </p>
            <div className="flex w-full items-center justify-end gap-2">
              <span className="font-semibold">{t.user} -</span>
              <span>{getFancyDateString(t.date)}</span>
            </div>
          </div>
        )
      })}
    </main>
  )
}
export default Testimonials

import { useContext, useState, useEffect } from 'react'

import { ArtWorkCategoryType } from '../../interfaces/schemas'
import { SanityContext } from '../../context/SanityContext'

type ArtWorkCategoryLabelProps = {
  cat: ArtWorkCategoryType
}
const ArtWorkCategoryLabel = ({ cat }: ArtWorkCategoryLabelProps) => {
  const categoryChangeListener =
    useContext(SanityContext).categoryChangeListener
  const handleCategoryToggle = useContext(SanityContext).handleCategoryToggle
  const selectionStatus = useContext(SanityContext).getCategorySelectionStatus
  const [status, setStatus] = useState(selectionStatus(cat._id))

  useEffect(() => {
    setStatus(selectionStatus(cat._id))
  }, [categoryChangeListener])

  if (cat.categoryShown === false) return <></>

  if (status === true) {
    return (
      <div
        key={cat._id}
        onClick={() => {
          handleCategoryToggle(cat._id)
          setStatus(selectionStatus(cat._id))
        }}
        className="hover-bounce my-4 rounded-lg bg-red-800 py-2 px-4 font-bold text-white shadow-lg shadow-red-200/25 lg:my-4"
      >
        <span>{cat.name}</span>
      </div>
    )
  } else {
    return (
      <div
        key={cat._id}
        onClick={() => {
          handleCategoryToggle(cat._id)
          setStatus(selectionStatus(cat._id))
        }}
        className="hover-bounce my-4 rounded-lg bg-red-100 py-2 px-4 font-bold text-red-800 shadow-lg shadow-red-200/25 lg:my-4"
      >
        <span>{cat.name}</span>
      </div>
    )
  }
}

const ArtWorkCategories = () => {
  const artWorkCategories = useContext(SanityContext).artWorkCategories

  if (!artWorkCategories) return <span>Couldn't fetch Art Work Categories</span>

  return (
    <main className="flex-row justify-start gap-2 overflow-x-scroll whitespace-nowrap lg:gap-4">
      {artWorkCategories.map((c) => {
        if (c) {
          return <ArtWorkCategoryLabel cat={c} key={c._id} />
        }
      })}
    </main>
  )
}

export default ArtWorkCategories

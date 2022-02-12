import { useContext } from 'react'

import { ART_WORK_CATEGORY_ANY } from '../../interfaces/schemas'
import { SanityContext } from '../../context/SanityContext'

type CategoryLabelProps = {
  categoryId: string
  categoryText: string
}
const CategoryLabel = ({ categoryId, categoryText }: CategoryLabelProps) => {
  return (
    <div className="hover-bounce my-4 rounded-lg bg-red-100 py-2 px-4 font-bold text-red-800 shadow-lg shadow-red-200/25 lg:my-4">
      <span>{categoryText}</span>
    </div>
  )
}

const ArtWorkCategories = () => {
  const artWorkCategories = useContext(SanityContext).artWorkCategories

  if (!artWorkCategories) return <span>Couldn't fetch Art Work Categories</span>

  return (
    <main className="flex-row justify-start gap-2 overflow-x-scroll whitespace-nowrap lg:gap-4">
      <CategoryLabel
        categoryId={ART_WORK_CATEGORY_ANY._id}
        categoryText={ART_WORK_CATEGORY_ANY.name}
      />
      {artWorkCategories.map((c) => {
        return (
          <CategoryLabel key={c._id} categoryId={c._id} categoryText={c.name} />
        )
      })}
    </main>
  )
}

export default ArtWorkCategories

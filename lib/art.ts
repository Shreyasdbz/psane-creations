import { ArtWorkCategoryType, ArtWorkType } from '../interfaces/schemas'

export function sortArtWorkCategoriesByName(
  unsortedCategories: ArtWorkCategoryType[]
): ArtWorkCategoryType[] {
  function _compare_name(a: ArtWorkCategoryType, b: ArtWorkCategoryType) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }

  let result: ArtWorkCategoryType[] = []
  for (let i of unsortedCategories) result.push(i)

  result.sort(_compare_name)

  return result
}

export function sortArtWorkByDate(unsortedArtWork: ArtWorkType[]) {
  function _compare_createdAt(a: ArtWorkType, b: ArtWorkType) {
    if (a._createdAt > b._createdAt) return 1
    if (a._createdAt < b._createdAt) return -1
    return 0
  }

  let result: ArtWorkType[] = []
  for (let i of unsortedArtWork) result.push(i)

  result.sort(_compare_createdAt)

  return result
}

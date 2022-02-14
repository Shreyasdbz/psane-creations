import { ArtWorkCategoryType, ArtWorkType } from '../interfaces/schemas'
import { CATEGORY_ANY_ID } from './constants'

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

type ArtWorkCategoryUnfilteredType = {
  _id: string
  name: string
  categoryShown: boolean
}
export function mapArtWorkCategories(
  unfilteredArtWorkCategories: ArtWorkCategoryUnfilteredType[]
): ArtWorkCategoryType[] {
  let res: ArtWorkCategoryType[] = []

  let category_any: ArtWorkCategoryType = {
    _id: CATEGORY_ANY_ID,
    name: 'All',
    categoryShown: true,
    selected: true,
  }

  res.push(category_any)

  for (let i of unfilteredArtWorkCategories) {
    if (i.categoryShown === true) {
      let obj: ArtWorkCategoryType = {
        _id: i._id,
        name: i.name,
        categoryShown: i.categoryShown,
        selected: false,
      }
      res.push(obj)
    }
  }

  return res
}

function _getSelectedCategoriesList(
  allCategories: ArtWorkCategoryType[]
): string[] {
  let res: string[] = []
  for (let c of allCategories) {
    if (c.selected) res.push(c._id)
  }
  return res
}

export function displayArtByCategory(
  allArt: ArtWorkType[],
  allCategories: ArtWorkCategoryType[]
): ArtWorkType[] {
  for (let i of allCategories) {
    if (i._id === CATEGORY_ANY_ID) {
      if (i.selected === true) {
        return allArt
      }
    }
  }

  let selectedCats = _getSelectedCategoriesList(allCategories)
  console.log(selectedCats)
  let res: ArtWorkType[] = []

  artLoop: for (let a of allArt) {
    catLoop: for (let c of a.category) {
      console.log(c._id)
      if (selectedCats.includes(c._id)) {
        res.push(a)
        break catLoop
      }
    }
  }

  return res
}

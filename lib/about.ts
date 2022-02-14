import { TestimonialType } from '../interfaces/schemas'

export function sortTestimonialsByDate(
  unsortedTestimonials: TestimonialType[]
): TestimonialType[] {
  function _compareDate(a: TestimonialType, b: TestimonialType) {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  }

  let res: TestimonialType[] = []
  for (let i of unsortedTestimonials) res.push(i)

  res.sort(_compareDate)
  return res
}

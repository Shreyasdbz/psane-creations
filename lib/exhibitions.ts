import { ExhibitionType } from '../interfaces/schemas'

// Sorts exhibitions by start date
export function sortExhibitionsByStartDate(
  unsortedExhibitions: ExhibitionType[]
): ExhibitionType[] {
  function _compareStartDate(a: ExhibitionType, b: ExhibitionType) {
    if (a.dateStart > b.dateStart) return 1
    if (a.dateStart < b.dateStart) return -1
    return 0
  }

  let res: ExhibitionType[] = []
  for (let i of unsortedExhibitions) res.push(i)

  res.sort(_compareStartDate)

  return res
}

function _getTodaysDate(): string {
  let res = ''
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  let yyyy = today.getFullYear()
  res = yyyy + '-' + mm + '-' + dd
  return res
}

export function getNextExhibition(
  exhibitions: ExhibitionType[] | null
): ExhibitionType | null {
  let res: ExhibitionType | null = null
  const todaysDate = _getTodaysDate()
  if (exhibitions) {
    for (let i of exhibitions) {
      if (i.dateStart > todaysDate) return i
    }
  }
  return res
}

export function getFutureExhibitions(
  exhibitions: ExhibitionType[] | null
): ExhibitionType[] | null {
  let res: ExhibitionType[] | null = []
  const todaysDate = _getTodaysDate()
  let nextExhibitionCounted = false

  if (exhibitions) {
    for (let i of exhibitions) {
      if (i.dateStart > todaysDate) {
        if (!nextExhibitionCounted) nextExhibitionCounted = true
        else res.push(i)
      }
    }
  }

  if (res === []) res = null

  return res
}

function _getFancyDayString(dayNum: number): string {
  switch (dayNum % 10) {
    case 1:
      return `${dayNum}st`
    case 2:
      return `${dayNum}nd`
    case 3:
      return `${dayNum}rd`
    default:
      return `${dayNum}th`
  }
}

export function getFancyDateString(date: string): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  let dateSplit = date.split('-')
  let yearNum = dateSplit[0]
  let monthNum = parseInt(dateSplit[1])
  let dayNum = parseInt(dateSplit[2])

  let day = _getFancyDayString(dayNum)

  let month = months[monthNum - 1]

  let res = `${month} ${day}, ${yearNum}`

  return res
}

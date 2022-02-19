// // log the pageview with their URL
// export const pageview = (url: string) => {
//   window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//     page_path: url,
//   })
// }

// // log specific events happening.
// export const event = ({ action, params }) => {
//   window.gtag('event', action, params)
// }

let google_analytics_key = ''
if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
  google_analytics_key = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
}

export function trackPageView(url: string) {
  if (typeof window !== undefined) {
    window.gtag('config', google_analytics_key, {
      page_path: url,
    })
  }
}

export function trackArtWorkClick(title: string) {
  if (typeof window !== undefined) {
    window.gtag('event', `Clicked on Art Work: ${title}`)
  }
}

export function trackMapClick(title: string) {
  if (typeof window !== undefined) {
    window.gtag('event', `Clicked on Exhibition: ${title}`)
  }
}

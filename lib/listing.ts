import axios from 'axios'

// Pull listing details from a given url
export async function getListingByUrl(url: string) {
  // Full url: https://www.etsy.com/listing/1152014502/hand-painted-wine-bottle-warli-art?click_key=1f9bc212c4ffea8fff80da5d3c84f89d5a870e17%3A1152014502&click_sum=ebcf5b15&ref=shop_home_active_6&frs=1
  let urlSplit = url.split('/')
  let listingId = urlSplit[4]
}

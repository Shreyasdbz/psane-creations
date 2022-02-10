import axios from 'axios'

// Get the shop rating and return the floored amount
export async function getShopRating() {
  let corsStubUrl = process.env.NEXT_PUBLIC_CORS_STUB_URL
  let url = corsStubUrl + '/https://api.etsy.com/v3/application/shops/16525990'

  let etsy_secret = ''
  if (process.env.NEXT_PUBLIC_ETSY_SECRET)
    etsy_secret = process.env.NEXT_PUBLIC_ETSY_SECRET

  //   console.log('[lib/shop] call made')

  return await axios.get(url, { headers: { 'x-api-key': etsy_secret } })
}

import { firestore } from '../libs/Firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

export interface YakitoriInfo {
  name: string
  station: string
  contact: string
  postalCode: string
  address: string
  prefecture: number
  access: string
  overview: string
  foodsImageUrls: string[]
  exteriorImageUrls: string[]
  startTime: string
  endTime: string
  lowestPrice: string
  highestPrice: string
  holiday: number[]
  lat: string
  lng: string
  restaurantId: string,
  createUserId: string
}

export const saveYakitoriInfo = async (params: YakitoriInfo): Promise<void> => {
  const { restaurantId } = params
  console.log(params, restaurantId)
  if (!restaurantId) { return }
  try {
    await setDoc(doc(firestore, 'yakitori', `${restaurantId}`), {
      ...params,
      createDate: Timestamp.fromDate(new Date())
    })
  } catch (e) {
    Promise.reject(e)
  }
}

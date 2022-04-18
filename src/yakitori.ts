import { firestore } from '../libs/Firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { YakitoriInfoType } from '../store/yakitori/types'
import { getPrefix } from './misc'

const prefix = getPrefix()

export const saveYakitoriInfo = async (params: YakitoriInfoType): Promise<void> => {
  const { restaurantId } = params
  if (!restaurantId) { return }
  try {
    await setDoc(doc(firestore, `${prefix}yakitori`, `${restaurantId}`), {
      ...params,
      createDate: Timestamp.fromDate(new Date())
    })
  } catch (e) {
    Promise.reject(e)
  }
}

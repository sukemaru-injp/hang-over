import { firestore } from '../libs/Firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { YakitoriInfo } from '../store/yakitori/types'

export const saveYakitoriInfo = async (params: YakitoriInfo): Promise<void> => {
  const { restaurantId } = params
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

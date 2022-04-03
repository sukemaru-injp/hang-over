import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { format } from 'date-fns'

const storage = getStorage()

export const saveFoodsStorage = async (id: string, files: FileList): Promise<string[]> => {
  const urlList: string[] = []
  for (const file of files) {
    const testStorage = ref(storage, `foods/${id}/${format(new Date(), 'yyyyMMdd')}${file.name}`)
    try {
      const { ref } = await uploadBytes(testStorage, file)
      const url = await getDownloadURL(ref)
      urlList.push(url)
    } catch (e) {
      Promise.reject(e)
    }
  }
  return urlList
}

export const saveExteriorStorage = async (id: string, files: FileList): Promise<string[]> => {
  const urlList: string[] = []
  for (const file of files) {
    const testStorage = ref(storage, `exterior/${id}/${format(new Date(), 'yyyyMMdd')}${file.name}`)
    try {
      const { ref } = await uploadBytes(testStorage, file)
      const url = await getDownloadURL(ref)
      urlList.push(url)
    } catch (e) {
      Promise.reject(e)
    }
  }
  return urlList
}

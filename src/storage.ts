import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { format } from 'date-fns'

const storage = getStorage()

export const saveTestStorage = async (id: string, files: FileList): Promise<string[]> => {
  const urlList: string[] = []
  for (const file of files) {
    const testStorage = ref(storage, `tests/${id}/${format(new Date(), 'yyyyMMdd')}${file.name}`)
    try {
      const { ref } = await uploadBytes(testStorage, file)
      const url = await getDownloadURL(ref)
      urlList.push(url)
    } catch (e) {
      Promise.reject(e)
    }
  }
  console.log('list', urlList)
  return urlList
}

import { getStorage, ref } from 'firebase/storage'

const storage = getStorage()

export const saveTestStorage = (id: string, files: FileList) => {
  const testStorage = ref(storage, `tests/${id}`)
  console.log(testStorage, files)
}

import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { auth, firestore } from '../libs/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { getPrefix } from './misc'

const prefix = getPrefix()

export const getUserInfoByFireStore = async (uid: string|null) => {
  if (!uid) { return }
  try {
    const res = await getDoc(doc(firestore, `${prefix}users`, `${uid}`))
    const user = res.data()
    return user
  } catch (e) {
    Promise.reject(e)
  }
}

export const login = async (email: string, pin: string) => {
  let res
  await signInWithEmailAndPassword(auth, email, pin)
    .then(async (userCredential: UserCredential) => {
      const { user } = userCredential
      const { uid } = user
      try {
        res = await getUserInfoByFireStore(uid)
      } catch (e) {
        Promise.reject(e)
      }
    })
    .catch((e) => {
      res = {}
      Promise.reject(e)
    })
  return res
}

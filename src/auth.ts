import { signInWithEmailAndPassword, UserCredential, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '../libs/Firebase'
import { doc, getDoc, updateDoc, setDoc, Timestamp } from 'firebase/firestore'
import { getPrefix } from './misc'
import { UserData } from '../store/users/types'

const prefix = getPrefix()

export const updateUserInfo = async (uid: string, user: UserData): Promise<void> => {
  try {
    await updateDoc(doc(firestore, `${prefix}users`, `${uid}`), user)
  } catch (e) {
    Promise.reject(e)
  }
}

const setFireStore = async (name: string, email: string|null, uid: string) => {
  try {
    await setDoc(doc(firestore, `${prefix}users`, `${uid}`), {
      name,
      email,
      uid,
      manage_flag: false,
      createDate: Timestamp.fromDate(new Date())
    })
  } catch (e) {
    Promise.reject(e)
  }
}

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

export const loginAction = async (email: string, pin: string): Promise<UserData|null> => {
  let res = null
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
      Promise.reject(e)
    })
  return res
}

export const logoutAction = async (): Promise<void> => {
  await signOut(auth)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('logout')
    })
    .catch((e) => {
      Promise.reject(e)
    }) 
}

export const createAccountAction = async (email: string, pin: string, name: string): Promise<UserData|undefined|void> => {
  let res
  await createUserWithEmailAndPassword(auth, email, pin)
    .then(async (userCredential: UserCredential) => {
      const { user } = userCredential
      const { email, uid } = user
      await setFireStore(name, email, uid)
      res = {
        name,
        email,
        uid,
        manage_flag: false
      }
    })
    .catch((e) => {
      Promise.reject(e)
    })
  return res
}

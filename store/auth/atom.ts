import { atom } from 'recoil'
import type { Auth } from './types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage
})

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    isLogin: false,
    name: '',
    uid: '',
    email: '',
    manage_flag: false
  },
  // localStorageに置くのは背けた方が良いかも
  effects_UNSTABLE: [persistAtom]
})

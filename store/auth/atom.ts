import { atom } from 'recoil'
import type { Auth } from './types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    isLogin: false,
    name: '',
    uid: '',
    email: '',
    manage_flag: false
  },
  effects_UNSTABLE: [persistAtom]
})

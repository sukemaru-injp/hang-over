import { atom } from 'recoil'
import type { Auth } from './types'

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    isLogin: false,
    name: '',
    uid: '',
    email: '',
    manage_flag: false
  }
})

import { atom } from 'recoil'

export interface Auth {
  isLogin: boolean,
  name: string,
  uid: string,
  email: string,
  manage_flag: boolean
}

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

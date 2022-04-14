import { atom } from 'recoil'
import type { UserData } from './types'

export const userList = atom<UserData[]>({
  key: 'usersState',
  default: [],
})

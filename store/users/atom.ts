import { atom } from 'recoil'
import type { UserData } from './types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userList = atom<UserData[]>({
  key: 'usersState',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

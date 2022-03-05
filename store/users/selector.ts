import { selector } from 'recoil'
import { userList } from './atom'
import type { UserData } from './types'

export const userListSelector = selector<UserData[]>({
  key: 'userListSelector',
  get: ({ get }) => {
    return get(userList)
  }
})

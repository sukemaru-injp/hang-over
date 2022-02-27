import { selector } from 'recoil'
import { authState, Auth } from './atom'

export const authSelector = selector<Auth>({
  key: 'loadingSelector',
  get: ({ get }) => {
    return get(authState)
  }
})

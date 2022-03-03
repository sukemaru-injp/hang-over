import { selector } from 'recoil'
import { authState, Auth } from './atom'

export const authSelector = selector<Auth>({
  key: 'authSelector',
  get: ({ get }) => {
    return get(authState)
  }
})

export type loginState = boolean

export const isLoginSelector = selector<loginState>({
  key: 'isLoginSelector',
  get: ({ get }) => {
    const { isLogin } = get(authState)
    return isLogin
  }
})

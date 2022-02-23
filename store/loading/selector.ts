import { selector } from 'recoil'
import { loadingState } from './atom'

export const loadingSelector = selector<boolean>({
  key: 'loadingSelector',
  get: ({ get }) => {
    return get(loadingState)
  }
})

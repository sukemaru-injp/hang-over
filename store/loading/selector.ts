import { selector } from 'recoil'
import { loadingState } from './atom'

export const loadingSelector = selector({
  key: 'loadingState',
  get: ({ get }) => {
    return get(loadingState)
  }
})

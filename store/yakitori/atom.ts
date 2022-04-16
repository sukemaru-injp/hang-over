import { atom } from 'recoil'
import type { YakitoriInfo } from './types'

export const yakitoriList = atom<YakitoriInfo[]>({
  key: 'yakitoriState',
  default: [],
})

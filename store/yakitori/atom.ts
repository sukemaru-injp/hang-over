import { atom } from 'recoil'
import type { YakitoriInfoType } from './types'

export const yakitoriList = atom<YakitoriInfoType[]>({
  key: 'yakitoriState',
  default: [],
})

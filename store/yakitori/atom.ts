import { atom } from 'recoil'
import type { YakitoriInfo } from './types'

export const userList = atom<YakitoriInfo[]>({
  key: 'yakitoriState',
  default: []
})

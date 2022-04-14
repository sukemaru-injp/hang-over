import { atom } from 'recoil'
import type { YakitoriInfo } from './types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userList = atom<YakitoriInfo[]>({
  key: 'yakitoriState',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

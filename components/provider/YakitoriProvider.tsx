import { FC, ReactNode, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { YakitoriInfoType } from '../../store/yakitori/types'
import { yakitoriList } from '../../store/yakitori/atom'
import { map } from 'lodash'
import { getDocs, collection } from 'firebase/firestore'
import { firestore } from '../../libs/Firebase'

interface Props {
  children: ReactNode
}
const YakitoriProvider: FC<Props> = ({ children }: Props) => {
  const setList = useSetRecoilState<YakitoriInfoType[]>(yakitoriList)
  useEffect(() => {
    (async() => {
      try {
        const res = await getDocs(collection(firestore, 'yakitori'))
        setList(map(res.docs, v => v.data() as YakitoriInfoType))
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default YakitoriProvider

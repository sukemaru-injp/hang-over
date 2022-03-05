import { FC, ReactNode, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { getPrefix } from '../../src/misc'
import { map } from 'lodash'
import { useSetRecoilState } from 'recoil'
import { userList } from '../../store/users/atom'
import type { UserData } from '../../store/users/types'
import { firestore } from '../../libs/Firebase'

interface Props {
  children: ReactNode
}
const UserList: FC<Props> = ({ children }: Props) => {
  const setUsers = useSetRecoilState<UserData[]>(userList)
  useEffect(() => {
    (async() => {
      try {
        const res = await getDocs(collection(firestore, `${getPrefix()}users`))
        setUsers(map(res.docs, v => v.data() as UserData))
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })()
  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default UserList

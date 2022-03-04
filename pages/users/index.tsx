import type { NextPage } from 'next'
import { useState } from 'react'
import { firestore } from '../../libs/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { getPrefix } from '../../src/misc'
import { useEffect } from 'react'
import { map } from 'lodash'

interface UserData {
  email: string,
  name: string,
  uid: string,
  createDate: any
}

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState<UserData[]>([])
  useEffect(() => {
    (async() => {
      try {
        const res = await getDocs(collection(firestore, `${getPrefix()}users`))
        res.forEach(v => {
          const user = v.data() as UserData
          setUsers([...users, user])
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })()
  }, [])
  console.log(users)

  return (
    <>
      {map(users, (v, id) => {
        return (<p key={id}>{v.name}</p>)
      })}
    </>
  )
}

export default UsersPage

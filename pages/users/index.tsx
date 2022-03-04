import type { NextPage } from 'next'
import { firestore } from '../../libs/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { getPrefix } from '../../src/misc'
import { useEffect } from 'react'

const UsersPage: NextPage = () => {
  useEffect(() => {
    (async() => {
      try {
        const res = await getDocs(collection(firestore, `${getPrefix()}users`))
        res.forEach(v => {
          console.log(v.data())
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }  
    })()
  }, [])

  return (
    <>
    </>
  )
}

export default UsersPage

import { FC, ReactNode, useEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { authState } from '../../store/auth/atom'
import type { Auth } from '../../store/auth/types'
import { loadingState } from '../../store/loading/atom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../libs/Firebase'
import { getUserInfoByFireStore } from '../../src/auth'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const AuthCheck: FC<Props> = (props: Props) => {
  const { isLogin } = useRecoilValue<Auth>(authState)
  const setAuth = useSetRecoilState<Auth>(authState)
  const setLoading = useSetRecoilState<boolean>(loadingState)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid } = user
        setLoading(true)
        try {
          const res = await getUserInfoByFireStore(uid)
          setAuth(val => {
            return {
              ...val,
              name: res?.name || '',
              email: res?.email || '',
              uid: res?.uid || '',
              manage_flag: res?.manage_flag || false,
              isLogin: true }
          })
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e)
        }
        setLoading(false)
      }
    })
    if (!isLogin) {
      router.push('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthCheck

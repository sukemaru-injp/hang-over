import { FC, ReactNode, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'
import { loadingState } from '../../store/loading/atom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../libs/Firebase'
import { getUserInfoByFireStore } from '../../src/auth'

interface Props {
  children: ReactNode
}

const AuthCheck: FC<Props> = (props: Props) => {
  const { isLogin }: Auth = useRecoilValue(authState)
  const setAuth = useSetRecoilState<Auth>(authState)
  const setLoading = useSetRecoilState<boolean>(loadingState)

  useEffect(() => {
    if (isLogin) { return }
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
              isLogin: true }
          })
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e)
        }
        setLoading(false)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthCheck
